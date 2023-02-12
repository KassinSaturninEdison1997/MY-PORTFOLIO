import { IRealisationForm } from './../../containers/section/Realisations/subCategorie/CreateEditRealisation';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";

export interface realisationState {
  isAdding?: boolean;
  isEditing?: boolean;
  isDeleting?: boolean;

  allrealisations: IRealisationForm[];
  selectedrealisation?: IRealisationForm;
}

const initialState: realisationState = {
  allrealisations: [],
  selectedrealisation: { id: "",
     title: "",
      description: "",
      lien: "",
    },
  isAdding: false,
  isDeleting: false,
  isEditing: false,
};

export const realisationSlice = createSlice({
  name: "realisation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addrealisationBegin: (state, action: PayloadAction) => {
      state.isAdding = true;
    },
    addrealisation: (
      state,
      action: PayloadAction<{ realisation: IRealisationForm }>
    ) => {
      console.log(action.payload.realisation);
    },
    fetchrealisation: (
      state,
      action: PayloadAction<{ realisations: IRealisationForm[] }>
    ) => {
      state.allrealisations = action.payload.realisations;
    },
    getrealisationSelected: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      const selected = _.find([...state.allrealisations], ({id: action.payload.id}));
      if(selected){
        state.selectedrealisation = selected;
      }
    },
    resetrealisationSelected: (
      state,
      action: PayloadAction
    ) => {
        state.selectedrealisation = undefined;
    },
  },
});

export const { addrealisationBegin, addrealisation, fetchrealisation, getrealisationSelected, resetrealisationSelected } = realisationSlice.actions;

export const allRealisations = (state: RootState) => state.realisation.allrealisations;
export const selectedRealisation = (state: RootState) =>
  state.realisation.selectedrealisation;
export const isAddingRealisation = (state: RootState) => state.realisation.isAdding;
export const isEditingRealisation = (state: RootState) => state.realisation.isEditing;

export default realisationSlice.reducer;
