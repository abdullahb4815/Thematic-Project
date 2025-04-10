import {ThemeProvider} from './ThemeContext';
import ThemeToggle from './Components/ThemeToggle';
import SearchBar from "./Components/SearchBar";
import PriceRangeSlider from './Components/Slider';

// Commented out during testing and developmment
// import {getTopApps} from "./FunctionsSQL/FunctionsSql";
// import { useEffect, useState } from "react";

function App() {
  const handlePriceChange = (range) => {
    console.log('Selected Price Range:', range);
  };
  return (
    <ThemeProvider>
      <div>
        <ThemeToggle />
        <div className="SearchBar-Container">
          <SearchBar/>
        </div>
        <div className="Slider-Container">
          <PriceRangeSlider min={0} max={400} onChange={handlePriceChange} />
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
