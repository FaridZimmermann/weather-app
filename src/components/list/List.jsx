import { useState, useEffect } from "react";
import ListItem from "./ListItem.jsx";
import Loader from "./Loader.jsx";


export default function List(props) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {

        const [lat, lon] = props.location;

        try {
        const res = await fetch(`https://api.weatherbit.io/v2.0/current?key=${process.env.NEW_API_KEY}&lang=${props.userLanguage}&lat=${lat}&lon=${lon}&days=7`)
        const data = await res.json();
        setWeatherData();
        } catch(err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    })();

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
