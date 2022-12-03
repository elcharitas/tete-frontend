import { FC, memo, ReactNode, useMemo } from "react";
import { createTheme, ThemeProvider as MUIThemeProvider } from "@mui/material";
import { TThemes } from "/src/api/config/theme";
import { useConfig } from "/src/api/hooks";
import themes from "./styles";

export interface IThemeProvider {
    children: ReactNode;
}
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
    const { value: themeName } = useConfig("theme.default_theme");
    const theme = useMemo(() => createTheme(themes[themeName as TThemes]), [
        themeName,
    ]);
    return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default memo(ThemeProvider);
