import { Container } from "@mui/system";
import { FC } from "react";
import MainLayout from "/src/layouts/main";
import {useStyle } from '../components/styles/homeStyles'
import { Box, Typography } from "@mui/material";
import FeaturedGames from "../containers/featuredGames";
import LiveBetting from "../containers/liveBetting";
import Highlight from "../containers/highlight";


const HomePage: FC<IPage> = () => {
const classes  = useStyle()

    return <MainLayout title="Home">
        <FeaturedGames/>
        <LiveBetting/>
        <Highlight/>
    </MainLayout>;
};

export default HomePage;
