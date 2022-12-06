interface IAppEnv extends ImportMetaEnv {
    [key: `VITE_${string}`]: string;
}

export const ENV = ({
    VITE_ENV: "development",
    VITE_LOGGING_LEVEL: "info",
    VITE_SENTRY_RATE: "1.0",
    VITE_APP_THEME_BRAND_COLOR: "#2A3149",
    ...(typeof process !== "undefined" ? process.env : import.meta.env || {}),
} as unknown) as IAppEnv;
