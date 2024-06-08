import React from "react";
import { Tab, Box, Typography } from "@mui/material";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { LessonTab } from "./lesson";

const LessonOverview: React.FC = () => {
  const [value, setValue] = useState<LessonTab>(LessonTab.Overview);

  const handleChange = (event: React.SyntheticEvent, newValue: LessonTab) => {
    console.log(event);
    setValue(newValue);
  };

  return (
    <div style={{ flexGrow: 1, overflow: "auto" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          typography: "body1",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={LessonTab.Overview} value={LessonTab.Overview} />
              <Tab label={LessonTab.Materials} value={LessonTab.Materials} />
              <Tab label={LessonTab.Task} value={LessonTab.Task} />
              <Tab label={LessonTab.HomeWork} value={LessonTab.HomeWork} />
            </TabList>
          </Box>
          <div className="universal-content" style={{ flexGrow: 1 }}>
            <TabPanel value={LessonTab.Overview}>
              <Typography variant="h6">Overview of lesson</Typography>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </Typography>
              <ul>
                <li>Horem</li>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Sit</li>
                <li>Amet</li>
              </ul>
            </TabPanel>
            <TabPanel value={LessonTab.Materials}>
              <Typography variant="h6">Materials and links</Typography>
              <Typography variant="body1" paragraph>
                <b>Resources used in the lesson</b>
              </Typography>
              <ul>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <Typography variant="body1" paragraph>
                <b>Books</b>
              </Typography>
              <ul>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                  "Corem ipsum"
                </li>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                  "Corem ipsum"
                </li>
                <li>
                  Corem ipsum dolor sit amet, consectetur adipiscing elit.
                  "Corem ipsum"
                </li>
              </ul>
            </TabPanel>
            <TabPanel value={LessonTab.Task}></TabPanel>
            <TabPanel value={LessonTab.HomeWork}></TabPanel>
          </div>
        </TabContext>
      </Box>
    </div>
  );
};

export default LessonOverview;
