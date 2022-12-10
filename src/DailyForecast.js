import React from "react";
import "./dailyForecast.css";

export default function DailyForecast(props) {
  return (
    <div className="col-2">
      <div className="forecast-date">{props.day}</div>
      <img src={props.imgUrl} alt="" width="42" />
      <div className="forecast-temperatures">
        <span className="forecast-temp-max">{props.max}</span>{" "}
        <span className="forecast-temp-min">{props.min}</span>
      </div>
    </div>
  );
}
