import React from "react";
import CustomButton from "../../../components/Custom/Components/CustomButton/CustomButton";
import CustomTextField from "../../../components/Custom/Components/CustomTextField/CustomTextField";
import { Paper } from "@mui/material";

const Contacts = () => {
  return (
    <Paper>
      <div className="w-full p-10 flex flex-col gap-5">
        <h1
          style={{
            fontFamily: "Inter sans-serif",
            marginBottom: "20px",
            fontSize: "20px",
            color: "#1f2937",
          }}
          className="flex items-center justify-center uppercase font-bold"
        >
          Laissez-nous un message
        </h1>
        <CustomTextField
          name="email"
          placeholder="Votre adresse email..."
          required
          size="medium"
        />

        <CustomTextField
          name="Numero de Téléphone"
          placeholder="Votre numéro de téléphone..."
          required
          size="medium"
        />

        <CustomTextField
          name="message"
          placeholder="Votre message..."
          required
          multiline
          multilineRow={10}
          size="medium"
        />

        <div className="flex justify-end items-center">
          <CustomButton label="Envoyer" />
        </div>
      </div>
    </Paper>
  );
};

export default Contacts;
