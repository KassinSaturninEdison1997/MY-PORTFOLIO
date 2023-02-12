import React from "react";
import UploadOutlinedIcon from "@mui/icons-material/UploadOutlined";

const InputFile = () => {
  return (
    <div
      className="w-full border-dashed rounded-md"
      style={{ borderWidth: "5px" }}
    >
      <label
        style={{
          border: "1px solid #ccc",
          display: "inline-block",
          padding: "5px",
          fontSize: "10px",
          cursor: "pointer",
        }}
        className="rounded-md"
      >
        <input
          type="file"
          style={{
            display: "none",
          }}
          accept="images/*"
          onChange={(e) => {
            e.stopPropagation();
            //   handleChange("ecole_logo", e.target.files);
          }}
        />
        <span className="flex items-center">
          <UploadOutlinedIcon /> <span>Attach Logo</span>
        </span>
      </label>
    </div>
  );
};

export default InputFile;
