import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyle } from '../styles/homeStyles';

export default function SimpleAccordion() {
    const classes = useStyle()
  return (
    <div>
      <Accordion className={classes.paper}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           31/1/22
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
  );
}
