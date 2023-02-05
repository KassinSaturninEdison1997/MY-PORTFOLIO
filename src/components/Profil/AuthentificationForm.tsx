import React from "react";
import CustomTextField, {
  TEXTFIELD_TYPE,
} from "../Custom/Components/CustomTextField/CustomTextField";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import _ from "lodash";

export interface IAuthentificationForm {
  email: string;
  password: string;
}

interface IAuthentificationProps {
  formState: any;
}

const AuthentificationForm: React.FunctionComponent<IAuthentificationProps> = ({
  formState,
}) => {
  const { handleInputChange, attributes, error } = formState;
  return (
    <>
      {!_.isEmpty(error) && (
        <div className="w-full flex justify-end text-red-500 text-sm items-center gap-1 mb-3">
          <ErrorOutlineIcon /> <span>Il y a une erreur</span>
        </div>
      )}
      <Table className="h-full w-full">
        <TableBody>
          <TableRow
            style={{ padding: "18px" }}
            className="border-gray-300 border rounded-lg"
          >
            <TableCell>
              <CustomTextField
                name="email"
                size="small"
                placeholder="Email"
                value={attributes.email}
                onChange={handleInputChange}
                error={error}
              />
            </TableCell>
          </TableRow>
          <TableRow
            style={{ padding: "18px" }}
            className="border-gray-300 border rounded-lg"
          >
            <TableCell>
              <CustomTextField
                name="password"
                size="small"
                placeholder="Mot de passe"
                type={TEXTFIELD_TYPE.PASSWORD}
                value={attributes.password}
                onChange={handleInputChange}
                error={error}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default AuthentificationForm;
