import { Box, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { teteWhite } from "../api/providers/theme/colors";
import { Button } from "../components/common";
import MainLayout from "../layouts/main";

const Withdrawal = () => {
	const [amount, setAmount] = useState("");
	return (
		<MainLayout title="withrawal">
			<Box
				sx={{
					background: teteWhite,
					width: "800px",
					padding: "15px",
					my: 1,
					height: "324px",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						m: 1,
					}}
				>
					Withdrawal
				</Typography>
				<Divider />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						my: 7,
					}}
				>
					<Typography variant="h6" sx={{ mx: 1 }}>
						Amount:
					</Typography>
					<TextField
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						label="USDT"
						fullWidth
					/>
				</Box>
				<Box sx={{ textAlign: "center", my: 10 }}>
					{amount === "" ? null : (
						<Button variant="contained" sx={{ width: "50%" }}>
							Withdral
						</Button>
					)}
				</Box>
			</Box>
		</MainLayout>
	);
};

export default Withdrawal;
