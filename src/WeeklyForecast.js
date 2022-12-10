import React from "react";
import DailyForecast from "./DailyForecast";

export default function WeeklyForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <DailyForecast
          day="Sun"
          max={18}
          min={5}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
        <DailyForecast
          day="Mon"
          max={20}
          min={12}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
        <DailyForecast
          day="Tue"
          max={22}
          min={15}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
        <DailyForecast
          day="Wed"
          max={19}
          min={8}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
        <DailyForecast
          day="Thu"
          max={24}
          min={9}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
        <DailyForecast
          day="Fri"
          max={32}
          min={7}
          imgUrl="http://openweathermap.org/img/wn/02d@2x.png"
        />
      </div>
    </div>
  );
}
