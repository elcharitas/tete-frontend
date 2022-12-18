import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { SimpleAccordion } from "../common";

type drawerPorps = {
	title: string;
};
const PopularGames = ({ title }: drawerPorps) => {
	return (
		<Box
			sx={{
				background: "white",
				height: "439px",
				width: "200px",
				borderRadius: "5px",
				m: 2,
			}}
		>
			<Typography variant="h6" sx={{ m: 2 }}>
				{title}
			</Typography>
			<SimpleAccordion title="Today's Game" />
			<SimpleAccordion title="Upcoming Games" />
			<SimpleAccordion title="English League (EPL)" />
			<SimpleAccordion title="Seria A" />
			<SimpleAccordion title="Laliga" />
			<SimpleAccordion title="Bundesliga" />
			<SimpleAccordion title="Ligue1" />
		</Box>
	);
};

const FootBallGames = ({ title }: drawerPorps) => {
	return (
		<Box
			sx={{
				background: "white",
				height: "1000px",
				width: "200px",
				borderRadius: "5px",
				m: 2,
			}}
		>
			<Typography variant="h6" sx={{ m: 2 }}>
				{title}
			</Typography>
			<SimpleAccordion title="Today's Game" />
			<SimpleAccordion title="Upcoming Games" />
			<SimpleAccordion title="English League (EPL)" />
			<SimpleAccordion title="Seria A" />
			<SimpleAccordion title="Laliga" />
			<SimpleAccordion title="Bundesliga" />
			<SimpleAccordion title="Ligue1" />
			<Box>
				<Typography sx={{ m: 3 }}>A-Z</Typography>
			</Box>
		</Box>
	);
};

export { PopularGames, FootBallGames };
