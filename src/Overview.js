import React from "react";
import "./overview.css";
import TodayTemp from "./TodayTemp";
import TodayDetails from "./TodayDetails";

export default function TodayOverview(props) {
  return (
    <div className="overview row">
      <TodayDetails
        location="Sydney"
        date="Saturday"
        time="15.10"
        description="Sunny and clear"
        humidity={20}
        wind={15}
      />
      <TodayTemp
        iconUrl="http://openweathermap.org/img/wn/02d@2x.png"
        value={24}
      />
    </div>
  );
}
