interface IAppEnv extends ImportMetaEnv {
    [key: `VITE_${string}`]: string;
}

export const ENV = ({
    VITE_ENV: "development",
    VITE_LOGGING_LEVEL: "info",
    VITE_SUPABASE_KEY: "",
    VITE_SUPABASE_URL: "",
    VITE_SENTRY_RATE: "1.0",
    ...(typeof process !== "undefined" ? process.env : import.meta.env || {}),
} as unknown) as IAppEnv;
