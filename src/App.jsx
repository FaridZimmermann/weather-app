import { useState, useEffect, useContext } from 'react'

import {SettingsContext, SettingsProvider} from "./contexts/SettingsContext.jsx";

import List from "./components/list/List.jsx";
import SettingsMenu from './components/menu/SettingsMenu.jsx';


import "./App.css";

function App() {
  const [userLocation, setUserLocation] = useState([0,0]);

  const settings = useContext(SettingsContext);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude])
    });
  }, []);



  return (
    <>
    <div className="App">
      <h3 className="header">{settings.userLanguage === "en" ? "Local Weather Forecast" : "Wettervorhersage für Ihre Umgebung" }</h3>
      <List location={userLocation}/>
      <SettingsMenu /> 

    </div>
    </>
  )
}

function AppWrapper() {
  return (
    <SettingsProvider><App /></SettingsProvider>
  )
}

export default AppWrapper;
