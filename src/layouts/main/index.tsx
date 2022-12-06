import { FC } from "react";
import { useTitle } from "react-use";
import { Container, styled } from "@mui/material";
import { LeftSidebar, RightSidebar } from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const Wrapper = styled(Container)`
    margin-top: 100px;
`;

const MainLayout: FC<ILayout> = ({ title, children }) => {
    useTitle(title, { restoreOnUnmount: true });
    return (
        <>
            <Header />
            <Wrapper>
                <LeftSidebar />
                {children}
                <RightSidebar />
            </Wrapper>
            <Footer />
        </>
    );
};

export default MainLayout;
