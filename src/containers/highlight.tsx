import { Box, Divider, Typography } from "@mui/material";
import { League } from "../components/widgets";

const Highlight = () => {
    return (
        <Box
            sx={{
                background: "#E5E5E5",
                width: "949px",
                marginTop: "20px",
                padding: "15px",
            }}
        >
            <Typography sx={{ m: 2, fontSize: "31px", fontWeight: "400px" }}>
                Highlights
            </Typography>
            <Divider />
            <League title="Premier League" />
            <League title="La Liga" />
            <League title="Serie A" />
        </Box>
    );
};

export default Highlight;
