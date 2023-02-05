import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface CategorieState {
  categorie: string | "not-found";
  path: string;
}

const initialState: CategorieState = {
  categorie: "a-propos",
  path: "/a-propos"
};

export const categorieSlice = createSlice({
  name: 'categorie',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    change: (state, action: PayloadAction<{newCategorie: string}>) => {
      state.categorie = action.payload.newCategorie ;
    },
    changePath: (state, action: PayloadAction<{newPath: string}>) => {
      state.path = action.payload.newPath ;
    }
  }
});

export const { change, changePath } = categorieSlice.actions;
export const currentCategorie = (state: RootState) => state.categorie.categorie;
export const currentPath = (state: RootState) => state.categorie.path;
export default categorieSlice.reducer;
