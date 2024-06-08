import { useCallback, useEffect, useState } from "react";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { CardCourse } from "@/components/ui/card-course/CardCourse";
import "../index.scss";
import { api } from "@/api";
import { CourseList } from "@/api/course-rest/types";

const CoursesView = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [courseList, setCourseList] = useState<CourseList>([]);
  const [filteredCourseList, setFilteredCourseList] = useState<CourseList>([]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    api.courses.courses().then((response) => {
      setCourseList(response);
      setFilteredCourseList(response);
    });
  }, []);

  useEffect(() => {
    setFilteredCourseList(
      courseList.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, courseList]);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div className="title">Courses</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div style={{ padding: "24px" }} className="universal-content">
        <div className="universal-content__list">
          {filteredCourseList.length === 0 && (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Ничего не найдено
            </div>
          )}
          {filteredCourseList.map((course) => (
            <CardCourse
              key={course.id}
              id={course.id}
              title={course.title}
              img={course.image || ""}
              viewPage="Courses"
              isFavorite={course.is_favorite}
              descr={course.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesView;
