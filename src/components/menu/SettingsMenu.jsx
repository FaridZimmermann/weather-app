import {useContext} from "react";

import { SettingsContext } from "../contexts/SettingsContext.jsx";

import LanguageSelectorButton from './interface/LanguageSelectorButton.jsx';
import TempUnitSelectorButton from './interface/TempUnitSelectorButton.jsx';

import "./settingsMenu.css";

export default function SettingsMenu(props) {

    const settings = useContext(SettingsContext);

    return(
    <div className="settings-menu">
     <i class="fa-regular fa-circle-xmark" onClick={props.closeSettings}></i>
      <LanguageSelectorButton onLanguageButtonChange={e => settings.setUserLanguage(e.target.value)} />
      <TempUnitSelectorButton onTempButtonChange={e => settings.setTempUnit(e.target.value)} />
      </div>);
}