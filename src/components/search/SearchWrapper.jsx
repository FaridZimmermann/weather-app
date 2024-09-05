import { useState, useEffect } from 'react'

import SearchInput from ".//SearchInput.jsx";


export default function SearchWrapper() {
    const [searchVal, setSearchVal] = useState("");

    function handleSearchInputChange(e) {
        setSearchVal(e.target.value);
        console.log(e.target.value);
      }
    
    return <> 
          <SearchInput searchVal={searchVal} onSearchInputChange={handleSearchInputChange} />   
    </>
}