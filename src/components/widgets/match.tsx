import { Box } from "@mui/material";
import { Button } from "../common";

const Match = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "1.5fr  1fr",
                color: "grey",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    fontSize: "15px",
                    padding: "5px",
                }}
            >
                <div>21:00</div>
                <div>
                    <div>Chelsea</div>
                    <div>Man United</div>
                </div>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: "10px",
                    fontSize: "10px",
                }}
            >
                <Button variant="contained">1</Button>
                <Button variant="contained">2</Button>
                <Button variant="contained">3</Button>
            </Box>
        </Box>
    );
};

export { Match };
