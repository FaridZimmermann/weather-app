
export default function ListItem({ weatherItem }) {
  return (
    <li className="list-item">
      <h3>{weatherItem.date}</h3>
      <p>{weatherItem.day.condition.text}</p>
      <img src={weatherItem.day.condition.icon} />
    </li>
  );
}
