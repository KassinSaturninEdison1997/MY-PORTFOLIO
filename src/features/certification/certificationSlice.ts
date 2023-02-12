import { ICertificationForm } from "./../../containers/section/Certifications/SubCategorie/CreateEditCertification";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";

export interface FormationState {
  isAdding?: boolean;
  isEditing?: boolean;
  isDeleting?: boolean;

  allCertifications: ICertificationForm[];
  selectedCertification?: ICertificationForm;
}

const initialState: FormationState = {
  allCertifications: [],
  selectedCertification: {
    id: "",
    id_certif: "",
    nom: "",
    organisme: "",
    piece: "",
    obtention: "",
    expire: "",
  },
  isAdding: false,
  isDeleting: false,
  isEditing: false,
};

export const certificationSlice = createSlice({
  name: "certification",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCertificationBegin: (state, action: PayloadAction) => {
      state.isAdding = true;
    },
    addCertification: (
      state,
      action: PayloadAction<{ certification: ICertificationForm }>
    ) => {
      console.log(action.payload.certification);
    },
    fetchCertification: (
      state,
      action: PayloadAction<{ certifications: ICertificationForm[] }>
    ) => {
      state.allCertifications = action.payload.certifications;
    },
    getCertificationSelected: (state, action: PayloadAction<{ id: string }>) => {
      const selected = _.find([...state.allCertifications], {
        id: action.payload.id,
      });
      if (selected) {
        state.selectedCertification = selected;
      }
    },
    resetCertificationSelected: (state, action: PayloadAction) => {
      state.selectedCertification = undefined;
    },
  },
});

export const {
  addCertification,
  addCertificationBegin,
  fetchCertification,
  getCertificationSelected,
  resetCertificationSelected,
} = certificationSlice.actions;

export const allCertifications = (state: RootState) =>
  state.certification.allCertifications;
export const selectedCertification = (state: RootState) =>
  state.certification.selectedCertification;
export const isAdding = (state: RootState) => state.formation.isAdding;
export const isEditing = (state: RootState) => state.formation.isEditing;

export default certificationSlice.reducer;
