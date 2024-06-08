import { useEffect, useState } from "react";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { Chart } from "react-google-charts";
import DatePicker from "react-datepicker";
import { TodayTask } from "@/components/overview/TaskToday/TodayTask";
import { api } from "@/api";
import { Special } from "@/api/specialities-rest/types";

import "./Overview.scss";

const getRandomPercentage = () => Math.floor(Math.random() * 101);

const OverviewView = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const [data, setData] = useState<(string | number)[][]>([
    ["Discipline", "Percentage"],
  ]);

  const changeDate = (date: Date | null) => {
    setStartDate(date);
  };

  useEffect(() => {
    api.specialities.specialities().then((response) => {
      const disciplines = response.map((item: Special) => [
        item.title,
        getRandomPercentage(),
      ]);
      setData([["Discipline", "Percentage"], ...disciplines]);
    });
  }, []);

  const options = {
    chart: {
      title: "Student Performance",
      subtitle: "Percentage of Completion by Discipline",
    },
    hAxis: {
      title: "Percentage",
      minValue: 0,
      maxValue: 100,
    },
    vAxis: {
      title: "Discipline",
    },
    bar: { groupWidth: "100px" },
  };

  return (
    <div className="overview">
      <div className="universal-layout overview__left-block">
        <div className="unversal-header">
          <div className="unversal-header__left-block">
            <div className="title">Hi, Stan Smith</div>
            <div className="subtitle">Let’s continue learning!</div>
          </div>
          <div className="unversal-header__right-block">
            <ProfileBar />
          </div>
        </div>
        <div className="overview__content">
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
          />
        </div>
      </div>
      <div className="overview__right-block">
        <DatePicker selected={startDate} onChange={changeDate} inline />

        <TodayTask title="Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
};

export default OverviewView;
