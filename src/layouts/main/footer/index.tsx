import {
	Copyright,
	EighteenUpRating,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ReactComponent as TeteSVG } from "/src/assets/svg/tete.svg";

const Footer: FC = () => {
	return (
		<Box
			sx={{
				bordre: "white solid 2px",
				width: "100%",
				background: "white",
				p: 2,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Box>
					<Box
						sx={{
							color: "primary.main",
							position: "relative",
							right: "17px",
							top: "10px",
						}}
					>
						<TeteSVG height="55.2px" width="87.16px" />
					</Box>
					<Box>
						<Typography sx={{ fontWeight: "bold", fontSize: "40px", m: 0 }}>
							tete
						</Typography>
						<Typography variant="caption">
							Tete is a novel Lorem ipsum dolor sit amet.
						</Typography>
					</Box>
				</Box>
				<Box>
					<Typography variant="h5">How To Play</Typography>
					<Typography>FAQs</Typography>
					<Typography>Live Betting</Typography>
					<Typography>Games</Typography>
				</Box>
				<Box>
					<Typography variant="h5">About Us</Typography>
					<Typography>Terms & Conditions</Typography>
					<Typography>Responsible Gambling</Typography>
					<Typography>Privacy Policy</Typography>
					<Typography>Tete Chain</Typography>
				</Box>
				<Box>
					<Typography variant="h5">Follow Us</Typography>
					<Instagram />
					<Facebook />
					<Twitter />
					<LinkedIn />
				</Box>
			</Box>
			<Box sx={{ display: "flex", alignContent: "center", mt: 1 }}>
				<EighteenUpRating sx={{ color: "error.main" }} />
				<Typography variant="caption">
					Age 18 and above only to register or play at Tete. Please note betting
					is addictive and can be psychologically harmful.
				</Typography>
			</Box>
			<Box sx={{ display: "flex", alignContent: "center", mt: 1 }}>
				<Copyright />
				<Typography variant="caption">Tete 2022 All Right Reserved</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
