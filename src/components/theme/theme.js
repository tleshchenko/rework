import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
    palette: {
        primary: amber,
    },
};

const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                primary: amber,
                divider: amber[200],
                text: {
                    primary: grey[900],
                    secondary: grey[800],
                },
            }
            : {
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                    default: grey,
                    paper: deepOrange[900],
                },
                text: {
                    primary: "#fff",
                    secondary: grey[500],
                },
            }),
    },
});

export { theme, getDesignTokens };
