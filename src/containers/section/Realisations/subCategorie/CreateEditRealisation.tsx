import React from "react";
import CustomTextField from "../../../../components/Custom/Components/CustomTextField/CustomTextField";
import { Button, Container } from "@material-ui/core";
import { IValidateForm, useForm } from "../../../../hooks/useForm";
import _ from "lodash";
import { useAppDispatch } from "../../../../app/hooks";
import { addrealisationInDatabase } from "../../../../config/actions/REALISATIONS/realisation-action";
import { Link, Navigate } from "react-router-dom";

export interface IRealisationForm {
  id?: string;
  title: string;
  description: string;
  lien: string;
  demo?: string | File;
}

const validateRealisation: IValidateForm<IRealisationForm> = ({
  attributes,
}) => {
  const err = {} as any;
  if (_.isEmpty(attributes.title)) {
    err["title"] = "Required!";
  }

  if (_.isEmpty(attributes.description)) {
    err["description"] = "Required!";
  }

  if (_.isEmpty(attributes.lien)) {
    err["lien"] = "Required!";
  }

  return err;
};

const CreateEditRealisation = () => {
  const [redirect, setRedirect] = React.useState(false);
  const dispatch = useAppDispatch();
  const { attributes, handleInputChange, error } = useForm<IRealisationForm>({
    init: {
      title: "",
      description: "",
      lien: "",
    },
    validate: validateRealisation,
  });

  const handleSave = () => {
    dispatch(
      addrealisationInDatabase({
        realisation: attributes,
      })
    );
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/realisations"} />;
  }

  return (
    <div className="p-5 flex flex-col gap-5">
      <Container className="w-full bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md flex ml-10 mr-10">
        <CustomTextField
          name="title"
          label="Titre de la réalisation"
          size="medium"
          value={attributes.title}
          onChange={handleInputChange}
          required
        />

        <CustomTextField
          name="lien"
          label="Lien Github du projet"
          size="medium"
          value={attributes.lien}
          onChange={handleInputChange}
          required
        />

        <CustomTextField
          name="description"
          multiline
          multilineRow={10}
          size="medium"
          value={attributes.description}
          onChange={handleInputChange}
          label="Description de la réalisation"
          required
        />
      </Container>
      <div className="flex justify-center">
        <Link to={"/realisations"} className="w-full">
          <Button fullWidth>Annuler</Button>
        </Link>
        <Button
          fullWidth
          disabled={!_.isEmpty(error)}
          onClick={handleSave}
          style={{ background: "#1f2937", color: "#fff" }}
        >
          Sauvegarder
        </Button>
      </div>
    </div>
  );
};

export default CreateEditRealisation;
