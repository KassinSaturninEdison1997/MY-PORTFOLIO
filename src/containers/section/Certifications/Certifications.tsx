import { Tooltip } from "@mui/material";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import _ from "lodash";
import { Link, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useAppDispatch } from "../../../app/hooks";
import { getCertificationSelected } from "../../../features/certification/certificationSlice";

const Certifications = () => {
  return <Outlet />;
};

interface ICertificationCardProps {
  institut: string;
  title: string;
  description?: string;
  key_: string;
}
export const CertificationCard: React.FunctionComponent<
  ICertificationCardProps
> = ({ title, key_, institut }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="rounded-md shadow-md p-3 pb-2 pt-3 mt-4"
      key={key_}
      style={{
        background: "#f2f2f2",
        borderTop: "10px solid #1f2937",
        width: "400px",
      }}
    >
      <div className="flex justify-between items-center">
        <span
          style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: 1.5 }}
        >
          {_.toUpper(institut)}
        </span>
        <Link to={`${key_}`}>
          <span
            onClick={() =>
              dispatch(
                getCertificationSelected({
                  id: key_,
                })
              )
            }
          >
            <Tooltip title="Voir l'attestation">
              <VisibilityIcon />
            </Tooltip>
          </span>
        </Link>
      </div>
      <Divider style={{ height: "10px" }} />

      <div className="flex flex-col pt-3 pb-3 gap-3">
        <span
          style={{
            fontSize: "18px",
            letterSpacing: 1.5,
            fontStyle: "italic",
            textOverflow: "ellipsis",
            overflow: "hidden",
            // whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default Certifications;
