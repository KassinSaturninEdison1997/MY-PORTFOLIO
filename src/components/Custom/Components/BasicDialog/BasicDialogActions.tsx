import { ReactNode } from "react";

import {
  DialogActions,
  DialogActionsProps,
  makeStyles,
} from "@material-ui/core";

interface IBasicDialogActions extends DialogActionsProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  root: {
    padding: "14px 24px",
    backgroundColor: "#fff",
  },
});

const BasicDialogActions = ({ children, ...props }: IBasicDialogActions) => {
  const classes = useStyles();
  return (
    <DialogActions classes={classes} {...props}>
      {children}
    </DialogActions>
  );
};

export default BasicDialogActions;
