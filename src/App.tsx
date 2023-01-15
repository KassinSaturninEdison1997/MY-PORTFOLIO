import { Box } from "@mui/material";
import React from "react";
import Common from "./containers/common/Common";
import Sidebar from "./containers/common/Sidebar";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  texte: {
    color: "#fff",
  },
});

interface IAppProps {
  Container: JSX.Element;
}

const App: React.FunctionComponent<IAppProps> = ({ Container }) => {
  const classes = useStyles();

  return (
    <Box
      className={classNames(
        "flex h-full w-full overflow-hidden",
        classes.texte
      )}
    >
      <Sidebar />
      <Common Container={Container} />
    </Box>
  );
};

export default App;
