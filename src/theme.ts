import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
        },
    },
    spacing: [0, 1, 2, 4, 8],
})

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#7c955d",
//     },
//     secondary: {
//         main: "#eeeed5"
//     },
//   },
//   breakpoints: {
//     values: {
//         xs: 0,
//         sm: 500,
//         md: 900,
//         lg: 1200,
//         xl: 1530,
//     }
//   },
// });

export default theme;