import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { League } from "../components/widgets";

interface ITimeline {
    title: string;
    showSearch?: boolean;
    timelines?: string[];
}
const Timeline: FC<ITimeline> = ({ title, showSearch, timelines }) => {
    return (
        <Box
            sx={{
                background: "#E5E5E5",
                width: "949px",
                padding: "15px",
                my: 12,
            }}
        >
            <Typography variant="h6" sx={{ m: 2 }}>
                {title}
            </Typography>
            <Divider />
            <League title="Premier League" />
            <League title="La Liga" />
            <League title="Serie A" />
        </Box>
    );
};

export default Timeline;
