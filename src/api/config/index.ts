import APP from "./app";
import MANIFEST from "./manifest";
import THEME from "./theme";
import LOGGING from "./logging";
import { ENV } from "./env";

export const CONFIG = {
    APP,
    MANIFEST,
    THEME,
    LOGGING,
    IS_DEV: ENV.DEV,
};
