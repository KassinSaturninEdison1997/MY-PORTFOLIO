import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import _ from "lodash";
import Avatar from "@mui/material/Avatar";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

export interface ITimelineItem {
  id: string;
  period: string;
  diplome: string;
  domaine: string;
  ecole: string;
  ecole_url?: string;
  logo?: React.ReactNode;
  media?: string[];
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
        <Timeline
          position="right"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0,
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
            },
          }}
        >
          {_.map(items, (item) => (
            <TimelineItem key={item.id}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                <div className="flex flex-col italic">
                  <span>{item.period}</span>
                </div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <TimelineDot>
                  {item.logo ? (
                    item.logo
                  ) : (
                    <Avatar
                      alt={item.ecole}
                      src={""}
                      sx={{ width: 50, height: 50 }}
                      className="shadow-md"
                    />
                  )}
                </TimelineDot>
                {/* <TimelineConnector /> */}
              </TimelineSeparator>

              <TimelineContent
                sx={{ py: "12px", px: 2 }}
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <h1 className="font-bold flex items-center justify-between">
                  <span className="font-bold">{item.diplome}</span>
                </h1>
                <span className="text-justify">{item.description}</span>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
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
