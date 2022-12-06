import { FC } from "react";
import MainLayout from "/src/layouts/main";
import Highlight from "../containers/highlight";

const HomePage: FC<IPage> = () => {
    return (
        <MainLayout title="Home">
            <Highlight />
        </MainLayout>
    );
};

export default HomePage;
