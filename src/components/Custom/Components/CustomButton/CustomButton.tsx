import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import { ButtonProps } from "@mui/material/Button";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  Button: {
    background: "#1f2937",
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Inter, sans-serif",
    color: "white",

    "&:hover": {
      background: "#111827",
    },
  },
});

interface IButtonProps extends ButtonProps {
  label: string;
  withIcon?: boolean;
  Icon?: ReactNode;
  onAction?: () => void;
}

const CustomButton: React.FunctionComponent<IButtonProps> = ({
  label,
  withIcon,
  Icon,
  onAction,
  disabled = false,
  fullWidth,
}) => {
  const addIcon = withIcon && Icon;
  const classes = useStyles();
  return (
    <Button
      className={classNames(
        classes.Button,
        "group flex items-center rounded-md text-white font-medium p-3 shadow-sm cursor-pointer uppercase"
      )}
      style={{ fontSize: "16px" }}
      onClick={onAction}
      disabled={disabled}
      fullWidth={fullWidth}
    >
      {addIcon ? Icon : null}
      {label}
    </Button>
  );
};

export default CustomButton;
