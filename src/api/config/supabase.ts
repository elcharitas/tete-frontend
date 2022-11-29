import { ENV } from "./env";

export interface ISupabaseConfig {
    KEY: string;
    URL: string;
    TABLES: {
        I18N: string;
        CONFIG: string;
    };
}

const SUPABASE_CONFIG: ISupabaseConfig = {
    KEY: ENV.VITE_SUPABASE_KEY,
    URL: ENV.VITE_SUPABASE_URL,
    TABLES: {
        I18N: "tete-i18n",
        CONFIG: "tete-config",
    },
};

export default SUPABASE_CONFIG;
