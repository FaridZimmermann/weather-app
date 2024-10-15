
import "./LanguageSelector.css";

export default function LanguageSelector({onLanguageButtonChange, language}) {


    return (
        <div className="settings-language">
            <p>{language==="en" ? "Language" : "Sprache"}: </p>
            <button className="select-lang-btn" value="en" onClick={onLanguageButtonChange}>EN</button>
            <button className="select-lang-btn" value="de" onClick={onLanguageButtonChange}>DE</button>
        </div>
    )
}