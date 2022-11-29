import { VitePWAOptions } from "vite-plugin-pwa";
import APP from "./app";
import THEME from "./theme";

export type IManifestConfig = Partial<VitePWAOptions>;

const APP_MANIFEST: IManifestConfig = {
    includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
    manifest: {
        name: APP.NAME,
        short_name: APP.SHORT_NAME,
        description: APP.DESCRIPTION,
        theme_color: THEME.BRAND_COLOR,
        icons: [
            {
                src: "pwa-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    },
};

export default APP_MANIFEST;
