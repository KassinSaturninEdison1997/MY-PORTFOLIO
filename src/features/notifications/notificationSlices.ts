import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import _ from "lodash";

export interface NotificationState {
  allNotifications: {
    error: boolean;
    message: string;
    id: string;
  }[];
}

const initialState: NotificationState = {
  allNotifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<{ error: boolean; message: string; id: string }>
    ) => {
      const { error, id, message } = action.payload;
      const notifs = state.allNotifications;
      notifs.push({
        error,
        message,
        id,
      });
    },

    closeNotifications: (state, action: PayloadAction) => {
      state.allNotifications = [];
    },

    closeOneNotification: (state, action: PayloadAction<{ id: string }>) => {
      state.allNotifications = [
        ..._.filter(state.allNotifications, { id: action.payload.id }),
      ];
    },
  },
});

export const { addNotification, closeNotifications, closeOneNotification } =
  notificationSlice.actions;
export const allNotifications = (state: RootState) =>
  state.notification.allNotifications;
export default notificationSlice.reducer;
