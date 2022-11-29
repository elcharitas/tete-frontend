import { series } from "radash";
import { ENV } from "./env";

export const LOG_LEVELS = series("info", "warn", "error");

const DEFAULT_LEVEL = LOG_LEVELS.last();

const SENTRY_CONFIG = {
    DSN: ENV.VITE_SENTRY_DSN,
    RATE: Number(ENV.VITE_SENTRY_RATE),
};

const LOGGING_CONFIG = {
    LEVEL: ENV.VITE_LOGGING_LEVEL as typeof DEFAULT_LEVEL,
    SENTRY: SENTRY_CONFIG,
    LOG_LEVELS,
};

export default LOGGING_CONFIG;
