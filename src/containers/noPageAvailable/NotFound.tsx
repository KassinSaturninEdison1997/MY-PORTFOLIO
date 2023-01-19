import { makeStyles } from "@material-ui/core";
import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { change } from "../../features/categorie/categorieSlice";
import { styles } from "./styles";

const useStyles = makeStyles(styles as any);
const NotFound = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(
      change({
        newCategorie: "not-found",
      })
    );
  }, [dispatch]);

  return (
    <div className={classes.Wrapper}>
      <Typography variant="h6" className={classes.PageNotFoundTitle}>
        Page non trouvée
      </Typography>
      <Typography
        variant="h6"
        className={classNames(classes.PageNotFoundSubTitle, "text-justify")}
      >
        Désolé! Nous n'avons pas pu retrouvé cette page que vous recherchée.
        Essayer une autre page s'il vous plaît
      </Typography>
      <div className={classes.LittleOval}></div>
      <div className={classes.BigOval}></div>
      <div className={classes.Code}>404</div>
    </div>
  );
};

export default NotFound;
