import * as React from "react";
import _ from "lodash";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Link as RedirectSite } from "@mui/material";
import Box from "@mui/material/Box";

export interface ITimelineItem {
  id: string;
  period: string;
  diplome: string;
  domaine: string;
  ecole: string;
  ecole_url?: string;
  logo?: string;
  // media?: string[];
  activites?: string[];
  description: React.ReactNode;
}

interface ICustomTimelineFormation {
  items: ITimelineItem[];
}
const CustomTimelineFormation: React.FunctionComponent<
  ICustomTimelineFormation
> = ({ items }) => {
  return (
    <>
      {!_.isEmpty(items) ? (
        _.map(items, (item) => (
          <Box className="w-full flex gap-3 p-3" style={{ width: "70%" }}>
            {/* IMAGE */}
            <div style={{ width: "100px" }} className="flex justify-center">
              <img
                src={item.logo}
                alt={item.ecole}
                style={{ width: 50, height: 50 }}
                className="bg-cover rounded-md"
              />
            </div>
            {/* PRESENTATION */}
            <div
              className="flex flex-col"
              style={{ width: "calc(100% - 100px)" }}
            >
              {item.ecole_url ? (
                <RedirectSite
                  href={`https://${item.ecole_url}`}
                  target={"_blank"}
                >
                  <h1
                    style={{ fontSize: "20px", fontWeight: 500 }}
                    className="font-bold tracking-wide"
                  >
                    {item.ecole}
                  </h1>
                </RedirectSite>
              ) : (
                <h1
                  style={{ fontSize: "20px", fontWeight: 500 }}
                  className="font-bold tracking-wide"
                >
                  {item.ecole}
                </h1>
              )}
              <h2 style={{ fontSize: "15px", fontWeight: 400 }}>
                {item.diplome}
              </h2>
              <h3 style={{ fontSize: "10px", fontWeight: 400 }}>
                {item.period}
              </h3>
              <span className="text-justify">{item.description}</span>
            </div>
          </Box>
        ))
      ) : (
        <>
          <div className="justify-between items-center flex gap-5 p-5">
            <span className="flex flex-col">
              <ModelTrainingOutlinedIcon
                style={{ fontSize: 70, color: "grey", fontWeight: 500 }}
              />
              <span style={{ fontSize: "30px", fontWeight: 200 }}>
                Aucune formation n'est ajouté
              </span>
            </span>

            <Link to={`/formations/create`}>
              <span className="border-dashed flex items-center p-10  border-4 rounded-sm ">
                <AddOutlinedIcon
                  style={{ fontSize: 70, color: "grey", fontWeight: 500 }}
                />
              </span>
            </Link>
          </div>
          <Divider />
        </>
      )}
    </>
  );
};

export default CustomTimelineFormation;
