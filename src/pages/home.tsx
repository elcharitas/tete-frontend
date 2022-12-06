import { FC } from "react";
import MainLayout from "/src/layouts/main";

import Timeline from "../containers/timeline";
import FeaturedGames from "../containers/featuredGames";

const HomePage: FC<IPage> = () => {
    return (
        <MainLayout title="Home">
            <FeaturedGames />
            <Timeline title="Live Betting" />
            <Timeline title="Highlights" />
        </MainLayout>
    );

};

export default HomePage;
