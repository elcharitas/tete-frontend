import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography, TextField } from "@mui/material";
import { Button } from "../common";

const BetSliptabs = () => {
	const [value, setValue] = useState("1");

	const handleChange = (_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				width: "100%",
				typography: "body1",
				background: "white",
				height: "250px",
				borderRadius: "5px",
			}}
		>
			<TabContext value={value}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: "divider",
					}}
				>
					<TabList onChange={handleChange} aria-label="bet histories tab">
						<Tab label="Bet Slip" value="1" />
						<Tab label="My Bets (0)" value="2" />
					</TabList>
				</Box>
				<TabPanel value="1">
					<Box sx={{ textAlign: "center" }}>
						<Typography variant="caption">
							please insert a booking code
						</Typography>
						<TextField label="Booking Code" sx={{ my: 1 }} fullWidth />
						<Button
							variant="contained"
							color="inherit"
							sx={{ width: "200px", my: 1 }}
						>
							Load
						</Button>
					</Box>
				</TabPanel>
				<TabPanel value="2">No Bets Available</TabPanel>
			</TabContext>
		</Box>
	);
};

export default BetSliptabs;
