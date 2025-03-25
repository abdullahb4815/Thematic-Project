
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://bwswrhmmmiqihdwgjoid.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3dyaG1tbWlxaWhkd2dqb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDQ4NzEsImV4cCI6MjA1NTU4MDg3MX0.lfDLhSHAJ0yvNip84VS-ko45kUAZuGUgXhzgwpBwXlM");


export async function getTopApps() {
    const { data, error } = await supabase
      .from("appid_table")
      .select("*") // Select all columns
      .limit(10);  // Limit to first 10 rows

    if (error) {
      console.error("Error fetching top apps:", error);
    } else {
      setTopApps(data || []);
    }
  }


  async function getAppRange() {
    const [topApps, setTopApps] = useState([]);
    const { data, error } = await supabase
      .from("appid_table")
      .select("*") // Select all columns
      .where("")  
      .limit(50);  // Limit to first 10 rows

    if (error) {
      console.error("Error fetching top apps:", error);
    } else {
      setTopApps(data || []);
    }

    return (topApps);
  }
