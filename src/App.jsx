import { useEffect, useState } from "react";

import SearchBar from "./Components/SearchBar";
import {getTopApps} from "./FunctionsSQL/FunctionsSql";

function App() {
  
  const [topApps, setTopApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apps = await getTopApps();
      setTopApps(apps);
      console.log(apps);
      setTopApps(apps);
    };
    fetchData();
    
    
  }, []);

  
  return (
    <div> 
      
      <div className="SearchBar_Container">
        <SearchBar/>
      </div>
             
      <ul>
        {topApps.map((app) => (
          <li key={app.app_id}>
            <strong>ID:</strong> {app.app_id} - <strong>Name:</strong> {app.app_name || "Unnamed App"}
          </li>
        ))}
      </ul>

      
    </div>
  );
}
  
export default App;
