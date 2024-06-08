import { useMemo, useState } from "react";

import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import styles from "./TaskToday.module.scss";
import CustomCheckbox from "@/components/ui/checkbox/Checkbox";
import ParentCheckbox from "@/components/ui/checkbox/ParentCheckbox";
import { useNavigate } from "react-router-dom";

type Props = {
  img?: string;
  title: string;
};

export const TodayTask = (props: Props) => {
  const { img, title } = props;

  const navigate = useNavigate();

  const [parentChecked, setParentChecked] = useState<boolean>(false);
  const [childChecked, setChildChecked] = useState<boolean[]>([]);

  const goToCourse = (courseId: number) => {
    navigate(`/courses/course/${courseId}`);
  };

  const getCheckboxesState = (state: {
    parent: boolean;
    children: boolean[];
  }) => {
    setParentChecked(state.parent);
    setChildChecked(state.children);
  };

  const image = useMemo(() => {
    console.log(parentChecked);
    console.log(childChecked);

    return img
      ? img
      : "https://img.freepik.com/premium-vector/stem-education-logo-banner-on-white-background_1308-62258.jpg?w=2000";
  }, [img]);

  return (
    <div>
      <Card>
        <Box
          sx={{ p: 3, display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div>Task Today</div>
          <Stack direction="row">
            <CardMedia
              component="img"
              alt="course"
              height="140"
              image={image}
              sx={{ width: 200, objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Stack>
          <p>Progress</p>
          <LinearProgress variant="determinate" value={60} />
          <div className={styles.card__text}>
            You’ve completed course for 60%
          </div>

          <Button
            variant="contained"
            size="large"
            sx={{
              width: "100%",
            }}
            onClick={() => goToCourse(1)}
          >
            To the course
          </Button>

          <div>
            <ParentCheckbox
              parentLabel="Developing Restaurant Apps"
              childrenLabels={["Integrate API", "Slicing Home Screen"]}
              getCheckboxesState={getCheckboxesState}
            />
            <CustomCheckbox
              label="Research Objective User"
              checked={false}
              onChange={() => {}}
              name="researchObjectiveUser"
            />
            <CustomCheckbox
              label="Report Analysis P2P Business"
              checked={true}
              onChange={() => {}}
              name="reportAnalysisP2PBusiness"
            />
          </div>
        </Box>
      </Card>
    </div>
  );
};
