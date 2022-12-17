import { Box } from "@mui/material";
import { useLocation } from "react-use";
import BetSliptabs from "./betSliptabs";

const DrawerRight = () => {
	const location = useLocation();
	return (
		<Box
			sx={
				location.pathname === "/live" || location.pathname === "/"
					? {
							background: "#2A3149",
							width: "290px",
							borderRadius: "5px",
							m: 2,
							p: 1,
					  }
					: { display: "none" }
			}
		>
			<BetSliptabs />
		</Box>
	);
};

export default DrawerRight;
