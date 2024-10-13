import ListItemCard from "./ListItemCard.jsx";


import "./ListItem.css";

export default function ListItem({ weatherItem, cardOpen, setCardOpen }) {
  return (
    <>
    {cardOpen && <ListItemCard item={weatherItem} />}
    <li className="list-item" onClick={() => setCardOpen(true)}>
      <h3>{weatherItem["dt_text"]}</h3>
      <p>{weatherItem.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} />
    </li>
    </>
  );
}
