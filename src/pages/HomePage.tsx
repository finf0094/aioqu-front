// import LayoutMain from "@/layout/LayoutMain";
// import { useCallback, useMemo, useState } from "react";
// import { View } from "@/interface/view";
// import CoursesView from "@/components/HomePage/CoursesView/CoursesView";
// import MentorsView from "@/components/HomePage/MentorsView/MentorsView";
// import MyCoursesView from "@/components/HomePage/MyCoursesView/MyCoursesView";
// import OverviewView from "@/components/HomePage/OverviewView/OverviewView";
// import SettingsView from "@/components/HomePage/SettingsView/SettingsView";

// const HomePage = () => {
//   const [activeView, setActivePage] = useState<View>(View.Overview);

//   const changeView = useCallback((view: View) => {
//     setActivePage(view);
//   }, []);

//   const viewPage = useMemo(() => {
//     switch (activeView) {
//       case View.Overview:
//         return <OverviewView />;
//       case View.MyCourses:
//         return <MyCoursesView />;
//       case View.Courses:
//         return <CoursesView />;
//       case View.Mentors:
//         return <MentorsView />;
//       case View.Settings:
//         return <SettingsView />;
//       default:
//         return <div>Select a view</div>;
//     }
//   }, [activeView]);

//   return (
//     // <LayoutMain activeView={activeView} changeView={changeView}>
//     //   {viewPage}
//     // </LayoutMain>
//     <></>
//   );
// };

// export default HomePage;
