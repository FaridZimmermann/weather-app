import { useState } from "react";


import ListItemCard from "./ListItemCard.jsx";


import "./ListItem.css";

export default function ListItem({ weatherItem }) {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
    {cardOpen && <ListItemCard item={weatherItem} setCardOpen={setCardOpen}/>}
    <li className="list-item" onClick={() => setCardOpen(true)}>
      <h3>{weatherItem.dt_txt.split(" ")[0].split("-").reverse().join("-")}</h3>
      <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} />
      <p>{weatherItem.weather[0].description}</p>

    </li>
    </>
  );
}
