import { FC, ReactNode } from "react";
import { Link as MUILink } from "@mui/material";
import useLocation from "wouter/use-location";

interface ILink {
    to: string;
    children?: ReactNode;
}
/**
 * A wrapper around the MUI Link component that uses wouter's useLocation hook
 * to navigate to the specified path.
 */
const Link: FC<ILink> = ({ to, children }) => {
    const [, push] = useLocation();
    return (
        <MUILink
            href={to}
            onClick={(e) => {
                e.preventDefault();
                push(to);
            }}
        >
            {children}
        </MUILink>
    );
};

export { Link };
