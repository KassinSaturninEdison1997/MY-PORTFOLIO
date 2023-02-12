import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  resetFormationSelected,
  selectedFormation,
} from "../../../../features/formation/formationSlice";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { isOnline } from "../../../../features/auth/authSlice";
import { Button, Chip } from "@mui/material";
import _ from "lodash";
import { Link } from "react-router-dom";

const ViewFormation = () => {
  // const { formationId } = useParams();
  const formationSelected = useAppSelector(selectedFormation);
  const isonline = useAppSelector(isOnline);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex justify-end items-center">
        <Link to={"/formations"}>
          <Button onClick={() => dispatch(resetFormationSelected())}>
            Retour
          </Button>
        </Link>
      </div>
      <Container className="h-full w-full bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
        {/* ECOLE */}
        <h2
          style={{ fontSize: "30px", fontWeight: 500, fontFamily: "Kanit" }}
          className="flex justify-between items-center"
        >
          <span>{formationSelected?.ecole}</span>
          <span>
            {formationSelected?.ecole_logo && (
              <img
                src={formationSelected.ecole_logo as string}
                alt={formationSelected.ecole}
                style={{ width: 70, height: 70 }}
                className="bg-cover rounded-md"
              />
            )}
          </span>
        </h2>

        <Table>
          <TableBody>
            {isonline && (
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "Inter",
                  }}
                >
                  Identifiant
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  {formationSelected?.id}
                </TableCell>
              </TableRow>
            )}

            <TableRow>
              <TableCell
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                }}
              >
                Nom du centre
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {formationSelected?.ecole}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                }}
              >
                Diplôme obtenu
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {formationSelected?.diplome}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                }}
              >
                Domaine de formation
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {formationSelected?.domaine}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  fontFamily: "Inter",
                }}
              >
                Description de la formation
              </TableCell>
              <TableCell style={{ fontSize: "20px", wordWrap: "break-word" }}>
                {formationSelected?.description}
              </TableCell>
            </TableRow>

            {formationSelected?.activites_academique && (
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    fontFamily: "Inter",
                  }}
                >
                  Activités pratiquées
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "20px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    columnGap: "10px",
                  }}
                >
                  {_.map(
                    formationSelected?.activites_academique,
                    (activite) => (
                      <Chip label={activite} variant="outlined" />
                    )
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default ViewFormation;
