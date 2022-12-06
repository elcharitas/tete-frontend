import { FC } from "react";
import {
    Button as MUIButton,
    ButtonProps,
    CircularProgress,
} from "@mui/material";

interface IButton extends ButtonProps {
    isLoading?: boolean;
}
const Button: FC<IButton> = ({
    isLoading,
    children,
    sx,
    ...props
}: IButton) => (
    <MUIButton
        sx={{
            borderRadius: "52px",
            textTransform: "capitalize",
            fontWeight: "bold",
            ...sx,
        }}
        {...props}
    >
        {isLoading && <CircularProgress size="20px" sx={{ mr: 2 }} />}
        {children}
    </MUIButton>
);

Button.defaultProps = {
    isLoading: false,
};

export { Button };
