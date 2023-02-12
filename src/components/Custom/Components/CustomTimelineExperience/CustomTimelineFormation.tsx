import * as React from "react";
import _ from "lodash";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button, Link as RedirectSite, Tooltip } from "@mui/material";
import Box from "@mui/material/Box";
import ReadMoreOutlinedIcon from "@mui/icons-material/ReadMoreOutlined";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { isOnline } from "../../../../features/auth/authSlice";
import { getFormationSelected } from "../../../../features/formation/formationSlice";
import RedirectToNewForm from "./RedirectToNewForm";

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
  const isonline = useAppSelector(isOnline);
  const dispatch = useAppDispatch();
  return (
    <Box className=" grid grid-cols-3 gap-3">
      {!_.isEmpty(items) ? (
        _.map(items, (item) => (
          <Box
            className="flex gap-3 bg-slate-50 rounded-xl pb-3 pt-5 mt-4"
            style={{
              borderTop: "10px solid #1f2937",
              width: "400px",
            }}
          >
            {/* IMAGE */}
            <div
              style={{ width: "100px" }}
              className="flex flex-col justify-center items-center gap-3"
            >
              <img
                src={item.logo}
                alt={item.ecole}
                style={{ width: 70, height: 70 }}
                className="bg-cover rounded-md"
              />
            </div>
            {/* PRESENTATION */}
            <div className="flex flex-col">
              {item.ecole_url ? (
                <Tooltip title={item.ecole}>
                  <RedirectSite
                    href={`https://${item.ecole_url}`}
                    target={"_blank"}
                    style={{
                      color: "#1f2937",
                      textDecoration: "none",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: 500,
                        fontFamily: "Kanit",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        width: "300px",
                        whiteSpace: "nowrap",
                      }}
                      className="font-bold tracking-wide"
                    >
                      {item.ecole}
                    </h1>
                  </RedirectSite>
                </Tooltip>
              ) : (
                <Tooltip title={item.ecole}>
                  <h1
                    style={{
                      fontSize: "30px",
                      fontWeight: 500,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      width: "100%",
                      whiteSpace: "nowrap",
                    }}
                    className="font-bold tracking-wide"
                  >
                    {item.ecole}
                  </h1>
                </Tooltip>
              )}
              <h2 style={{ fontSize: "20px", fontWeight: 400 }}>
                {item.diplome}
              </h2>
              <h3
                style={{ fontSize: "10px", fontWeight: 400 }}
                className="flex items-center justify-between"
              >
                <span>{item.period}</span>
                <Link to={`${item.id}`}>
                  <Button
                    style={{ color: "#1f2937", fontSize: "10px" }}
                    onClick={() =>
                      dispatch(
                        getFormationSelected({
                          id: item.id,
                        })
                      )
                    }
                  >
                    <ReadMoreOutlinedIcon />
                    <span>MORE</span>
                  </Button>
                </Link>
              </h3>
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

            <RedirectToNewForm path={`/formations/create`} />
          </div>
          <Divider />
        </>
      )}
      {!_.isEmpty(items) && isonline && (
        <RedirectToNewForm path={`/formations/create`} />
      )}
    </Box>
  );
};

export default CustomTimelineFormation;
