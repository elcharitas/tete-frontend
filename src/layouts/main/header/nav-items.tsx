import { FC } from "react";
import { Stack } from "@mui/material";
import { Button, Link } from "/src/components/common";
import useLocation from "wouter/use-location";

interface INavItem {
    href: string;
    label: string;
}
interface INavItems {
    items: INavItem[];
}
const NavItems: FC<INavItems> = ({ items }) => {
    const [active] = useLocation();
    return (
        <Stack direction="row" alignItems="center">
            {items.map((item) => (
                <Button
                    variant="text"
                    key={item.href}
                    href={item.href}
                    LinkComponent={Link}
                    className={active === item.href ? "active" : ""}
                >
                    {item.label}
                </Button>
            ))}
        </Stack>
    );
};

export default NavItems;
