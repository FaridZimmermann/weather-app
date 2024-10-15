

export default function TempUnitSelector({onTempButtonChange, language}) {


    return (
        <div className="settings-temp-unit"> 
                    <p>{language==="en" ? "Unit" : "Maßeinheit"}: </p>          
            <button className="select-temp-btn" value="imperial" onClick={onTempButtonChange}>Fahr.</button>
            <button className="select-temp-btn" value="metric" onClick={onTempButtonChange}>Cel.</button>
            <button className="select-temp-btn" value="standard" onClick={onTempButtonChange}>Kel.</button>
            </div>     );
}