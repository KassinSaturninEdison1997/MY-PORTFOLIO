import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import Avatar from "@mui/material/Avatar";
import React from "react";

const useStyle = makeStyles({
  Profil: {
    position: "absolute",
    background: "#374151",
    bottom: 0,
    height: "50px",
    marginLeft: "-20px",
    width: "20%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    columnGap: "10px",
  },
});

const Profil = () => {
  const classes = useStyle();
  return (
    <div className={classNames(classes.Profil)}>
      <Avatar
        alt="Edison KASSIN"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 35, height: 35, border: "1px solid #1f2937" }}
      />
      <Description />
    </div>
  );
};

const Description = () => {
  return (
    <div
      className="flex flex-col"
      style={{ paddingTop: "3px", paddingBottom: "3px" }}
    >
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
        }}
      >
        Edison KASSIN
      </span>
      <span
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 100,
          fontSize: "12px",
        }}
      >
        Full stack Developer
      </span>
    </div>
  );
};
export default Profil;
