import { useState, useEffect } from "react";

import ListItem from "./ListItem.jsx";
import Loader from "./Loader.jsx";

import useFetch from "../../hooks/useFetch.js";
import parseWeatherData from "../../helpers/parseWeatherData.js";

export default function List(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cardOpen, setCardOpen] = useState(false);
  const [lat, lon] = props.location;
  const {get} = useFetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&lang=${props.userLanguage}&lat=${lat}&lon=${lon}&days=7&units=${props.tempUnit}`)
  
  useEffect(() => {
    (async () => {

        try {
        const data = await get();
        console.log(parseWeatherData(data));
        props.setLocationData(data.city);
        setWeatherData(parseWeatherData(data));
        } catch(err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    })();

  }, [props.location, props.userLanguage, props.tempUnit]);

  return (
    <>
    {isLoading && <Loader />}
    <ul className="list">
      {weatherData.map((item, i) => (
        <ListItem weatherItem={item} key={i} cardOpen={cardOpen} setCardOpen={setCardOpen}/>
      ))}
    </ul>
    </>
  );
}
