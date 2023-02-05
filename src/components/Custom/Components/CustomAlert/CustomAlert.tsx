import { Alert } from "@mui/lab";
import React from "react";
import _ from "lodash";
import { useAppDispatch } from "../../../../app/hooks";
import {
  closeNotifications,
  closeOneNotification,
} from "../../../../features/notifications/notificationSlices";

interface ICustomAlert {
  notifications: {
    error: boolean;
    message: string;
    id: string;
  }[];
}

const CustomAlert: React.FunctionComponent<ICustomAlert> = ({
  notifications,
}) => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      dispatch(closeNotifications());
    }, 5000);
  }, [dispatch]);

  const handleCloseOneAlert = (id: string) => {
    dispatch(
      closeOneNotification({
        id,
      })
    );
  };
  return (
    <>
      {_.map(notifications, (notif) => (
        <Alert
          severity={notif.error ? "error" : "success"}
          style={{ position: "absolute", top: 0, right: 0 }}
          onClose={() => handleCloseOneAlert(notif.id)}
          className="m-5"
          key={notif.id}
        >
          {notif.message}
        </Alert>
      ))}
    </>
  );
};

export default CustomAlert;
