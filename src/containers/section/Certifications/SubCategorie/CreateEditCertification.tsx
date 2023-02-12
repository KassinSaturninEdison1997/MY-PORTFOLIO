import Paper from "@mui/material/Paper";
import React from "react";
import FormTitle from "../../Formations/SubCategorie/FormTitle/FormTitle";
import CustomButton from "../../../../components/Custom/Components/CustomButton/CustomButton";
import CustomTextField, {
  TEXTFIELD_TYPE,
} from "../../../../components/Custom/Components/CustomTextField/CustomTextField";
import { IValidateForm, useForm } from "../../../../hooks/useForm";
import _ from "lodash";
import { compareDate } from "../../Formations/SubCategorie/CreateEditFormationForm";
import { useAppDispatch } from "../../../../app/hooks";
import { saveCertificationWithFileTreatment } from "../../../../config/actions/CERTIFICATION/certification-action";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@material-ui/core";

export interface ICertificationForm {
  id?: string;
  id_certif?: string;
  nom: string;
  organisme: string;
  piece?: string | File;
  obtention?: string;
  expire?: string;
}

interface ICreateEditCertificationProps {}

const validateCertificationForm: IValidateForm<ICertificationForm> = ({
  attributes,
}) => {
  const err = {} as any;
  if (_.isEmpty(attributes.nom)) {
    err["nom"] = "Required!";
  }
  if (_.isEmpty(attributes.organisme)) {
    err["organisme"] = "Required!";
  }
  if (
    !_.isEmpty(attributes.expire) &&
    !_.isEmpty(attributes.obtention) &&
    _.isString(attributes.obtention) &&
    _.isString(attributes.expire) &&
    !_.includes(
      [attributes.expire, "same"],
      compareDate(attributes.obtention, attributes.expire)
    )
  ) {
    err["expire"] = "Incorrect date !";
  }

  return err;
};

const CreateEditCertification: React.FunctionComponent<
  ICreateEditCertificationProps
> = () => {
  const dispatch = useAppDispatch();
  const [redirect, setRedirect] = React.useState(false);
  const { attributes, handleInputChange, error } = useForm<ICertificationForm>({
    init: {
      id_certif: "",
      nom: "",
      organisme: "",
      piece: "",
      obtention: "",
      expire: "",
    },
    validate: validateCertificationForm,
  });

  const handleSave = () => {
    dispatch(
      saveCertificationWithFileTreatment({
        certification: { ...attributes },
      })
    );
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/certifications"} />;
  }
  return (
    <Paper
      elevation={3}
      className="h-full p-5 flex flex-col gap-3 overflow-auto"
    >
      {/* HEADER + BUTTON*/}
      <span className="flex items-center justify-between">
        <FormTitle title="Ajouter une Certification" />

        <span className="flex items-center gap-3">
          <Link to="/certifications">
            <Button>Annuler</Button>
          </Link>
          <CustomButton
            label="Ajouter"
            onAction={
              !_.isEmpty(error) ? () => alert("Erreur sur ") : handleSave
            }
            disabled={!_.isEmpty(error)}
          />
        </span>
      </span>

      <div className="w-full flex flex-col gap-3 p-10">
        {/* IDENTITE */}
        <div className="flex flex-col gap-3">
          <CustomTextField
            name="id_certif"
            error={error}
            size="medium"
            label="Identifiant de la certification"
            value={attributes.id_certif}
            onChange={handleInputChange}
          />
          <CustomTextField
            name="nom"
            error={error}
            size="medium"
            label="Nom de la certification"
            value={attributes.nom}
            onChange={handleInputChange}
            required
          />

          <CustomTextField
            name="organisme"
            size="medium"
            error={error}
            label="Organisme de la certification"
            value={attributes.organisme}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* DEBUT + FIN */}
        <div className="flex items-center gap-3">
          <CustomTextField
            name="obtention"
            size="medium"
            label="Début de la formation"
            type={TEXTFIELD_TYPE.DATE}
            value={attributes.obtention}
            error={error}
            onChange={handleInputChange}
          />
          <CustomTextField
            name="expire"
            size="medium"
            label="Fin de la fin"
            type={TEXTFIELD_TYPE.DATE}
            value={attributes.expire}
            error={error}
            onChange={handleInputChange}
          />
        </div>

        {/* MEDIAS */}
        <div className="flex justify-between items-center">
          <div></div>
          <button className="rounded-2xl bg-slate-200 px-5 py-3" disabled>
            Ajouter des médias (Add after)
          </button>
        </div>
      </div>
    </Paper>
  );
};

export default CreateEditCertification;
