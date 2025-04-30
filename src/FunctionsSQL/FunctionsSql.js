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
export async function searchApps(searchTerm, offSetInt = 0, priceRange = [0, 400], selectedGenre = '') {
  const [minPrice, maxPrice] = priceRange;
  let query = supabase
    .from("appid_with_genre")
    .select("*")
    .or(`app_name.ilike.%${searchTerm}%,genre_type.ilike.%${searchTerm}%`)
    .gte('price', minPrice)
    .lte('price', maxPrice);

  if (selectedGenre) {
    query = query.eq('genre_type', selectedGenre);
  }

  const { data, error } = await query.range(offSetInt, offSetInt + 20);

  if (error) {
    console.error("Error searching apps:", error);
    return [];
  }

  

  return data || [];
}

// gets the app details based on the app name
export async function getDetails(appName) {

  let query = supabase
  
    .from("description_table")
    .select("*")
    .ilike(`app_name`,`%${appName}%`)


  const { data, error } = await query;


  if (error) {
    console.error("Error searching app description:", error);
    return [];
  }

  console.log(data);



  return data[0].app_desc || [];

}