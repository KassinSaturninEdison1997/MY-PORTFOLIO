import React from "react";
import "./LogoutButton.css";
import { useAppDispatch } from "../../../app/hooks";
import { logoutByEmailPassword } from "../../../config/actions/PROFIL/action";

interface ILogoutButton {
  onClose: () => void;
}
const LogoutButton: React.FunctionComponent<ILogoutButton> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex items-center justify-center m-5">
      <button
        className="button"
        onClick={() => {
          dispatch(logoutByEmailPassword());
          onClose();
        }}
      >
        Se deconnecter
      </button>
    </div>
  );
};

export default LogoutButton;
