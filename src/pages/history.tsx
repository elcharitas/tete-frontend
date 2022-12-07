import { Box, Divider, Typography } from "@mui/material";
import LabTabs from "../components/widgets/tabs";
import MainLayout from "../layouts/main";

const History = () => {
    return (
        <MainLayout title="Bet History">
            <Box
                sx={{
                    background: "white",
                    width: "949px",
                    padding: "5px",
                }}
            >
                <Typography variant="h6" sx={{ m: 2 }}>
                    Bet History
                </Typography>
                <Divider />
                <Box>
                    <LabTabs />
                </Box>
            </Box>
        </MainLayout>
    );
};

export default History;
