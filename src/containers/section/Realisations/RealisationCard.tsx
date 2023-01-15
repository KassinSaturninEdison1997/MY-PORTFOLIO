import { Divider, Tooltip } from "@material-ui/core";
import React from "react";
import light from "./../../../assets/light.png";
import LaunchIcon from "@mui/icons-material/Launch";

interface IRealisationCardProps {
  index: string;
  title: string;
  image_url?: string;
}

const RealisationCard: React.FunctionComponent<IRealisationCardProps> = ({
  index,
  title,
  image_url,
}) => {
  return (
    <div
      className="shadow-md rounded-md bg-white p-3 flex flex-col"
      key={index}
      style={{
        width: "31%",
        height: "150px",
      }}
    >
      <div className="flex items-center justify-between">
        <span>{title}</span>
        <Tooltip title="Redirection" className="cursor-pointer">
          <LaunchIcon />
        </Tooltip>
      </div>
      <Divider />
      <div className="h-full w-full grow flex justify-center mt-2">
        <img
          src={image_url ?? `${light}`}
          alt={"okey"}
          style={{ width: "250px", height: "95px" }}
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default RealisationCard;
