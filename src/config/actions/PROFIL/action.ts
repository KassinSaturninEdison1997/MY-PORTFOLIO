import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  login,
  loginBegin,
  logout,
  logoutBegin,
} from "../../../features/auth/authSlice";

interface ILoginByEmailPassword {
  email: string;
  password: string;
}

export const loginByEmailPassword = createAsyncThunk(
  "auth/login",
  async (args: ILoginByEmailPassword, { dispatch }) => {
    dispatch(loginBegin());
    signInWithEmailAndPassword(auth, args["email"], args["password"])
      .then((userCredential) => {
        dispatch(
          login({
            user: userCredential.user,
            code: 200,
            type: "SUCCESS",
            message: "Connected",
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        dispatch(
          login({
            code: errorCode,
            message: errorMessage,
            type: "FAILED",
          })
        );
      });
  }
);

export const logoutByEmailPassword = createAsyncThunk(
  "auth/logout",
  async (_args, { dispatch }) => {
    dispatch(logoutBegin());
    signOut(auth)
      .then(() => {
        dispatch(
          logout({
            message: "Disconneted",
            code: 200,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch(
          logout({
            code: errorCode,
            message: errorMessage,
          })
        );
      });
  }
);
