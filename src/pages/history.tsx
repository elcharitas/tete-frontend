import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import { teteBlue } from "../api/providers/theme/colors";
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
                {/* <Divider /> */}
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box sx={{display:'flex', alignItems:"center", cursor:'pointer', color:teteBlue}}>
                        <ArrowLeft/>
                        <span>Previous</span>
                    </Box>
                    <Box sx={{display:'flex', alignItems:"center", cursor:'pointer', color:teteBlue}}>
                        <span>Next</span>
                        <ArrowRight />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default History;
