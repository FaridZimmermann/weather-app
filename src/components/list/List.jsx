import { useState, useEffect } from "react";
import ListItem from "./ListItem.jsx";
import Loader from "./Loader.jsx";


export default function List(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let [lat, lon] = props.location;

    fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEW_API_KEY}`)
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
