import {useContext } from "react";

import { SettingsContext } from "../../contexts/SettingsContext";
import { tempSymb, weekDays } from "../../helpers/valueMaps";

import "./ListItem.css";

export default function ListItem({ weatherItem }) {
  const settings = useContext(SettingsContext);

  return (
    <>
    <li className="list-item" onClick={() => setCardOpen(true)}>

      <p>{weekDays[new Date(weatherItem.dt_txt.split(" ")[0]).getDay()][settings.userLanguage === "en" ? 0 : 1]}</p>

      <h3>{weatherItem.dt_txt.split(" ")[0].split("-").reverse().join("-")}</h3>
      
      <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} />

      <p>{weatherItem.weather[0].description}</p>
      <p>{`${Math.floor(weatherItem.main.temp)}${tempSymb[settings.tempUnit]}`}</p>

    </li>
    </>
  );
}
