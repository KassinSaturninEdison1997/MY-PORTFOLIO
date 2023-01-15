import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";
import React from "react";
import classNames from "classnames";

const useStyles = makeStyles({
  common: {
    background: "#f3f4f6",
    color: "#000",
    padding: "10px",
    width: "80%",
  },
});

interface ICommonProps {
  Container: JSX.Element;
}

const Common: React.FunctionComponent<ICommonProps> = ({ Container }) => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.common, "grow")}>
      <div className="w-full h-full overflow-auto">{Container}</div>
    </Box>
  );
};

export default Common;
