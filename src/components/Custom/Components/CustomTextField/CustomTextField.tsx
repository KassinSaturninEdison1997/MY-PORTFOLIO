import { InputAdornment, makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import React, { ReactNode } from "react";

const useStyles = makeStyles({
  TextField: {
    fontSize: "20px",
    "& .MuiOutlinedInput-root": {
      // "& fieldset": {
      //   borderColor: "red",
      // },
      "&:hover fieldset": {
        borderColor: "#1f2937",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#111827",
      },
    },
  },
});

interface ICustomTextFieldProps {
  size?: "medium" | "small";
  placeholder?: string;
  name: string;
  label?: string;
  multiline?: boolean;
  required?: boolean;
  multilineRow?: number;
  Icon?: ReactNode;
  withSearchIcon?: boolean;
  fullWidth?: boolean;
}

const CustomTextField: React.FunctionComponent<ICustomTextFieldProps> = ({
  size = "small",
  placeholder = "Rechercher...",
  name,
  multiline = false,
  withSearchIcon = false,
  fullWidth = true,
  required = false,
  multilineRow = 4,
  label = "",
  Icon,
}) => {
  const classes = useStyles();
  return (
    <TextField
      size={size}
      name={name}
      multiline={multiline}
      fullWidth={fullWidth}
      required={required}
      rows={multiline ? multilineRow : 1}
      label={label}
      className={classes.TextField}
      placeholder={placeholder}
      onChange={() => {}}
      InputProps={
        withSearchIcon
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  {Icon ?? <SearchIcon className="cursor-pointer" />}
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default CustomTextField;
