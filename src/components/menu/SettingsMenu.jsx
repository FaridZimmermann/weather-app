import LanguageSelectorButton from './interface/LanguageSelectorButton.jsx';
import TempUnitSelectorButton from './interface/TempUnitSelectorButton.jsx';


export default function SettingsMenu(props) {

    return <>
      <LanguageSelectorButton onLanguageButtonChange={e => props.setUserLanguage(e.target.value)} />
      <TempUnitSelectorButton onTempButtonChange={e => props.setTempUnit(e.target.value)} />

    </>
}