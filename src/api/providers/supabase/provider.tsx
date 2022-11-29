import { FC, ReactNode } from "react";
import { Provider } from "react-supabase";
import { supabaseClient } from "./client";

const SupabaseProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return <Provider value={supabaseClient}>{children}</Provider>;
};

export default SupabaseProvider;
