import React from "react";
import { Link } from "react-router-dom";
import { isOnline } from "../../../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  resetCertificationSelected,
  selectedCertification,
} from "../../../../features/certification/certificationSlice";
import { Button } from "@material-ui/core";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import _ from "lodash";

const ViewCertification = () => {
  //   const { certificationId } = useParams();
  const isonline = useAppSelector(isOnline);
  const certificationSelected = useAppSelector(selectedCertification);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="flex justify-end items-center">
        <Link to={"/certifications"}>
          <Button onClick={() => dispatch(resetCertificationSelected())}>
            Retour
          </Button>
        </Link>
      </div>

      <Container className="h-full w-full bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6 shadow-md rounded-md">
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
                  Identifiant de la certification dans la base de données
                </TableCell>
                <TableCell style={{ fontSize: "20px" }}>
                  {certificationSelected?.id}
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
                Identifiant de la certification
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {certificationSelected?.id_certif}
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
                Centre d'obtention
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {certificationSelected?.organisme}
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
                Titre de la certification
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {certificationSelected?.nom}
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
                Date d'obtention
              </TableCell>
              <TableCell style={{ fontSize: "20px" }}>
                {certificationSelected?.obtention}
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
                Date d'expiration
              </TableCell>
              <TableCell style={{ fontSize: "20px", wordWrap: "break-word" }}>
                {certificationSelected?.expire}
              </TableCell>
            </TableRow>

            {certificationSelected?.piece &&
              _.isString(certificationSelected?.piece) && (
                <img
                  src={certificationSelected.piece}
                  alt="Preuve de la cerification"
                />
              )}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default ViewCertification;
