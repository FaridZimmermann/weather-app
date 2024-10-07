




import LanguageSelectorButton from './interface/LanguageSelectorButton.jsx';
import TempUnitSelectorButton from './interface/TempUnitSelectorButton.jsx';

import "./settingsMenu.css";

export default function SettingsMenu(props) {

    return(
    <div className="settings-menu">
     <i class="fa-regular fa-circle-xmark" onClick={props.closeSettings}></i>
      <LanguageSelectorButton onLanguageButtonChange={e => props.setUserLanguage(e.target.value)} />
      <TempUnitSelectorButton onTempButtonChange={e => props.setTempUnit(e.target.value)} />
      </div>);
}