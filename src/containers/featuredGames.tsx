import { Typography, Box } from "@mui/material";
import { teteWhite } from "../api/providers/theme/colors";
import Games from "../components/widgets/games";

type IFeatured = {
	title: string;
};

const FeaturedGames = ({ title }: IFeatured) => {
	return (
		<Box
			sx={{
				background: teteWhite,
				width: "700px",
				height: "240px",
				borderRadius: "10px 10px 0 0 ",
			}}
		>
			<Typography variant="h6" sx={{ m: 2 }}>
				{title}
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "space-around" }}>
				<Games />
				<Games />
				<Games />
			</Box>
		</Box>
	);
};

export default FeaturedGames;
