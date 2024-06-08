import { ProfileBar } from "@/components/ProfileBar/ProfileBar";

import { Box, Stack, CardMedia, CardContent, Typography } from "@mui/material";
import { useMemo } from "react";

import { Player, BigPlayButton, ControlBar } from "video-react";

import styles from "./ModulePage.module.scss";

import "../index.scss";
import { ModuleMentor } from "@/components/module-page/ModuleMentor/ModuleMentor";
import VideoList from "@/components/module-page/VideoList/VideoList";
import LessonOverview from "@/components/module-page/LessonOverview/LessonOverview";

function mock() {}

const videos = [
  { id: 1, title: "Lesson 1. Norem ipsum dolor sit amet", url: "#1" },
  { id: 2, title: "Lesson 2. Norem ipsum dolor sit amet", url: "#2" },
  { id: 3, title: "Lesson 3. Norem ipsum dolor sit amet", url: "#3" },
  { id: 4, title: "Lesson 4. Norem ipsum dolor sit amet", url: "#4" },
];

type Props = {
  img?: string;
  title?: string;
};

const ModulePage = (props: Props) => {
  const { img, title } = props;

  const image = useMemo(() => {
    return img
      ? img
      : "https://img.freepik.com/premium-vector/stem-education-logo-banner-on-white-background_1308-62258.jpg?w=2000";
  }, [img]);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div>
            <h2 className={styles["title-h2"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Stack direction="row">
                <CardMedia
                  component="img"
                  alt="course"
                  height="118"
                  image={image}
                  sx={{ width: 174, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#8F92B5" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <div className={styles.card__text}>
                    You’ve completed course for 60%
                  </div>
                </CardContent>
              </Stack>
            </Box>
          </div>
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div
        style={{ padding: "24px" }}
        className={`universal-content ${styles.content}`}
      >
        <div className={styles.content__left}>
          <div>
            <Player
              onPlay={mock}
              onEnded={mock}
              onLoadStart={mock}
              onPause={mock}
              videoId={""}
            >
              <BigPlayButton position="center" />
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <ControlBar autoHide={true}></ControlBar>
            </Player>
          </div>
          <LessonOverview></LessonOverview>
        </div>
        <div className={styles.content__right}>
          <ModuleMentor name={"Dina"} subject={"Math"} imageUrl={""} />

          <VideoList videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
