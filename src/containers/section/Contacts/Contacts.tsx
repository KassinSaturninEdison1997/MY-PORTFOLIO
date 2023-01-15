import React from "react";
import CustomButton from "../../../components/Custom/Components/CustomButton/CustomButton";
import CustomTextField from "../../../components/Custom/Components/CustomTextField/CustomTextField";

const Contacts = () => {
  return (
    <div className="w-full p-10 flex flex-col gap-5">
      <h1
        style={{
          fontWeight: 100,
          fontFamily: "Inter sans-serif",
          marginBottom: "20px",
          fontSize: "40px",
          color: "#1f2937",
        }}
      >
        Ecrivez-nous pour toutes suggestions
      </h1>
      <CustomTextField
        name="email"
        placeholder="Votre adresse email..."
        required
      />

      <CustomTextField
        name="Numero de Téléphone"
        placeholder="Votre numéro de téléphone..."
        required
      />

      <CustomTextField
        name="message"
        placeholder="Votre message..."
        required
        multiline
        multilineRow={10}
      />

      <div className="flex justify-end items-center">
        <CustomButton label="Envoyer" />
      </div>
    </div>
  );
};

export default Contacts;
