import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderPlace",
    temp: 300.1,
    tempMin: 300.2,
    tempMax: 300.2,
    humidity: 41,
    feelsLike: 300.1,
    weather: "smoke",
  });
  let updateInfo = (newData) => {
    setWeatherInfo(newData);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Delta</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox result={weatherInfo} />
    </div>
  );
}
