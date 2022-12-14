import { Box } from "@mui/material";
import { FC } from "react";
import {
	FootBallGames,
	PopularGames,
} from "/src/components/widgets/darwerLeft";

const LeftSidebar: FC = () => {
	return (
		<Box>
			<Box>
				<PopularGames title="Popular" />
			</Box>
			<Box>
				<FootBallGames title="Football" />
			</Box>
		</Box>
	);
};

export default LeftSidebar;
