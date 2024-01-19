import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 800,
            lg: 1000,
            xl: 1200,
            // mobile: 0,
            // tablet: 800,
            // laptop: 1000,
            // desktop: 1200,
        }        
    },
    spacing: [0, 1, 2, 4, 8],
})