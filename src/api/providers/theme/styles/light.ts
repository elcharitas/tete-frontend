import { teteBlueDark, teteBlue, teteBlueLight, teteWhite } from "../colors";
import { TThemePalette } from "../types";

export const lightTheme: TThemePalette = {
    mode: "light",
    primary: {
        main: teteBlue,
        dark: teteBlueDark,
        light: teteBlueLight,
    },
    common: {
        white: teteWhite,
    },
};
