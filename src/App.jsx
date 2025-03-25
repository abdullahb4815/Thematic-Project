import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import SearchBar from "./SearchBar";
import AppCard from "./Components/AppCard";

const supabase = createClient("https://bwswrhmmmiqihdwgjoid.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3dyaG1tbWlxaWhkd2dqb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDQ4NzEsImV4cCI6MjA1NTU4MDg3MX0.lfDLhSHAJ0yvNip84VS-ko45kUAZuGUgXhzgwpBwXlM");

function App() {
    const [appIds, setAppIds] = useState([]);
    const [topApps, setTopApps] = useState([]);
  
    // Fetch all app_ids
    useEffect(() => {
      async function getAppIds() {
        const { data, error } = await supabase.from("appid_table").select("app_id");
  
        if (error) {
          console.error("Error fetching app_ids:", error);
        } else {
          setAppIds(data || []); // Ensure no null values
        }
      }
  
      getAppIds();
      getTopApps(); // Fetch first 10 apps on mount
    }, []);
  

    
    return (
      <div>
        {/* uncomment this if you want to see the list of app id */}
        {/* <h1>App IDs</h1>
        <ul>
          {appIds.map((item) => (
            <li key={item.app_id}>{item.app_id}</li>
          ))}
        </ul> */}
        <SearchBar></SearchBar>
        {/* <AppCard/> */}
        


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
