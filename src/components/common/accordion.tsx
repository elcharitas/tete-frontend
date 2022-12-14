import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type accordProps = {
	title: string;
};

const SimpleAccordion = ({ title }: accordProps) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Typography>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>null</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export { SimpleAccordion };
