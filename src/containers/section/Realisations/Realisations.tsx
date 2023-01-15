import React from "react";
import CustomButton from "../../../components/Custom/Components/CustomButton/CustomButton";
import CustomLabel from "../../../components/Custom/Components/CustomLabel/CustomLabel";
import CustomTextField from "../../../components/Custom/Components/CustomTextField/CustomTextField";
import AddIcon from "../../../components/Custom/Icons/AddIcon";
import RealisationBox from "./RealisationBox";

const Realisations = () => {
  return (
    <div>
      <section>
        <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
          <div className="flex items-center justify-between">
            <CustomLabel label="NOS PROJETS" />
            <CustomButton
              label="New"
              Icon={<AddIcon />}
              withIcon
              onAction={() => alert("Bonjour")}
            />
          </div>
          <CustomTextField
            label=""
            placeholder="Filtrer par..."
            name="rechecher"
            withSearchIcon
          />
        </header>
      </section>

      <RealisationBox />
    </div>
  );
};

export default Realisations;
