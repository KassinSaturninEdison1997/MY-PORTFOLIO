import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

export interface AuthState {
  isOnline?: boolean;
  islogin?: boolean;
  isLogout?: boolean;
  token?: string;
  user: any;
  error?: string;
  connexionInfo?: {
    code: number | string;
    type?: string;
    message?: string;
  };
}

const initialState: AuthState = {
  isOnline: false,
  error: "",
  islogin: false,
  isLogout: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginBegin: (state, action: PayloadAction) => {
      state.islogin = true;
    },
    login: (
      state,
      action: PayloadAction<{
        code: number | string;
        type: string;
        user?: User;
        message?: string;
      }>
    ) => {
      const { code, type, user, message } = action.payload;

      if (user) {
        state.user = user;
        state.isOnline = true;
        state.error = undefined;
      } else {
        state.isOnline = false;
        state.error = message;
      }
      state.islogin = false;
      state.connexionInfo = {
        code,
        type,
        message,
      };
    },

    logoutBegin: (state, action: PayloadAction) => {
      state.isLogout = true;
    },
    logout: (
      state,
      action: PayloadAction<{
        code: number | string;
        message?: string;
      }>
    ) => {
      const { code, message } = action.payload;
      state.user = undefined;
      state.isOnline = false;
      state.isLogout = false;
      state.error = undefined;
      state.connexionInfo = {
        code,
        message,
      };
    },
  },
});

export const { login, loginBegin, logout, logoutBegin } = authSlice.actions;
export const isLogin = (state: RootState) => state.auth.islogin;
export const isOnline = (state: RootState) => state.auth.isOnline;

export default authSlice.reducer;
