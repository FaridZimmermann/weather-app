import { useState, useEffect } from "react";
import ListItem from "./ListItem.jsx";

export default function List({ location }) {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=7&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data.forecast.forecastday));
  }, [location]);
  return (
    <ul className="list">
      {weatherData.map((item, i) => (
        <ListItem weatherItem={item} key={i} />
      ))}
    </ul>
  );
}
