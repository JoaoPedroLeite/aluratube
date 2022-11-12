import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://mnhktyecqphhhcfpqari.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uaGt0eWVjcXBoaGhjZnBxYXJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODIzMjQsImV4cCI6MTk4Mzg1ODMyNH0.b34z6t5V2W89GAYXY2JrVdg06-6GeqOWk_cXaI37FKw";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}