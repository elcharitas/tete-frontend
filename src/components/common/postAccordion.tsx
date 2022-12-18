import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useLocation } from "react-use";

type accordProps = {
	title: string;
	path: string;
};

const PostAccordion = ({ title, path }: accordProps) => {
	const location = useLocation();
	return (
		<Accordion
			sx={
				location.pathname === path
					? { background: "#0E2EA0", color: "white" }
					: { background: "initial" }
			}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography onClick={() => {}}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>null</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default PostAccordion;
