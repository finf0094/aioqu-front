import styles from "./ProfileBar.module.scss";
import LangIcon from "@/assets/img/lang.png";
import NotifyIcon from "@/assets/img/notify.png";
import UserIcon from "@/assets/img/user.png";

export const ProfileBar = () => {
  return (
    <div className={styles["profile-bar"]}>
      <div>
        <img src={LangIcon} alt="Язык" />
      </div>
      <div>
        <img src={NotifyIcon} alt="Язык" />
      </div>
      <div>
        <img src={UserIcon} alt="Язык" />
      </div>
    </div>
  );
};
