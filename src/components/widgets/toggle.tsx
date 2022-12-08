import { Box, Divider, FormControlLabel, Switch } from "@mui/material";
import React from "react";

export default function Toggle() {
  
    return (
      <Box sx={{ height: 180 }}>
        <FormControlLabel
            label="Only Show Winning tickets"
          control={<Switch  />}
        />
        <Divider/>
      </Box>
    );
  }