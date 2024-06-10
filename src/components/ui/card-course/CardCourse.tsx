import {useMemo} from "react";

import {Box} from "@mui/material";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import styles from "./CardCourse.module.scss";
import {View} from "@/interface/view";
import {useNavigate} from "react-router-dom";

type ViewPage = "My courses" | "Courses" | "Mentors" | "Favorite" | "Complete";

type Props = {
    id: number;
    img?: string;
    title: string;
    viewPage: ViewPage;
    isFavorite: boolean;
    descr: string;
};

export const CardCourse = (props: Props) => {
    const {id, img, title, viewPage, isFavorite = false, descr} = props;

    const navigate = useNavigate();

    const goToCourse = (courseId: number) => {
        navigate(`/courses/course/${courseId}`);
    };

    const goToModule = (courseId: number, moduleId: number) => {
        navigate(`/courses/course/${courseId}/module/${moduleId}`);
    };

    const image = useMemo(() => {
        return img
            ? img
            : "https://img.freepik.com/premium-vector/stem-education-logo-banner-on-white-background_1308-62258.jpg?w=2000";
    }, [img]);

    return (
        <>
            <div className={styles.primer}>
                <Card sx={{width: 500}}>
                    <Box
                        sx={{p: 3, display: "flex", flexDirection: "column", gap: "10px"}}
                    >
                        <Stack direction="row">
                            <CardMedia
                                component="img"
                                alt="course"
                                height="140"
                                image={image}
                                sx={{width: 200, objectFit: "contain"}}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{textOverflow: 'ellipsis'}}>
                                    {descr}
                                </Typography>

                                {(viewPage === View.Courses || viewPage === "Favorite") && (
                                    <button className={styles.btn}>
                                        {isFavorite ? (
                                            <FavoriteBorderIcon className={styles.redIcon}/>
                                        ) : (
                                            <FavoriteIcon className={styles.redIcon}/>
                                        )}
                                    </button>
                                )}
                            </CardContent>
                        </Stack>
                        <LinearProgress variant="determinate" value={60}/>
                        <div className={styles.card__text}>
                            You’ve completed course for 60%
                        </div>
                        {viewPage === View.MyCourses && (
                            <CardActions
                                sx={{
                                    p: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        width: "100%",
                                    }}
                                    onClick={() => goToCourse(id)}
                                >
                                    To the course
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        width: "100%",
                                    }}
                                    onClick={() => goToModule(id, 1)}
                                >
                                    To the module
                                </Button>
                            </CardActions>
                        )}
                        {viewPage === "Complete" && (
                            <CardActions
                                sx={{
                                    p: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{
                                        width: "100%",
                                    }}
                                    onClick={() => goToCourse(id)}
                                >
                                    To the course
                                </Button>
                            </CardActions>
                        )}
                        {(viewPage === View.Courses || viewPage === "Favorite") && (
                            <CardActions
                                sx={{
                                    p: 0,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "10px",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        width: "100%",
                                    }}
                                    onClick={() => goToCourse(id)}
                                >
                                    Start
                                </Button>
                            </CardActions>
                        )}
                    </Box>
                </Card>
            </div>
        </>
    );
};
