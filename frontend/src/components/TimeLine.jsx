import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeperator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import React from "react";

function convertDate(dateString) {
  const date = new Date(dateString);
  const monthYearString = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  return monthYearString;
}

const TimeLine = ({ timeline }) => {
  console.log(timeline);
  return (
    <div>
      <Timeline position="alternate">
        {timeline !== [] &&
          timeline.map((item, index) => (
            <TimelineItem key={item._id}>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {convertDate(item.date)}
              </TimelineOppositeContent>

              <TimelineSeperator>
                <TimelineConnector />
                <TimelineDot>
                  <Event />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeperator>

              <TimelineContent sx={{ px: 2, py: "12px" }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
