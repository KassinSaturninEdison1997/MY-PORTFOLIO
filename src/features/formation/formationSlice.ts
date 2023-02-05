import { IFormationForm } from "./../../containers/section/Formations/SubCategorie/CreateEditFormationForm";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface FormationState {
  isAdding?: boolean;
  isEditing?: boolean;
  isDeleting?: boolean;

  allFormations: IFormationForm[];
  selectedFormation?: IFormationForm;
}

const initialState: FormationState = {
  allFormations: [],
  isAdding: false,
  isDeleting: false,
  isEditing: false,
};

export const formationSlice = createSlice({
  name: "formation",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addFormationBegin: (state, action: PayloadAction) => {
      state.isAdding = true;
    },
    addFormation: (
      state,
      action: PayloadAction<{ formation: IFormationForm }>
    ) => {
      console.log(action.payload.formation);
    },
    fetchFormation: (
      state,
      action: PayloadAction<{ formations: IFormationForm[] }>
    ) => {
      state.allFormations = action.payload.formations;
    },
  },
});

export const { addFormationBegin, addFormation, fetchFormation } = formationSlice.actions;

export const allFormations = (state: RootState) => state.formation.allFormations;
export const selectedFormation = (state: RootState) =>
  state.formation.selectedFormation;
export const isAdding = (state: RootState) => state.formation.isAdding;
export const isEditing = (state: RootState) => state.formation.isEditing;

export default formationSlice.reducer;
