import "./ListItemCard.css";

export default function ListItemCard(props) {
    console.log(props.item)
    return <div className="list-item-card">{props.item["dt_text"]}</div>
}