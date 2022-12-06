import { ThemeOptions } from "@mui/material";
import {
    teteBlackLight,
    teteBlue,
    teteGray,
    teteGrayLight,
    teteWhite,
    teteWhiteDark,
} from "./colors";

export const overrides: ThemeOptions["components"] = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                backgroundColor: teteWhiteDark,
            },
        },
    },
    MuiTypography: {
        variants: [
            {
                props: {
                    variant: "h5",
                },
                style: {
                    fontSize: 18,
                    fontWeight: 700,
                },
            },
            {
                props: {
                    variant: "body2",
                },
                style: {
                    fontSize: 14,
                    fontWeight: 500,
                    marginTop: 3,
                    color: teteGray,
                },
            },
            {
                props: {
                    variant: "body1",
                },
                style: {
                    fontSize: 13,
                    fontWeight: 700,
                    marginTop: 12,
                },
            },
            {
                props: {
                    variant: "subtitle1",
                },
                style: {
                    fontSize: 28,
                    fontWeight: 700,
                },
            },
        ],
    },
    MuiButton: {
        variants: [
            {
                props: {
                    variant: undefined,
                },
                style: {
                    color: teteWhite,
                    borderRadius: "2px !important",
                    padding: "8px 20px",
                    margin: "0px 5px",
                    "&.active": {
                        borderBottom: `2px solid ${teteWhite}`,
                    },
                    "&:hover": {
                        backgroundColor: teteBlackLight,
                        borderBottom: `2px solid ${teteWhite}`,
                    },
                },
            },
            {
                props: {
                    variant: "outlined",
                },
                style: {
                    color: teteWhite,
                    borderRadius: "2px !important",
                    padding: "8px 20px",
                    margin: "0px 5px",
                    border: `2px solid ${teteWhite}`,
                },
            },
            {
                props: {
                    variant: "contained",
                },
                style: {
                    color: teteWhite,
                    borderRadius: "2px !important",
                    padding: "6px 12px",
                    margin: "0px 5px",
                    backgroundColor: teteBlue,
                },
            },
        ],
    },
    MuiLink: {
        variants: [
            {
                props: {
                    variant: "body2",
                },
                style: {
                    color: teteGray,
                    margin: "10px 0",
                    "&:hover": {
                        color: teteGrayLight,
                    },
                },
            },
        ],
    },
};
