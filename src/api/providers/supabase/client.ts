import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "../../config";

export const supabaseClient = createClient(
    CONFIG.SUPABASE.URL,
    CONFIG.SUPABASE.KEY,
    {
        persistSession: true,
        autoRefreshToken: true,
    }
);
