import { ReactNode } from "react";

import {
  DialogContent,
  DialogContentProps,
  makeStyles,
} from "@material-ui/core";

interface IBasicDialogContent extends DialogContentProps {
  children: ReactNode;
  noOverflow?: boolean; //use this when you need scrollable tabs in the content
}

const useStyles = makeStyles({
  root: (props: Omit<IBasicDialogContent, "children">) => ({
    padding: "14px 24px 0 24px",
    ...(props.noOverflow && {
      display: "flex",
      flexDirection: "column",
      overflowY: "hidden",
      height: "100%",
    }),
  }),
});

const BasicDialogContent = ({
  children,
  noOverflow,
  ...props
}: IBasicDialogContent) => {
  const classes = useStyles({ noOverflow });
  return (
    <DialogContent classes={classes} {...props}>
      {children}
    </DialogContent>
  );
};

export default BasicDialogContent;
