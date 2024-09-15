
export default function ListItem({ weatherItem }) {
  return (
    <li className="list-item">
      <h3>{weatherItem["dt_text"]}</h3>
      <p>{weatherItem.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} />
    </li>
  );
}
