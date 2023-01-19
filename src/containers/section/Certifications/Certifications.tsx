import { Divider, Tooltip } from "@mui/material";
import React from "react";
import HeaderBox from "../About/HeaderBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import _ from "lodash";

const Certifications = () => {
  return (
    <section className="flex flex-col gap-2 h-full">
      <HeaderBox title={"Certifications"} addButton />
      <div className="w-full grid grid-cols-4 gap-4 mt-7">
        <CertificationCard
          key_="key"
          title="Title"
          description="Description"
          institut="Institut"
        />
      </div>
    </section>
  );
};

interface ICertificationCardProps {
  institut: string;
  title: string;
  description?: string;
  key_: string;
}
const CertificationCard: React.FunctionComponent<ICertificationCardProps> = ({
  title,
  key_,
  description,
  institut,
}) => {
  return (
    <div className="rounded-md bg-white p-4" key={key_}>
      <div className="flex justify-between items-center">
        <span>{_.toUpper(institut)}</span>
        <span>
          <Tooltip title="Voir l'attestation">
            <VisibilityIcon />
          </Tooltip>
        </span>
      </div>
      <Divider />
      <div className="flex flex-col pt-3 pb-3 gap-3">
        <span>{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Certifications;
