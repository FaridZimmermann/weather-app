

export default function TempUnitSelectorButton({onTempButtonChange}) {


    return (
        <>
            <button className="select-temp-btn" value="imperial" onClick={onTempButtonChange}>Fahr.</button>
            <button className="select-temp-btn" value="metric" onClick={onTempButtonChange}>Cel.</button>
            <button className="select-temp-btn" value="standard" onClick={onTempButtonChange}>Kel.</button>

        </>
    )
}