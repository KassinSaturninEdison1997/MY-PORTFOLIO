import { Paper } from "@material-ui/core";
import CustomTextField, {
  TEXTFIELD_TYPE,
} from "../../../../components/Custom/Components/CustomTextField/CustomTextField";
import FormTitle from "./FormTitle/FormTitle";
import CustomButton from "../../../../components/Custom/Components/CustomButton/CustomButton";
import { IValidateForm, useForm } from "../../../../hooks/useForm";
import _ from "lodash";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";
import { saveFormationWithFileTreatment } from "../../../../config/actions/FORMATION/formation-actions";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import dateFormat from "dateformat";

export interface IFormationForm {
  id?: string;

  ecole: string;
  ecole_logo?: File | string;
  ecole_url?: string;

  diplome: string;
  domaine: string;

  debut: string;
  fin: string;

  media?: File[] | string[];
  activites_academique?: string | string[];

  description?: string | string[];
}

const validateFormationForm: IValidateForm<IFormationForm> = ({
  attributes,
}) => {
  const err = {} as any;

  //DATE
  if (_.isEmpty(attributes.debut)) {
    err["debut"] = "Required!";
  }
  if (_.isEmpty(attributes.fin)) {
    err["fin"] = "Required!";
  }
  if (
    !_.includes(
      [attributes.fin, "same"],
      compareDate(attributes.debut, attributes.fin)
    )
  ) {
    err["fin"] = "Incorrect date !";
  }

  //ECOLE
  if (_.isEmpty(attributes.ecole)) {
    err["ecole"] = "Required!";
  }
  if (_.isEmpty(attributes.diplome)) {
    err["diplome"] = "Required!";
  }
  if (_.isEmpty(attributes.domaine)) {
    err["domaine"] = "Required!";
  }

  return err;
};

function compareDate(date1: string, date2: string) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  if (d1.getTime() > d2.getTime()) {
    return date1;
  } else if (d1.getTime() < d2.getTime()) {
    return date2;
  } else {
    return "same";
  }
}
const CreateEditFormationForm = () => {
  const dispatch = useAppDispatch();
  const [redirect, setRedirect] = useState(false);
  const { attributes, error, handleInputChange } = useForm<IFormationForm>({
    init: {
      id: "",
      ecole: "",
      ecole_logo: "",
      ecole_url: "",
      diplome: "",
      domaine: "",
      debut: "",
      fin: "",
      media: [],
      activites_academique: "",
      description: "",
    },
    validate: validateFormationForm,
  });

  const handleChange = (name: string, value: any) => {
    if (_.isEmpty(attributes.fin) && name === "debut") {
      handleInputChange("fin", value);
    }
    handleInputChange(
      name,
      name === "ecole_logo" &&
        Object.prototype.toString.call(value) === "[object FileList]"
        ? value[0]
        : value
    );
  };

  const handleSave = () => {
    dispatch(
      saveFormationWithFileTreatment({
        formation: {
          ...attributes,
          description: _.split(attributes.description, "\n"),
          activites_academique:
            attributes.activites_academique &&
            _.isString(attributes.activites_academique)
              ? _.split(attributes.activites_academique, ",")
              : attributes.activites_academique,
          debut: dateFormat(attributes.debut, "mmmm yyyy"),
          fin: dateFormat(attributes.fin, "mmmm yyyy"),
        },
      })
    );
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/formations"} />;
  }

  return (
    <Paper
      elevation={3}
      className="h-full p-5 flex flex-col gap-3 overflow-auto"
    >
      {/* HEADER + BUTTON*/}
      <span className="flex items-center justify-between">
        <FormTitle title="Ajouter une Formation" />
        <CustomButton
          label="Ajouter"
          onAction={
            !_.isEmpty(error)
              ? () => alert("Erreur sur DIPLOME/INSTITUT")
              : handleSave
          }
          disabled={!_.isEmpty(error)}
        />
      </span>

      <div className="w-full flex flex-col gap-3 px-10">
        {/* SCHOOL FIELDS */}
        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-3" style={{ width: "80%" }}>
            <CustomTextField
              name="ecole"
              error={error}
              size="medium"
              required
              label="Ecole"
              type={TEXTFIELD_TYPE.TEXT}
              value={attributes.ecole}
              onChange={handleChange}
            />

            <CustomTextField
              name="ecole_url"
              label="Site web"
              size="medium"
              error={error}
              type={TEXTFIELD_TYPE.TEXT}
              value={attributes.ecole_url}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col-reverse items-center grow">
            <span className="grow flex items-center gap-3">
              <label
                style={{
                  border: "1px solid #ccc",
                  display: "inline-block",
                  padding: "5px",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
                className="rounded-md"
              >
                <input
                  type="file"
                  style={{
                    display: "none",
                  }}
                  accept="images/*"
                  onChange={(e) => {
                    e.stopPropagation();
                    handleChange("ecole_logo", e.target.files);
                  }}
                />
                <span className="flex items-center">
                  <UploadOutlinedIcon /> <span>Attach Logo</span>
                </span>
              </label>
              {attributes.ecole_logo && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleInputChange("ecole_logo", "");
                  }}
                  style={{ fontSize: "10px" }}
                >
                  Effacer
                </button>
              )}
            </span>
            {attributes.ecole_logo && (
              <span className="grow flex flex-center items-center justify-center">
                <img
                  src={
                    attributes.ecole_logo &&
                    Object.prototype.toString.call(attributes.ecole_logo) ===
                      "[object File]"
                      ? URL.createObjectURL(attributes.ecole_logo)
                      : "E"
                  }
                  alt="SCHOOL LOGO"
                  loading="lazy"
                  style={{ width: 150, height: 100 }}
                  className="rounded-md bg-transparent bg-cover p-3"
                />
              </span>
            )}
          </div>
        </div>

        {/* DIPLOME + DOMAINE */}
        <div className="flex flex-col gap-3">
          <CustomTextField
            name="diplome"
            error={error}
            size="medium"
            label="Diplôme obtenu"
            value={attributes.diplome}
            onChange={handleChange}
            required
          />

          <CustomTextField
            name="domaine"
            size="medium"
            error={error}
            label="Domaine de formation"
            value={attributes.domaine}
            onChange={handleChange}
            required
          />
        </div>

        {/* DEBUT + FIN */}
        <div className="flex items-center gap-3">
          <CustomTextField
            name="debut"
            size="medium"
            required
            label="Début de la formation"
            type={TEXTFIELD_TYPE.DATE}
            value={attributes.debut}
            error={error}
            onChange={handleChange}
          />
          <CustomTextField
            name="fin"
            size="medium"
            required
            label="Fin de la fin"
            type={TEXTFIELD_TYPE.DATE}
            value={attributes.fin}
            error={error}
            onChange={handleChange}
          />
        </div>

        {/* ACTIVITES ACADEMIQUES */}
        <div className="flex items-center gap-3">
          <CustomTextField
            name="activites_academique"
            size="medium"
            label="Activites academiques"
            placeholder="Exemple: cle, partie, ..."
            multiline
            multilineRow={2}
            value={attributes.activites_academique}
            onChange={handleChange}
          />
        </div>

        {/* DESCRIPTION */}
        <div className="flex items-center gap-3">
          <CustomTextField
            name="description"
            size="medium"
            label="Description"
            multiline
            multilineRow={3}
            value={attributes.description}
            // error={error}
            onChange={handleChange}
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

export default CreateEditFormationForm;
