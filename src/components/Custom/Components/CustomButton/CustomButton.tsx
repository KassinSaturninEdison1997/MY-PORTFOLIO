import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";

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

interface IButtonProps {
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
}) => {
  const addIcon = withIcon && Icon;
  const classes = useStyles();
  return (
    <span
      className={classNames(
        classes.Button,
        "group flex items-center rounded-md text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm cursor-pointer"
      )}
      onClick={onAction}
    >
      {addIcon ? Icon : null}
      {label}
    </span>
  );
};

export default CustomButton;
