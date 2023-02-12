import { storage } from './../../firebase/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICertificationForm } from "../../../containers/section/Certifications/SubCategorie/CreateEditCertification";
import { IDSource, cleanUndefinedKey } from "../../../utils/utils";
import { db, personnalCollectionKey } from "../../firebase/firebase";
import { PERSONNALS_COLLECTION } from "../../constants/firebase-constants";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { addNotification } from "../../../features/notifications/notificationSlices";
import { addCertification, addCertificationBegin, fetchCertification } from "../../../features/certification/certificationSlice";
import _ from "lodash";

export const saveCertificationWithFileTreatment = createAsyncThunk(
  "certification/addCertification",
  async (
    args: {
      certification: ICertificationForm;
    },
    { dispatch }
  ) => {
    const { piece } = args.certification;
    if (!piece) {
      dispatch(
        addCertificationInDatabase({
          certification: {
            ...args.certification,
          },
        })
      );
    } else {
      const file = piece as any;
      if (!_.isString(file)) {
        const storageRef = ref(storage, `FORMATION/${file["name"]}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(percent);
          },
          (err) => console.log(err),
          () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              const certification = {
                ...args.certification,
                piece: url,
              } as ICertificationForm;
              dispatch(addCertificationInDatabase({ certification }));
            });
          }
        );
      } else {
        dispatch(
          addCertificationInDatabase({
            certification: {
              ...args.certification,
            },
          })
        );
      }
    }
  }
);

const addCertificationInDatabase = createAsyncThunk(
  "certification/addCertification",
  async (
    args: {
      certification: ICertificationForm;
    },
    { dispatch }
  ) => {
    const certification = cleanUndefinedKey(args.certification);
    const collection_key = personnalCollectionKey();
    dispatch(addCertificationBegin());
    addDoc(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/CERTIFICATIONS`),
      certification
    )
      .then((doc) => {
        dispatch(
          addCertification({
            certification: certification,
          })
        );

        dispatch(
          addNotification({
            error: false,
            message: `Certification ajouté avec succès: ${doc.id}`,
            id: doc.id,
          })
        );

        dispatch(fetchAllcertification());
      })
      .catch(() => {
        dispatch(
          addNotification({
            error: true,
            message: `L'ajout de la certification a échoué `,
            id: IDSource(),
          })
        );
      });
  }
);

export const fetchAllcertification = createAsyncThunk(
  "certification/fetchCertification",
  async (_args, { dispatch }) => {
    const collection_key = personnalCollectionKey();
    const querySnapshot = await getDocs(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/CERTIFICATIONS`)
    );

    //Certification querysnapshot
    const certifications: ICertificationForm[] = [];
    querySnapshot.forEach((doc) => {
      certifications.push({
        id: doc.id,
        expire: doc.data()["expire"],
        obtention: doc.data()["obtention"],
        organisme: doc.data()["organisme"],
        id_certif: doc.data()["id_certif"],
        nom: doc.data()["nom"],
        piece: doc.data()["piece"]
      });
    });

    dispatch(
      fetchCertification({
        certifications,
      })
    );
  }
);