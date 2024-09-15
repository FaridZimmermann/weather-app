import { useState, useEffect } from 'react'


import List from "./components/list/List.jsx";
import LanguageSelectorButton from './components/interface/LanguageSelectorButton.jsx';
import TempUnitSelectorButton from './components/interface/TempUnitSelectorButton.jsx';

function App() {
  const [userLocation, setUserLocation] = useState([0,0]);
  const [userLanguage, setUserLanguage] = useState("en");
  const [userTemp, setUserTemp] = useState("metric")
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation([pos.coords.latitude, pos.coords.longitude])
    });
  }, []);



  return (
    <>
    <div className="App">
      <LanguageSelectorButton onLanguageButtonChange={e => setUserLanguage(e.target.value)} />
      <TempUnitSelectorButton onTempButtonChange={e => setUserTemp(e.target.value)} />
      <List location={userLocation} userLanguage={userLanguage} setLocationData={setLocationData}/>
    </div>
    </>
  )
}

export default App
