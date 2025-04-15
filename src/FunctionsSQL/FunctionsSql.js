import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://bwswrhmmmiqihdwgjoid.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3c3dyaG1tbWlxaWhkd2dqb2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMDQ4NzEsImV4cCI6MjA1NTU4MDg3MX0.lfDLhSHAJ0yvNip84VS-ko45kUAZuGUgXhzgwpBwXlM");

// 


export async function getTopApps() {
  const { data, error } = await supabase
    .from("appid_table")
    .select("*") // Select all columns
    .order("download_count", {ascending: false})
    .limit(10);  // Limit to first 10 rows

  if (error) {
    console.error("Error fetching top apps:", error);
    //TODO: Throw error
  } else {
    return(data || [])
  }

  
}


export async function getAppRange() {
  const { data, error } = await supabase
    .from("appid_table")
    .select("*") // Select all columns
    .where("")
    .limit(50);  // Limit to first 10 rows

  if (error) {
    console.error("Error fetching top apps:", error);
    //TODO: Throw error
  } else {
    return(data || [])
  }

  
}

// upadated this function to accept price range
export async function searchApps(searchTerm, offSetInt = 0, priceRange = [0, 400]) {
  const [minPrice, maxPrice] = priceRange;

  const { data, error } = await supabase
    .from("appid_with_genre")
    .select("*")
    .or(`app_name.ilike.%${searchTerm}%,genre_type.ilike.%${searchTerm}%`)
    .gte('price', minPrice)
    .lte('price', maxPrice)
    .range(offSetInt, offSetInt + 20);

  if (error) {
    console.error("Error searching apps:", error);
    return [];
  }

  return data || [];
}
// might be dumb
export async function holdResults(results) {
  const heldResults = results;
  return (heldResults)
}