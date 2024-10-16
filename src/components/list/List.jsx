import { useState, useEffect, useContext } from "react";

import {SettingsContext} from "../../contexts/SettingsContext.jsx"

import ListItem from "./ListItem.jsx";
import Loader from "./Loader.jsx";

import useFetch from "../../hooks/useFetch.js";
import parseWeatherData from "../../helpers/parseWeatherData.js";

import "./List.css";

export default function List(props) {

  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const settings = useContext(SettingsContext);
  const [lat, lon] = props.location;
  const {get} = useFetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&lang=${settings.userLanguage}&lat=${lat}&lon=${lon}&days=7&units=${settings.tempUnit}`)
  
  useEffect(() => {
    (async () => {

        try {
        const data = await get();
        console.log(parseWeatherData(data));
        setWeatherData(parseWeatherData(data));
        } catch(err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    })();

  }, [props.location, settings.userLanguage, settings.tempUnit]);

  return (
    <>
    {isLoading && <Loader />}
    <ul className="list">
      {weatherData.map((item, i) => (
        <ListItem weatherItem={item} key={i}/>
      ))}
    </ul>
    </>
  );
}
