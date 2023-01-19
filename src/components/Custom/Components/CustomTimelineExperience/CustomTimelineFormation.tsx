import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import dateFormat from "dateformat";
import Typography from "@mui/material/Typography";
import _ from "lodash";

interface ITimelineItem {
  period: {
    start: Date;
    end: Date | "Present";
  };
  icon?: React.ReactNode;
  diplome: string;
  description: React.ReactNode;
}

interface ICustomTimelineFormation {
  items: ITimelineItem[];
}
const CustomTimelineFormation: React.FunctionComponent<
  ICustomTimelineFormation
> = ({ items }) => {
  return (
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
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <div className="flex flex-col italic">
              <span>{dateFormat(item.period.start, "dd/mm/yyyy")}</span>
              <span>
                {_.isDate(item.period.end)
                  ? dateFormat(item.period.end, "dd/mm/yyyy")
                  : item.period.end}
              </span>
            </div>
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              {item.icon ? item.icon : <FastfoodIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent
            sx={{ py: "12px", px: 2 }}
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Typography
              variant="h6"
              component="span"
              className="font-bold flex items-center justify-between"
            >
              <span className="font-bold">{item.diplome}</span>
            </Typography>
            <Typography className="text-justify">
              {" "}
              {item.description}{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CustomTimelineFormation;
