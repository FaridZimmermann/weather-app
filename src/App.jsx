import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import List from "./components/list/List.jsx";
import SettingsMenu from './components/menu/SettingsMenu.jsx';

import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState([0,0]);
  const [userLanguage, setUserLanguage] = useState("en");
  const [tempUnit, setTempUnit] = useState("metric")
  const [locationData, setLocationData] = useState([]);
  const [showSettings, setShowSettings] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude])
    });
  }, []);



  return (
    <>
    <div className="App">
    <FontAwesomeIcon icon={faBars} size="3x" onClick={() => {setShowSettings(!showSettings)}}/>
     {showSettings && <SettingsMenu setUserLanguage={setUserLanguage} setTempUnit={setTempUnit} closeSettings={() => {setShowSettings(false)}}/> }
      <List location={userLocation} tempUnit={tempUnit} userLanguage={userLanguage} setLocationData={setLocationData}/>
    </div>
    </>
  )
}

export default App
