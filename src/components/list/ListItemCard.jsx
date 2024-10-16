import {useContext} from "react";
import { SettingsContext } from "../../contexts/SettingsContext";
import { tempSymb } from "../../helpers/valueMaps";

import "./ListItemCard.css";

export default function ListItemCard({setCardOpen, item}) {
  const settings = useContext(SettingsContext);

    return <div className="list-item-card">
             <i class="fa-regular fa-circle-xmark" onClick={() => setCardOpen(false)}></i>
          <div>
            <h3>Weather for: {item.dt_txt.split(" ")[0].split("-").reverse().join("-")}</h3>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
            <p>{`${Math.floor(item.main.temp)}${tempSymb[settings.tempUnit]}`}</p>
            <p>{item.weather[0].description}</p>
            </div>   
        {item["dt_text"]}</div>
}