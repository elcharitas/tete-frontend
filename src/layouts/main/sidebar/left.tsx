import { Box } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-use";
import BalanceBar from "/src/components/widgets/balanceBar";

import {
	FootBallGames,
	PopularGames,
} from "/src/components/widgets/darwerLeft";

const LeftSidebar: FC = () => {
	const location = useLocation();
	return (
		<>
			<Box
				sx={
					location.pathname === "/" ? { display: "block" } : { display: "none" }
				}
			>
				<Box>
					<PopularGames title="Popular" />
				</Box>
				<Box>
					<FootBallGames title="Football" />
				</Box>
			</Box>
			<Box
				sx={
					location.pathname === "/live"
						? { display: "block" }
						: { display: "none" }
				}
			>
				<FootBallGames title="Football" />
			</Box>
			<Box
				sx={
					location.pathname === "/history"
						? { display: "block" }
						: { display: "none" }
				}
			>
				<BalanceBar />
			</Box>
			<Box
				sx={
					location.pathname === "/withdrawal"
						? { display: "block" }
						: { display: "none" }
				}
			>
				<BalanceBar />
			</Box>
		</>
	);
};

export default LeftSidebar;
