import React from "react";
import {
  BasicDialog,
  BasicDialogActions,
  BasicDialogContent,
  BasicDialogTitle,
} from "../BasicDialog";
import "./CustomLoading.css";
interface ICustomLoading {
  title: string;
}
const CustomLoading: React.FunctionComponent<ICustomLoading> = ({ title }) => {
  return (
    <BasicDialog open={true} size={"md"} minWidth={"400px"} minHeight={"400px"}>
      <BasicDialogTitle>{title}</BasicDialogTitle>
      <BasicDialogContent
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="pl">
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__dot"></div>
          <div className="pl__text">Loading…</div>
        </div>
      </BasicDialogContent>
      <BasicDialogActions>
        <span></span>
      </BasicDialogActions>
    </BasicDialog>
  );
};

export default CustomLoading;
