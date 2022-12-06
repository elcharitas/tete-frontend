import { FC, ReactNode } from "react";
import { Link as MUILink, Stack, Typography } from "@mui/material";
import useLocation from "wouter/use-location";

interface ILink {
    href: string;
    icon?: ReactNode;
    label?: ReactNode;
    children?: ReactNode;
}
/**
 * A wrapper around the MUI Link component that uses wouter's useLocation hook
 * to navigate to the specified path.
 */
const Link: FC<ILink> = ({ href, icon, label, children }) => {
    const [, push] = useLocation();
    return (
        <MUILink
            href={href}
            onClick={(e) => {
                e.preventDefault();
                push(href);
            }}
        >
            <Stack direction="row" alignItems="center">
                {icon}
                {label !== undefined && <Typography>{label}</Typography>}
                {children}
            </Stack>
        </MUILink>
    );
};

export { Link };
