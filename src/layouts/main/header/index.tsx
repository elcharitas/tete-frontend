import { FC } from "react";
import { AppBar, IconButton, Stack, styled, Toolbar } from "@mui/material";
import { Link } from "/src/components/common";
import { ReactComponent as TeteSVG } from "/src/assets/svg/tete.svg";
import NavItems from "./nav-items";

const Wrapper = styled(AppBar)`
    box-shadow: none;
    background: transparent;
    backdrop-filter: blur(6px);
`;

const Navigation = styled(Toolbar)`
    min-height: 60px;
    background: ${({ theme }) => theme.palette.primary.dark};
    justify-content: space-around;
`;

const NAV_ITEMS = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/live",
        label: "Live Betting",
    },
];

interface IHeader {
    onOpenSidebar?: () => void;
}
const Header: FC<IHeader> = ({ onOpenSidebar }) => {
    return (
        <Wrapper>
            <Navigation>
                <Stack direction="row" alignItems="center">
                    <IconButton
                        onClick={onOpenSidebar}
                        sx={{
                            mx: 1,
                            color: "text.primary",
                            display: { lg: "none" },
                        }}
                    >
                        {/* <Menu /> */}
                    </IconButton>
                    <Link href="/" sx={{ color: "primary.light" }}>
                        <TeteSVG height="30px" />
                    </Link>
                </Stack>
                <Stack direction="row" alignItems="center">
                    <NavItems items={NAV_ITEMS} />
                </Stack>
                <Stack direction="row" alignItems="center">
                    Menu
                </Stack>
            </Navigation>
        </Wrapper>
    );
};

Header.defaultProps = {
    onOpenSidebar: () => {},
};

export default Header;
