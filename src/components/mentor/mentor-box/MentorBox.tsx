import MentorCard from "../mentor-card/MentorCard";
import { Mentor } from "@/api/mentor-rest/types";
import "./MentorBox.scss";
type Props = {
  mentor: Mentor;
};

export const MentorBox = ({ mentor }: Props) => {
  return (
    <div className="mentor-box">
      <h3>MentorCard</h3>
      <MentorCard mentor={mentor} />
    </div>
  );
};
