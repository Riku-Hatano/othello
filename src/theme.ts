import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 800,
            laptop: 1000,
            desktop: 1200,
        }        
    }
})