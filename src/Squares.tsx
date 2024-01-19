import "./App.css";
import { Grid } from "@mui/material";

const cellSize = {
    xs: "30px",
    sm: "35px",
    md: "50px",
    lg: "60px",
}
const discSize = {
    xs: "28px",
    sm: "33px",
    md: "48px",
    lg: "58px",
}
const BaseCell = (props: any) => {
    const { children, onClick, id, id2, info, info2, info3} = props;
    return (
        <Grid
            item
            sx={{
                backgroundColor: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: {
                    xs: cellSize.xs,
                    sm: cellSize.sm,
                    md: cellSize.md,
                    lg: cellSize.lg
                },
                height: {
                    xs: cellSize.xs,
                    sm: cellSize.sm,
                    md: cellSize.md,
                    lg: cellSize.lg
                },
            }}
            onClick={() => onClick(id, id2, info, info2, info3)}
        >
            { children }
        </Grid>
    )
}
const Disk = ({ color }: any) => {
    return (
        <Grid
            sx={{
                backgroundColor: color,
                borderRadius: "50%",
                width: {
                    xs: discSize.xs,
                    sm: discSize.sm,
                    md: discSize.md,
                    lg: discSize.lg,
                },
                height: {
                    xs: discSize.xs,
                    sm: discSize.sm,
                    md: discSize.md,
                    lg: discSize.lg,
                },
            }}
        />
    )
}

//前のコード
export const Cell = (props: any) => {
   switch(props.id3) {
        case "W":
            return (
                <BaseCell {...props}>
                    <Disk color="white" />
                </BaseCell>
            )
        case "B":
            return (
                <BaseCell {...props}>
                    <Disk color="black" />
                </BaseCell>
            )
        default:
            return (
                <BaseCell {...props} />
            )
   }
}
// const Squares = (props: any) => {
//     //最初にコマが置かれているマス
//     if (props.id3 === "W") {
//         return (
//             <div 
//                 className="square inSquare squareColorWhite" 
//                 id={String(props.id) + String(props.id2)}
//                 onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}
//             >
//                 {props.info.squares[props.id][props.id2]}
//             </div>
//         )
//     } else if (props.id3 === "B") {
//         return (
//             <div 
//                 className="square inSquare squareColorBlack" 
//                 id={String(props.id) + String(props.id2)} 
//                 onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}
//             >
//                 {props.info.squares[props.id][props.id2]}
//             </div>
//         )
//     } else {
//         //コマが置かれていないマス
//         return(
//             <div 
//                 className="square inSquare" 
//                 id={String(props.id) + String(props.id2)} 
//                 onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}
//             >
//                 {props.info.squares[props.id][props.id2]}
//             </div>
//         )
//     }

// }

// export default Squares;