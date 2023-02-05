import Button from "@mui/material/Button";
import React from "react";
import CustomTextField from "../../../components/Custom/Components/CustomTextField/CustomTextField";
import LaunchIcon from "@mui/icons-material/Launch";
import { change, changePath } from "../../../features/categorie/categorieSlice";
import { useAppDispatch } from "../../../app/hooks";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const Freelancer = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-full p-7">
      <h2
        className="flex justify-between items-center"
        style={{
          fontWeight: 100,
          fontFamily: "Inter sans-serif",
          marginBottom: "10px",
          fontSize: "30px",
          color: "#1f2937",
        }}
      >
        <span>
          {" "}
          Besoin d'un développeur pour votre application web ou mobile ?
        </span>
        <Link to={"/realisations"}>
          <span
            onClick={() => {
              dispatch(
                change({
                  newCategorie: "realisations",
                })
              );

              dispatch(
                changePath({
                  newPath: "/realisations",
                })
              );
            }}
          >
            <Tooltip title="Rediriger sur les réalisations">
              <LaunchIcon style={{ color: "red" }} />
            </Tooltip>
          </span>
        </Link>
      </h2>
      <div className="w-full bg-white rounded-md shadow-md p-10">
        <table className="w-full">
          <tr>
            <td className="p-3">
              <CustomTextField
                name="email"
                placeholder="Votre adresse email..."
                required
              />
            </td>
          </tr>
          {/* <Divider /> */}
          <tr>
            <td className="p-3">
              <CustomTextField
                name="email"
                placeholder="Numéro de téléphone..."
                required
              />
            </td>
          </tr>
          {/* <Divider /> */}
          <tr>
            <td className="p-3">
              <CustomTextField
                name="Objet "
                placeholder="Objet de la demande..."
                required
                multiline
                multilineRow={2}
              />
            </td>
          </tr>
          {/* <Divider /> */}
          <tr>
            <td className="p-3">
              <CustomTextField
                name="Objet "
                placeholder="Présenter votre projet..."
                required
                multiline
                multilineRow={10}
              />
            </td>
          </tr>
        </table>

        <div className="flex justify-end p-3">
          <Button
            style={{ background: "#1f2937", padding: "10px", color: "#fff" }}
          >
            Soumettre la demande
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
