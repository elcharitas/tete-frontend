import {
    teteBlueDark,
    teteBlue,
    teteRed,
    teteBlueLight,
    teteWhite,
    teteBlack,
    teteGray,
} from "../colors";
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
        black: teteBlack,
    },
    secondary: {
        main: teteGray,
    },
    error: {
        main: teteRed,
    },
};
