import {ThemeProvider} from './ThemeContext';
import ThemeToggle from './Components/ThemeToggle';
import SearchBar from "./Components/SearchBar";
import PriceRangeSlider from './Components/Slider';
import { useState } from 'react';
import LandingPage from './Components/LandingPage';

// Commented out during testing and developmment
// import {getTopApps} from "./FunctionsSQL/FunctionsSql";
// import { useEffect, useState } from "react";

// updated app so components have better "communication"
// they can pass parameters and data into each other now
function App() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const [priceRange, setPriceRange] = useState([0, 350]);
  // const [dataFrame, setDataFrame] = useState([0]);
  const handlePriceChange = (range) => {
    setPriceRange(range);
    setOffset(0); // reset offset when changing filter - effectively returning first page results
  };


  return (
    <ThemeProvider>
       
      <LandingPage/>
      
      <div>
     
        <ThemeToggle />
        
        

        <div className='row-container'>

          <div className="SearchBar-Container">

            <div className="Slider-Container">
              <PriceRangeSlider min={0} max={350} onChange={handlePriceChange} />
            </div>


            <div className='Search-Container'>
              <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              offset={offset}
              setOffset={setOffset}
              priceRange={priceRange}

              />
            </div>
          </div>
          
        </div>
      </div>
    </ThemeProvider>
  );
}
  
  // only here for reference
  // const [topApps, setTopApps] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const apps = await getTopApps();
  //     setTopApps(apps);
  //     console.log(apps);
  //     setTopApps(apps);
  //   };
  //   fetchData();
  // }, []);

      /* <ul>
        {topApps.map((app) => (
          <li key={app.app_id}>
            <strong>ID:</strong> {app.app_id} - <strong>Name:</strong> {app.app_name || "Unnamed App"}
          </li>
        ))}
      </ul> */

      

      
export default App;
