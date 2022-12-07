import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SimpleAccordion = () => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Date</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>31/1/22</Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export { SimpleAccordion };
