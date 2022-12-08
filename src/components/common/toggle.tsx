import { FC } from "react";
import { Box, Divider, FormControlLabel, Switch } from "@mui/material";

const Toggle: FC = () => {
    return (
        <Box sx={{ height: 180 }}>
            <FormControlLabel
                label="Only Show Winning tickets"
                control={<Switch />}
            />
            <Divider />
        </Box>
    );
};

export { Toggle };

