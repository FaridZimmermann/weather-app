import { useState, useEffect } from 'react'


import List from "./components/list/List.jsx";
import SearchWrapper from './components/search/SearchWrapper.jsx';

function App() {
  const [userLocation, setUserLocation] = useState([]);

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
      <SearchWrapper />
      <List location={userLocation} />
    </div>
    </>
  )
}

export default App
