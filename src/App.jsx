import { useState, useEffect } from 'react'
import List from "./components/list/List.jsx";
import SearchInput from "./components/search/SearchInput.jsx";


function App() {
  const [searchVal, setSearchVal] = useState("");
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos);
    });
    /*setUserLocation(navigator.geolocation.getCurrentPosition()) */
  }, []);

  function handleSearchInputChange(e) {
    setSearchVal(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
    <div className="App">
      <h1>works</h1>
      <SearchInput searchVal={searchVal} onSearchInputChange={handleSearchInputChange} />
      <List location={userLocation} />
    </div>
    </>
  )
}

export default App
