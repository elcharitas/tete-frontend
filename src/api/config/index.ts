import APP from "./app";
import MANIFEST from "./manifest";
import THEME from "./theme";
import SUPABASE from "./supabase";
import LOGGING from "./logging";
import { ENV } from "./env";

export const CONFIG = {
    APP,
    MANIFEST,
    THEME,
    SUPABASE,
    LOGGING,
    IS_DEV: ENV.DEV,
};
