import { useState, useEffect } from 'react'


import List from "./components/list/List.jsx";
import LanguageSelectorButton from './components/interface/LanguageSelectorButton.jsx';

function App() {
  const [userLocation, setUserLocation] = useState([]);
  const [userLanguage, setUserLanguage] = useState("en");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
      setUserLocation([pos.coords.latitude, pos.coords.longitude])
    });
    //setUserLocation() 
  }, []);



  return (
    <>
    <div className="App">
      <h1>works</h1>
      <LanguageSelectorButton onLanguageButtonChange={e => setUserLanguage(e.target.value)} />
      <List location={userLocation} userLanguage={userLanguage} />
    </div>
    </>
  )
}

export default App
