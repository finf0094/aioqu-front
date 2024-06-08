import React, { useMemo } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Mentor } from "@/api/mentor-rest/types";

interface MentorCardProps {
  mentor: Mentor;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor }) => {
  const image = useMemo(() => {
    return mentor.image || "https://via.placeholder.com/80";
  }, [mentor.image]);

  const fullName = `${mentor.first_name} ${mentor.last_name}`;
  const specialties = mentor.specialties
    .map((specialty) => specialty.title)
    .join(", ");

  return (
    <Card sx={{ display: "flex", flexDirection: "column", p: 2, width: 430 }}>
      <CardContent sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <CardMedia
          component="img"
          sx={{ width: 80, height: 80, borderRadius: "50%" }}
          image={image}
          alt="Mentor"
        />

        <div>
          <Typography component="div" variant="h6">
            {fullName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {specialties}
          </Typography>
        </div>
      </CardContent>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px", pt: 0 }}
      >
        <Typography variant="body2" color="text.secondary" component="p">
          {mentor.biography}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          component="p"
          sx={{ textAlign: "right" }}
        >
          ⭐ 5 (750 Reviews)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MentorCard;
