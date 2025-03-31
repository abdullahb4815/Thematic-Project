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


export async function searchApps(searchTerm, offSetInt) {
  let realOffsetInt = 0;
  if (Number.isInteger(offSetInt)){realOffsetInt=offSetInt;};
  const { data, error } = await supabase
    .from("appid_table")
    .select("app_id, app_name, genre_table(genre_type), download_count, user_rating, price, currency_table(currency_type)")
    .ilike("app_name", `%${searchTerm}%`) // This checks for `app_name`
    .ilike("genre_table.genre_type", `%${searchTerm}%`) // This checks for `genre_type`
    .range(realOffsetInt, realOffsetInt+20)

  if (error) {
    console.error("Error searching apps:", error);
    return [];
  }

  return data || [];
}
