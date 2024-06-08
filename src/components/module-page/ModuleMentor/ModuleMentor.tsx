import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import "./ModuleMentor.scss";
import { useMemo } from "react";

interface MentorCardProps {
  name: string;
  subject: string;
  imageUrl: string;
}

export const ModuleMentor = ({ name, subject, imageUrl }: MentorCardProps) => {
  const image = useMemo(() => {
    return imageUrl ? imageUrl : "https://via.placeholder.com/80";
  }, [imageUrl]);

  return (
    <Card className="mentor-card" variant="outlined">
      <CardContent className="mentor-card-content">
        <CardMedia
          component="img"
          className="mentor-card-media"
          image={image}
          alt={name}
          sx={{ width: 80, height: 80, borderRadius: "50%" }}
        />
        <div className="mentor-card-text">
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {subject}
          </Typography>
        </div>
        <IconButton className="mentor-card-icon" aria-label="chat">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};
