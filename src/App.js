import "./styles.css";
import Search from "./Search";
import Overview from "./Overview";
import WeeklyForecast from "./WeeklyForecast";

export default function App() {
  return (
    <div className="App">
      <div className="container .container-sm">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Search />
            <Overview />
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </div>
  );
}
