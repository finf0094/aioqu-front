import { useEffect, useState } from "react";
import cn from "classnames";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RoutePath } from "@/router/routes";
import { OverviewIcon } from "@/components/icons/aside/OverviewIcon";
import LogoIcon from "@/assets/img/logo.png";
import LogoMiniIcon from "@/assets/img/logo-mini.png";
import ArrowAsideIcon from "@/assets/img/arrow-aside.png";
import AsideOpenIcon from "@/assets/img/aside-open.png";
import { MyCoursesIcon } from "@/components/icons/aside/MyCoursesIcon";
import CoursesIcon from "@/components/icons/aside/CoursesIcon";
import { MentorIcon } from "@/components/icons/aside/MentorIcon";
// import { SettingIcon } from "@/components/icons/aside/SettingIcon";
import styles from "./LayoutMain.module.scss";
import { View } from "@/interface/view";
import { api } from "@/api";
import AiAssistant from "@/components/ai-assistant/AiAssistant";

const LayoutMain = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAsideOpen, setAsideOpen] = useState(false);
    const [activeView, setActiveView] = useState<RoutePath>(RoutePath.Overview);

    const toggleAside = () => setAsideOpen(!isAsideOpen);

    const changeView = (value: RoutePath) => {
        setActiveView(value);
        navigate(value);
    };

    useEffect(() => {
        const basePath = location.pathname.split("/")[1];
        const matchedPath = Object.values(RoutePath).find(
            (path) => path.split("/")[1] === basePath
        );
        if (matchedPath) {
            setActiveView(matchedPath);
        } else {
            setActiveView(RoutePath.HOME);
        }
    }, [location.pathname]);

    useEffect(() => {
        api.blocks.block();
    }, []);

    return (
        <section className={styles.layoutMain}>
            <aside className={cn(styles.aside, { [styles.open]: isAsideOpen })}>
                <div className={styles.aside__top}>
                    <div className={cn(styles.aside__logo, styles.isJustifyCenter)}>
                        {isAsideOpen ? (
                            <img src={LogoIcon} alt="Лого" />
                        ) : (
                            <img src={LogoMiniIcon} alt="Лого маленькое" />
                        )}
                    </div>
                    <div
                        className={cn(styles.aside__toggle, {
                            [styles.isJustifyCenter]: !isAsideOpen,
                            [styles.aside__toggle__active]: !isAsideOpen,
                        })}
                    >
                        <button onClick={toggleAside}>
                            {isAsideOpen ? (
                                <img src={ArrowAsideIcon} alt="Стрелка" />
                            ) : (
                                <img src={AsideOpenIcon} alt="Три линий" />
                            )}
                        </button>
                    </div>

                    <nav>
                        <ul
                            className={cn(styles.aside__nav, {
                                [styles.isAlignCenter]: !isAsideOpen,
                            })}
                        >
                            <li
                                className={cn(styles.aside__nav__item, {
                                    [styles.aside__nav__item__active]:
                                    activeView === RoutePath.Overview,
                                })}
                                onClick={() => changeView(RoutePath.Overview)}
                            >
                                <OverviewIcon
                                    color={
                                        activeView === RoutePath.Overview ? "#151422" : "#8F92B5"
                                    }
                                />
                                {isAsideOpen && <span>{View.Overview}</span>}
                            </li>
                            <li
                                className={cn(styles.aside__nav__item, {
                                    [styles.aside__nav__item__active]:
                                    activeView === RoutePath.MyCourses,
                                })}
                                onClick={() => changeView(RoutePath.MyCourses)}
                            >
                                <MyCoursesIcon
                                    color={
                                        activeView === RoutePath.MyCourses ? "#151422" : "#8F92B5"
                                    }
                                />
                                {isAsideOpen && <span>{View.MyCourses}</span>}
                            </li>
                            <li
                                className={cn(styles.aside__nav__item, {
                                    [styles.aside__nav__item__active]:
                                    activeView === RoutePath.Courses,
                                })}
                                onClick={() => changeView(RoutePath.Courses)}
                            >
                                <CoursesIcon
                                    color={
                                        activeView === RoutePath.Courses ? "#151422" : "#8F92B5"
                                    }
                                />
                                {isAsideOpen && <span>{View.Courses}</span>}
                            </li>
                            <li
                                className={cn(styles.aside__nav__item, {
                                    [styles.aside__nav__item__active]:
                                    activeView === RoutePath.Mentors,
                                })}
                                onClick={() => changeView(RoutePath.Mentors)}
                            >
                                <MentorIcon
                                    color={
                                        activeView === RoutePath.Mentors ? "#151422" : "#8F92B5"
                                    }
                                />
                                {isAsideOpen && <span>{View.Mentors}</span>}
                            </li>
                            {/* <li
                className={cn(styles.aside__nav__item, {
                  [styles.aside__nav__item__active]:
                    activeView === RoutePath.Settings,
                })}
                onClick={() => changeView(RoutePath.Settings)}
              >
                <SettingIcon
                  color={
                    activeView === RoutePath.Settings ? "#151422" : "#8F92B5"
                  }
                />
                {isAsideOpen && <span>{View.Settings}</span>}
              </li> */}
                        </ul>
                    </nav>
                </div>
                <div className={styles.aside__bottom}>
                    <AiAssistant isAsideOpen={isAsideOpen} />
                </div>
            </aside>
            <div className={styles.content}>
                <Outlet />
            </div>
        </section>
    );
};

export default LayoutMain;
