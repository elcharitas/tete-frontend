import { PaletteColorOptions, ThemeOptions } from "@mui/material";

export type TThemePalette = ThemeOptions["palette"] & {
    // Add custom properties here
    tertiary?: PaletteColorOptions;
};

export interface IThemeOptions extends Omit<ThemeOptions, "palette"> {
    palette: TThemePalette;
}
