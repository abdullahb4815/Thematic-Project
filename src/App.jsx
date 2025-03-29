import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import SearchBar from "./SearchBar";
import {getTopApps} from "./FunctionsSQL/FunctionsSql";

const supabase = createClient("https://bwswrhmmmiqihdwgjoid.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3dyaG1tbWlxaWhkd2dqb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDQ4NzEsImV4cCI6MjA1NTU4MDg3MX0.lfDLhSHAJ0yvNip84VS-ko45kUAZuGUgXhzgwpBwXlM");

function App() {
    const [appIds, setAppIds] = useState([]);
    const [topApps, setTopApps] = useState([]);
  


    useEffect(() => {
      const fetchData = async () => {
        const apps = await getTopApps();
        setTopApps(apps);
        console.log(apps);
      };
      fetchData();
    }, []);

    
    return (
      <div>        
        {/* <ul>
          {this.map((app) => (
            <li key={app.app_id}>
              <strong>ID:</strong> {app.app_id} - <strong>Name:</strong> {app.app_name || "Unnamed App"}
            </li>
          ))}
        </ul> */}

        
      </div>
    );
  }
  
export default App;
