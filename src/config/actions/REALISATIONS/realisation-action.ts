import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRealisationForm } from './../../../containers/section/Realisations/subCategorie/CreateEditRealisation';
import { IDSource, cleanUndefinedKey } from '../../../utils/utils';
import { db, personnalCollectionKey } from '../../firebase/firebase';
import { PERSONNALS_COLLECTION } from '../../constants/firebase-constants';
import { addrealisation, addrealisationBegin, fetchrealisation } from '../../../features/realisations/realisationSlice';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { addNotification } from '../../../features/notifications/notificationSlices';


export const addrealisationInDatabase = createAsyncThunk(
  "realisation/addrealisation",
  async (
    args: {
      realisation: IRealisationForm;
    },
    { dispatch }
  ) => {
    const realisation = cleanUndefinedKey(args.realisation);
    const collection_key = personnalCollectionKey();
    dispatch(addrealisationBegin());
    addDoc(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/REALISATIONS`),
      realisation
    )
      .then((doc) => {
        dispatch(
          addrealisation({
            realisation: realisation,
          })
        );

        dispatch(
          addNotification({
            error: false,
            message: `Nouvele réalisation ajouté avec succès: ${doc.id}`,
            id: doc.id,
          })
        );

        dispatch(fetchAllrealisation());
      })
      .catch(() => {
        dispatch(
          addNotification({
            error: true,
            message: `L'ajout de la realisation a échoué `,
            id: IDSource(),
          })
        );
      });
  }
);

export const fetchAllrealisation = createAsyncThunk(
  "realisation/fetchrealisation",
  async (_args, { dispatch }) => {
    const collection_key = personnalCollectionKey();
    const querySnapshot = await getDocs(
      collection(db, `${PERSONNALS_COLLECTION}/${collection_key}/REALISATIONS`)
    );

    //realisation querysnapshot
    const realisations: IRealisationForm[] = [];
    querySnapshot.forEach((doc) => {
      realisations.push({
        id: doc.id,
        title: doc.data()["title"],
        description: doc.data()["description"],
        lien: doc.data()["lien"],
        demo: doc.data()["demo"],
      });
    });

    dispatch(
      fetchrealisation({
        realisations,
      })
    );
  }
);