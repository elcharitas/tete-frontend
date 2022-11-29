import { chain } from "radash";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { CONFIG } from "../config";
import { Logger } from "./logging";

export const initSentry = () => {
    Logger.info("Initializing Sentry...");
    if (!CONFIG.IS_DEV) {
        Sentry.init({
            dsn: CONFIG.LOGGING.SENTRY.DSN,
            integrations: [new BrowserTracing()],
            tracesSampleRate: CONFIG.LOGGING.SENTRY.RATE,
        });
    }
};

/**
 * A chain of setup functions to run on app startup.
 * This is where all the magic happens.
 */
export const setup = chain(initSentry);
