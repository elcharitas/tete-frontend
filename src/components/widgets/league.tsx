import { FC } from "react";
import { ArrowDownward, StackedBarChart } from "@mui/icons-material";
import { Accordion, Box, Typography } from "@mui/material";
import { Match } from "./match";

interface ILeague {
    title: string;
}
const League: FC<ILeague> = ({ title }) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr  1fr",
                    color: "grey",
                }}
            >
                <Typography
                    sx={{
                        marginLeft: "20px",
                        fontSize: "20px",
                    }}
                >
                    <ArrowDownward /> {title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                    }}
                >
                    <div>1</div>
                    <div>X</div>
                    <div>2</div>
                </Box>
            </Box>
            <Match />
        </Box>
    );
};

export { League };
