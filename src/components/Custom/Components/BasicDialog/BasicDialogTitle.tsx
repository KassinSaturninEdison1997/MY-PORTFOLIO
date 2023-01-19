import { ReactNode } from "react";

import { DialogTitle, DialogTitleProps, makeStyles } from "@material-ui/core";

interface IBasicDialogTitle extends DialogTitleProps {
  withBoxShadow?: boolean; // can be combined with "dividers" prop on BasicDialogContent
  children: ReactNode;
  divider?: boolean;
}

const useStyles = makeStyles({
  root: ({ withBoxShadow, divider }: Partial<IBasicDialogTitle>) => ({
    padding: "14px 24px ",
    ...(withBoxShadow && { boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)" }),
    ...(divider && { borderBottom: `solid 1px #EAEEF2` }),
  }),
});

const BasicDialogTitle = ({
  children,
  withBoxShadow = true,
  divider,
  ...props
}: IBasicDialogTitle) => {
  const classes = useStyles({ withBoxShadow, divider });
  return (
    <DialogTitle classes={classes} {...props}>
      {children}
    </DialogTitle>
  );
};

export default BasicDialogTitle;
