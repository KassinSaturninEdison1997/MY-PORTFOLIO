import { PERSONNALS_COLLECTION } from "./../../constants/firebase-constants";
import { IFormationForm } from "./../../../containers/section/Formations/SubCategorie/CreateEditFormationForm";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, personnalCollectionKey, storage } from "../../firebase/firebase";
import {
  addFormation,
  addFormationBegin,
  fetchFormation,
} from "../../../features/formation/formationSlice";
import _ from "lodash";
import { addNotification } from "../../../features/notifications/notificationSlices";
import { IDSource } from "../../../utils/utils";

const cleanUndefinedKey = (object: any) => {
  if (!_.isEmpty(_.keys(object))) {
    _.map(_.keys(object), (cle: string) => {
      if (cle === "id" || object[cle] === undefined) {
        delete object[cle];
      }
    });
    return object;
  }
  return object;
};

export const saveFormationWithFileTreatment = createAsyncThunk(
  "formation/addFormation",
  async (
    args: {
      formation: IFormationForm;
    },
    { dispatch }
  ) => {
    const { ecole_logo } = args.formation;
    if (!ecole_logo) {
      dispatch(
        addTraining({
          formation: {
            ...args.formation,
          },
        })
      );
    } else {
      const file = ecole_logo as any;
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
              const formation = {
                ...args.formation,
                ecole_logo: url,
              } as IFormationForm;
              dispatch(addTraining({ formation }));
            });
          }
        );
      } else {
        dispatch(
          addTraining({
            formation: {
              ...args.formation,
            },
          })
        );
      }
    }
  }
);

const addTraining = createAsyncThunk(
  "formation/addFormation",
  async (
    args: {
      formation: IFormationForm;
    },
    { dispatch }
  ) => {
    const formation = cleanUndefinedKey(args.formation);
    const collection_key = personnalCollectionKey();
    dispatch(addFormationBegin());
    addDoc(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/FORMATIONS`),
      formation
    )
      .then((doc) => {
        dispatch(
          addFormation({
            formation: formation,
          })
        );

        dispatch(
          addNotification({
            error: false,
            message: `Formation ajouté avec succès: ${doc.id}`,
            id: doc.id,
          })
        );

        dispatch(fetchAllFormation());
      })
      .catch(() => {
        dispatch(
          addNotification({
            error: true,
            message: `L'ajout de la formation a échoué `,
            id: IDSource(),
          })
        );
      });
  }
);

export const fetchAllFormation = createAsyncThunk(
  "formation/fetchFormation",
  async (_args, { dispatch }) => {
    const collection_key = personnalCollectionKey();
    const querySnapshot = await getDocs(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/FORMATIONS`)
    );

    //Formation querysnapshot
    const formations: IFormationForm[] = [];
    querySnapshot.forEach((doc) => {
      formations.push({
        id: doc.id,
        debut: doc.data()["debut"],
        fin: doc.data()["fin"],
        ecole: doc.data()["ecole"],
        ecole_url: doc.data()["ecole_url"],
        ecole_logo: doc.data()["ecole_logo"],
        diplome: doc.data()["diplome"],
        domaine: doc.data()["domaine"],
        description: doc.data()["description"],
        media: doc.data()["media"],
        activites_academique: doc.data()["activites_academique"],
      });
    });

    dispatch(
      fetchFormation({
        formations,
      })
    );
  }
);
