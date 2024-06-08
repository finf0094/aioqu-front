import React, { useCallback, useEffect, useState } from "react";
import SearchInput from "@/components/ui/search-input/SearchInput";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import "../index.scss";
import MentorCard from "@/components/mentor/mentor-card/MentorCard";
import { api } from "@/api";
import { MentorList } from "@/api/mentor-rest/types";

const MentorsView = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [mentorList, setMentorList] = useState<MentorList>([]);
  const [filteredMentorList, setFilteredMentorList] = useState<MentorList>([]);

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  useEffect(() => {
    api.mentors.mentors().then((response) => {
      setMentorList(response);
      setFilteredMentorList(response);
    });
  }, []);

  useEffect(() => {
    setFilteredMentorList(
      mentorList.filter((mentor) =>
        `${mentor.first_name} ${mentor.last_name}`
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, mentorList]);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div className="title">Mentors</div>
          <SearchInput value={searchValue} onChange={onChange} />
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div style={{ padding: "24px" }} className="universal-content">
        <div className="universal-content__list">
          {filteredMentorList.length === 0 && (
            <div style={{ padding: "20px", textAlign: "center" }}>
              Ничего не найдено
            </div>
          )}
          {filteredMentorList.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorsView;
