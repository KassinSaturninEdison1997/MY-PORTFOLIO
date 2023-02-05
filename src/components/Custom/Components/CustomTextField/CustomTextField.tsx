import { InputAdornment, makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import React, { ReactNode } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Tooltip from "@mui/material/Tooltip";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

export enum TEXTFIELD_TYPE {
  TEXT = "TEXT",
  PASSWORD = "PASSWORD",
  DATE = "DATE",
  FILE = "FILE",
}

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
  type?: TEXTFIELD_TYPE;
  error?: any;
  onChange?: (name: string, value: any) => any;
  value?: any;
  isFile?: boolean;
}

const CustomTextField: React.FunctionComponent<ICustomTextFieldProps> = ({
  size = "small",
  placeholder = "",
  name,
  multiline = false,
  withSearchIcon = false,
  fullWidth = true,
  required = false,
  multilineRow = 4,
  label = "",
  Icon,
  type = TEXTFIELD_TYPE.TEXT,
  onChange,
  error = {},
  value = "",
  isFile = false,
}) => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  const handleChange = (event: any) => {
    event.preventDefault();
    if (onChange) {
      if (isFile) {
        onChange(name, event.target.files[0]);
      } else {
        onChange(name, event.target.value);
      }
    }
  };

  if (type === TEXTFIELD_TYPE.DATE) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          openTo="year"
          views={["year", "month"]}
          label={label}
          minDate={dayjs("2012-03-01")}
          maxDate={dayjs(Date.now())}
          value={value}
          onChange={(newValue) => {
            if (onChange) onChange(name, newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size={size}
              required={required}
              className={classes.TextField}
              fullWidth={fullWidth}
              error={false}
            />
          )}
        />
      </LocalizationProvider>
    );
  }
  return (
    <TextField
      size={size}
      name={name}
      type={show ? TEXTFIELD_TYPE.TEXT : type}
      multiline={multiline}
      fullWidth={fullWidth}
      required={required}
      rows={multiline ? multilineRow : 1}
      label={label}
      className={classes.TextField}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      InputProps={
        withSearchIcon
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  {Icon ?? <SearchIcon className="cursor-pointer" />}
                </InputAdornment>
              ),
            }
          : type === TEXTFIELD_TYPE.PASSWORD
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  {
                    <Tooltip title={show ? "Cacher" : "Afficher"}>
                      <span onClick={() => setShow(!show)}>
                        {show ? (
                          <VisibilityOffIcon className="cursor-pointer" />
                        ) : (
                          <VisibilityIcon className="cursor-pointer" />
                        )}
                      </span>
                    </Tooltip>
                  }
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  );
};

export default CustomTextField;
