import { ENV } from "./env";

export enum TThemes {
    Light = "light",
    Dark = "dark",
}
export interface IThemeConfig {
    BRAND_COLOR: string;
    DEFAULT_THEME: TThemes;
}

const APP_THEME: IThemeConfig = {
    BRAND_COLOR: ENV.VITE_APP_THEME_BRAND_COLOR,
    DEFAULT_THEME: TThemes.Light,
};

export default APP_THEME;
