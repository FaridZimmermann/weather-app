
export default function LanguageSelectorButton({onLanguageButtonChange}) {


    return (
        <>
            <button className="select-lang-btn" value="en" onClick={onLanguageButtonChange}>EN</button>
            <button className="select-lang-btn" value="de" onClick={onLanguageButtonChange}>DE</button>
        </>
    )
}