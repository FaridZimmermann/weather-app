import { useState, useContext } from "react";


import ListItemCard from "./ListItemCard.jsx";

import { SettingsContext } from "../../contexts/SettingsContext";
import { tempSymb } from "../../helpers/valueMaps";

import "./ListItem.css";

export default function ListItem({ weatherItem }) {
  const [cardOpen, setCardOpen] = useState(false);
  const settings = useContext(SettingsContext);

  return (
    <>
    {cardOpen && <ListItemCard item={weatherItem} setCardOpen={setCardOpen}/>}
    <li className="list-item" onClick={() => setCardOpen(true)}>
      <h3>{weatherItem.dt_txt.split(" ")[0].split("-").reverse().join("-")}</h3>
      <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} />
      <p>{weatherItem.weather[0].description}</p>
      <p>{`${Math.floor(weatherItem.main.temp)}${tempSymb[settings.tempUnit]}`}</p>
    </li>
    </>
  );
}
