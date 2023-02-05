import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Avatar from "@mui/material/Avatar";
import React from "react";
import CustomModal from "../Custom/Components/CustomModal/CustomModal";
import AuthentificationForm, {
  IAuthentificationForm,
} from "./AuthentificationForm";
import { IValidateForm, useForm } from "../../hooks/useForm";
import _ from "lodash";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../utils/constants";
import { loginByEmailPassword } from "../../config/actions/PROFIL/action";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { isLogin, isOnline } from "../../features/auth/authSlice";
import CustomLoading from "../Custom/Components/CustomLoading/CustomLoading";
import OnlineComponent from "./Online/OnlineComponent";
import LogoutButton from "./Logout/LogoutButton";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Tooltip } from "@mui/material";

const useStyle = makeStyles({
  Profil: {
    position: "absolute",
    background: "#374151",
    bottom: 0,
    height: "50px",
    marginLeft: "-20px",
    width: "20%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    columnGap: "10px",
    cursor: "pointer",
  },
});

const validateAuthForm: IValidateForm<IAuthentificationForm> = ({
  attributes,
}) => {
  const err = {} as any;
  if (_.isEmpty(attributes.email)) {
    err["email"] = "Impossible de vous connecter sans votre EMAIL";
  }
  if (!_.isEmpty(attributes.email) && !EMAIL_REGEX.test(attributes.email)) {
    err["email"] = "Cet adresse mail n'est pas correct";
  }
  if (_.isEmpty(attributes.password)) {
    err["password"] = "Impossible de vous connecter sans votre PASSWORD";
  }
  if (
    !_.isEmpty(attributes.password) &&
    !PASSWORD_REGEX.test(attributes.password)
  ) {
    err["email"] = "Cet adresse mail n'est pas correct";
  }

  return err;
};

const Profil = () => {
  const classes = useStyle();
  const [open, setopen] = React.useState(false);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLogin);
  const isonline = useAppSelector(isOnline);

  const formState = useForm({
    init: {
      email: "",
      password: "",
    } as IAuthentificationForm,
    validate: validateAuthForm,
  });

  const handleSubmit = () => {
    const { attributes } = formState;
    const { email, password } = attributes;
    setopen(false);
    dispatch(
      loginByEmailPassword({
        email,
        password,
      })
    );
  };

  return (
    <>
      <div className={classNames(classes.Profil)}>
        <Avatar
          alt="Edison KASSIN"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 35, height: 35, border: "1px solid #1f2937" }}
        />
        <Description onClickModal={() => setopen(true)} />
      </div>

      {open && !isLoading && (
        <CustomModal
          open={open}
          onClose={() => setopen(false)}
          size={"md"}
          minWidth={"800px"}
          title={!isonline ? "Authentification" : undefined}
          disabled={!_.isEmpty(formState.error)}
          onAuth={!isonline ? handleSubmit : undefined}
        >
          {!isonline ? (
            <AuthentificationForm formState={formState} />
          ) : (
            <LogoutButton onClose={() => setopen(false)} />
          )}
        </CustomModal>
      )}

      {isLoading && <CustomLoading title="En cours de connexion ..." />}
    </>
  );
};

const Description = ({ onClickModal }: { onClickModal: () => void }) => {
  const isonline = useAppSelector(isOnline);
  return (
    <div
      className="flex gap-8 items-center"
      style={{ paddingTop: "3px", paddingBottom: "3px" }}
    >
      <div className="flex flex-col">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
          }}
        >
          Edison KASSIN
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 100,
            fontSize: "12px",
          }}
        >
          Full stack Developer
        </span>
      </div>
      <span className="flex items-center gap-1">
        {!isonline && (
          <span onClick={onClickModal}>
            <Tooltip title="Se connecter comme Admin">
              <AdminPanelSettingsOutlinedIcon style={{ fontSize: "25px" }} />
            </Tooltip>
          </span>
        )}
        {isonline && (
          <span onClick={onClickModal} className="flex gap-2 items-center">
            <OnlineComponent />
            <span style={{ fontSize: "10px" }}>Online</span>
          </span>
        )}
      </span>
    </div>
  );
};
export default Profil;
