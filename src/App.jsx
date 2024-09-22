import { useState, useEffect } from 'react'


import List from "./components/list/List.jsx";
import SettingsMenu from './components/menu/SettingsMenu.jsx';


function App() {
  const [userLocation, setUserLocation] = useState([0,0]);
  const [userLanguage, setUserLanguage] = useState("en");
  const [tempUnit, setTempUnit] = useState("metric")
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude])
    });
  }, []);



  return (
    <>
    <div className="App">
      <SettingsMenu setUserLanguage={setUserLanguage} setTempUnit={setTempUnit} />
      <List location={userLocation} tempUnit={tempUnit} userLanguage={userLanguage} setLocationData={setLocationData}/>
    </div>
    </>
  )
}

export default App
