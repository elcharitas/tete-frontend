import { FC } from "react";
import { AppBar, IconButton, Stack, styled, Toolbar } from "@mui/material";
import { Link } from "/src/components/common";
import TeteSVG from "/src/assets/svg/tete.svg";

const Wrapper = styled(AppBar)`
    box-shadow: none;
    background: transparent;
    backdrop-filter: blur(6px);
`;

const Navigation = styled(Toolbar)`
    min-height: 80px;
    background: ${({ theme }) => theme.palette.primary.dark};
    justify-content: space-around;
`;

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
                        <TeteSVG />
                    </Link>
                </Stack>
            </Navigation>
        </Wrapper>
    );
};

export default Header;
