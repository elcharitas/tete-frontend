import { FC } from "react";
import MainLayout from "/src/layouts/main";
import Timeline from "../containers/timeline";

const HomePage: FC<IPage> = () => {
    return (
        <MainLayout title="Home">
            <Timeline title="Live Betting" />
            <Timeline title="Highlights" />
        </MainLayout>
    );
};

export default HomePage;
