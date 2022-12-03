import { TThemes } from "/src/api/config/theme";
import { overrides } from "../overrides";
import { IThemeOptions } from "../types";
import { lightTheme } from "./light";

const themes: Record<TThemes, IThemeOptions> = {
    light: {
        palette: lightTheme,
        components: overrides,
    },
    dark: {
        palette: {},
        components: overrides,
    },
};
export default themes;
