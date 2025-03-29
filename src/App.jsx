

import SearchBar from "./Components/SearchBar";

// Commented out during testing and developmment
// import {getTopApps} from "./FunctionsSQL/FunctionsSql";
// import { useEffect, useState } from "react";

function App() {
  
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

  
  return (
    <div> 
      
      <div className="SearchBar-Container">
        <SearchBar/>
      </div>
             
      {/* <ul>
        {topApps.map((app) => (
          <li key={app.app_id}>
            <strong>ID:</strong> {app.app_id} - <strong>Name:</strong> {app.app_name || "Unnamed App"}
          </li>
        ))}
      </ul> */}

      
    </div>
  );
}
  
export default App;
