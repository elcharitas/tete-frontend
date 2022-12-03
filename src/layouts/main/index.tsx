import { FC } from "react";
import { useTitle } from "react-use";
import { LeftSidebar, RightSidebar } from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const MainLayout: FC<ILayout> = ({ title, children }) => {
    useTitle(title, { restoreOnUnmount: true });
    return (
        <>
            <Header />
            <LeftSidebar />
            {children}
            <RightSidebar />
            <Footer />
        </>
    );
};

export default MainLayout;
