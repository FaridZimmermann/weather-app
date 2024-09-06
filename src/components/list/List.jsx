import { useState, useEffect } from "react";
import ListItem from "./ListItem.jsx";
import Loader from "./Loader.jsx";

export default function List(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let location = Array.isArray(props.location) ? props.location.join(",") : props.location;
    console.log(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=7&aqi=no&alerts=no&lang=de`)
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${location}&days=7&aqi=no&alerts=no&lang=${props.userLanguage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        return setWeatherData(data.forecast.forecastday)})
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));

  }, [props.location, props.userLanguage]);

  return (
    <>
    {isLoading && <Loader />}
    <ul className="list">
      {weatherData.map((item, i) => (
        <ListItem weatherItem={item} key={i} />
      ))}
    </ul>
    </>
  );
}
