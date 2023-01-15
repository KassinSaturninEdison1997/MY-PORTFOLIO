import React, { ReactNode } from "react";
import dateFormat from "dateformat";
import { Timeline } from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import _ from "lodash";
import LaunchIcon from "@mui/icons-material/Launch";
import { Tooltip } from "@mui/material";

interface ICustomTimelineExperience {
  period: {
    start: Date;
    end: Date | "Present";
  };
  societe: string;
  poste: string;
  description: ReactNode;
}

const CustomTimelineExperience: React.FunctionComponent<
  ICustomTimelineExperience
> = ({ period, societe, poste, description }) => {
  const { start, end } = period;
  return (
    <div className="flex items-center justify-start">
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0,
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            <div className="flex flex-col italic">
              <span>{dateFormat(start, "dd/mm/yyyy")}</span>
              <span>{_.isDate(end) ? dateFormat(end, "dd/mm/yyyy") : end}</span>
            </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            <div
              className="font-bold flex items-center justify-between"
              style={{ fontSize: "18px", marginTop: "-3px" }}
            >
              <span>{societe}</span>
              <Tooltip title="Redirection" className="cursor-pointer">
                <LaunchIcon />
              </Tooltip>
            </div>
            <div className="italic">{poste}</div>
            <div>{description}</div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default CustomTimelineExperience;
