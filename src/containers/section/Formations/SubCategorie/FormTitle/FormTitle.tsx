import React from "react";

interface IFormTitle {
  title: string;
}

const FormTitle: React.FunctionComponent<IFormTitle> = ({ title }) => {
  return (
    <div
      style={{
        border: "none",
        background: "none",
      }}
    >
      <span
        style={{
          paddingBottom: "7px",
          letterSpacing: "4px",
          fontSize: "20px",
          paddingRight: "15px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
    </div>
  );
};

export default FormTitle;
