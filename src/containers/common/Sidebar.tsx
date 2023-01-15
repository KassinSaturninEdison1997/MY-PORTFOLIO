import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import CustomNavigation from "../../components/Custom/Components/CustomNavigation/CustomNavigation";
import Icon from "../../components/Icon/Icon";
import Items from "../../components/Items/Items";
import Profil from "../../components/Profil/Profil";

const useStyles = makeStyles((theme) => ({
  Sidebar: {
    paddingLeft: "20px",
    paddingTop: "10px",
    background: "#1f2937",
    color: "#fff",
    width: "20%",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.Sidebar)}>
      <div className="flex justify-between items-center pr-5">
        <Icon />
        <CustomNavigation />
      </div>
      <Items />
      <Profil />
    </Box>
  );
};

export default Sidebar;
