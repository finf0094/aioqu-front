import { ReactNode } from "react";
import "./ModuleCard.scss";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  progress: number;
  route?: string;
};

export const ModuleCard = ({ children, progress, route = "" }: Props) => {
  return (
    <Link to={`/${route}`}>
      <div className="module-card">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="content">{children}</div>
      </div>
    </Link>
  );
};
