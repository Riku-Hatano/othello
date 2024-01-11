import { Grid } from "@mui/material"

export const BoardCell = (props: any) => {
    // switch(props.id3) {
    //     case "B":
    //         break;
    //     case "W":
    //         break;
    //     case null:
    //         break;
    //     default:
    // }
    return (
        <Grid item>
            {props.info.squares[props.id][props.id2]}
        </Grid>
    )
}