import { proxied } from "radash";
import { CONFIG } from "../config";

const { LOG_LEVELS, LEVEL } = CONFIG.LOGGING;

export const Logger = proxied((level: typeof LEVEL) => {
    if (LOG_LEVELS.min(LEVEL, level) !== level) {
        return () => {};
    }
    // eslint-disable-next-line no-console
    return console[level];
});
