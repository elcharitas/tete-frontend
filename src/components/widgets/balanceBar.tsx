import { Box, Divider, Typography } from "@mui/material";
import { useLocation } from "react-use";
import PostAccordion from "../common/postAccordion";

const BalanceBar = () => {
	const location = useLocation();
	return (
		<Box
			sx={{
				background: "white",
				width: "300px",
				height: "222px",
				borderRadius: "5px",
				mx: 2,
				my: 1,
			}}
		>
			<Typography variant="h6" sx={{ mx: 2 }}>
				My Balance
			</Typography>
			<Divider>50 USDT</Divider>
			<PostAccordion title="Withdraw" path="/withdrawal" />
			<PostAccordion title="Bet History" path="/history" />
			<PostAccordion title="My Account Info" path="/account-info" />
		</Box>
	);
};

export default BalanceBar;
