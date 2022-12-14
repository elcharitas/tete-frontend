import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Divider, Typography } from "@mui/material";
import { bets } from "/src/api/data/bet-history";

export default function LabTabs() {
    const [value, setValue] = useState("1");

    const handleChange = (_: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="bet histories tab"
                    >
                        <Tab label="All Bets" value="1" />
                        <Tab label="Cashouts" value="2" />
                        <Tab label="Unsettled" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Divider />
                    {bets.map((bet) => (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>
                                    <Typography>Date</Typography>
                                    <Typography>{bet.date}</Typography>
                                </div>
                                <div>
                                    <Typography>Game</Typography>
                                    <Typography>{bet.game}</Typography>
                                </div>
                                <div>
                                    <Typography>Total Stake</Typography>
                                    <Typography>{bet.stake}</Typography>
                                </div>
                                <div>
                                    <Typography>Potential Winnings</Typography>
                                    <Typography>
                                        {bet.potentialWinnings}
                                    </Typography>
                                </div>
                                <Typography
                                    sx={{
                                        border: "2px solid",
                                        textAlign: "center",
                                        color: "common.white",
                                        width: "100px",
                                        margin: " auto 0",
                                        bgcolor:
                                            bet.status === "Running"
                                                ? "secondary.main"
                                                : "error.main",
                                    }}
                                >
                                    {bet.status}
                                </Typography>
                            </Box>
                            <Divider />
                        </>
                    ))}
                </TabPanel>
                <TabPanel value="2">No Bets Available</TabPanel>
                <TabPanel value="3">
                    {bets.map((bet) => {
                        if (bet.status === "Running") {
                            return (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <div>
                                            <Typography>Date</Typography>
                                            <Typography>{bet.date}</Typography>
                                        </div>
                                        <div>
                                            <Typography>Game</Typography>
                                            <Typography>{bet.game}</Typography>
                                        </div>
                                        <div>
                                            <Typography>Total Stake</Typography>
                                            <Typography>{bet.stake}</Typography>
                                        </div>
                                        <div>
                                            <Typography>
                                                Potential Winnings
                                            </Typography>
                                            <Typography>
                                                {bet.potentialWinnings}
                                            </Typography>
                                        </div>
                                        <Typography
                                            sx={{
                                                border: "2px solid",
                                                textAlign: "center",
                                                color: "common.white",
                                                width: "100px",
                                                margin: " auto 0",
                                                background: "secondary.main",
                                            }}
                                        >
                                            {bet.status}
                                        </Typography>
                                    </Box>
                                    <Divider />
                                </>
                            );
                        }
                        return null;
                    })}
                </TabPanel>
            </TabContext>
        </Box>
    );
}
