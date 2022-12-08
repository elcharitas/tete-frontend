import { FC } from "react";
import Timeline from "../containers/timeline";
import MainLayout from "../layouts/main";

const LiveBetting: FC<IPage> = () => {
    return (
        <MainLayout title="Live">
            <Timeline title="Live Betting" />
        </MainLayout>
    );
};

export default LiveBetting;

