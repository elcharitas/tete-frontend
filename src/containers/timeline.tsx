import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { League } from "../components/widgets";
import { teteWhite } from "../api/providers/theme/colors";

interface ITimeline {
    title: string;
    showSearch?: boolean;
    timelines?: string[];
}
const Timeline: FC<ITimeline> = ({ title, showSearch, timelines }) => {
    return (
        <Box
            sx={{
                background: teteWhite,
                width: "949px",
                padding: "15px",
                my: 12,
            }}
        >
            <Typography variant="h6" sx={{ m: 2 }}>
                {title}
                {timelines}
                {showSearch}
            </Typography>
            <Divider />
            <League title="Premier League" />
            <League title="La Liga" />
            <League title="Serie A" />
        </Box>
    );
};

Timeline.defaultProps = {
    showSearch: false,
    timelines: [],
};

export default Timeline;
