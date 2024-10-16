import {useContext} from "react";

import { SettingsContext } from "../../contexts/SettingsContext.jsx";

import LanguageSelector from './interface/LanguageSelector.jsx';
import TempUnitSelector from './interface/TempUnitSelector.jsx';

import "./settingsMenu.css";

export default function SettingsMenu(props) {

    const settings = useContext(SettingsContext);

    return(
    <div className="settings-menu">
      <LanguageSelector language={settings.userLanguage} onLanguageButtonChange={e => settings.setUserLanguage(e.target.value)} />
      <TempUnitSelector language={settings.userLanguage} onTempButtonChange={e => settings.setTempUnit(e.target.value)} />
      </div>);
}