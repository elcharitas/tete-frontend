import { ThemeOptions } from "@mui/material";
import { teteBlueDark, teteGray, teteGrayLight } from "./colors";

export const overrides: ThemeOptions["components"] = {
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
                    borderRadius: "12px !important",
                    padding: "8px 20px !important",
                    "&.active": {
                        backgroundColor: teteBlueDark,
                    },
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
