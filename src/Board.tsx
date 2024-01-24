import React from "react"
import { Cell } from "./Squares";
import "./App.css";
import HandleChange from "./HandleChange";
import { back } from "./Back"
import { switchToPubBlackMode, switchToPutWhiteMode, completeEdit } from "./EditBoard";
import { clearCells } from "./ClearCells";
import { boardSize, emptyBoard } from "./initial";
import { ThemeButton } from "./components/Button";
import { Grid, Typography } from "@mui/material";
import theme from "./theme";

type Props = {
}
type State = {
    squares: any
    isWhite: boolean
    isEdit: "PLAY" | "EDIT_WHITE" | "EDIT_BLACK",
    isCleaned: boolean
    history: any
    historyIsWhite: any
    historyCount: any
}
const bs: number[][] = boardSize();
class Board extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            squares: [
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "W", "B", " ", " ", " "],
                [" ", " ", " ", "B", "W", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " "]  
            ],
            history: [
                [
                    [" ", " ", " ", " ", " ", " ", " ", " "],
                    [" ", " ", " ", " ", " ", " ", " ", " "],
                    [" ", " ", " ", " ", " ", " ", " ", " "],
                    [" ", " ", " ", "W", "B", " ", " ", " "],
                    [" ", " ", " ", "B", "W", " ", " ", " "],
                    [" ", " ", " ", " ", " ", " ", " ", " "],
                    [" ", " ", " ", " ", " ", " ", " ", " "],
                    [" ", " ", " ", " ", " ", " ", " ", " "]  
                ]
            ],
            historyIsWhite: true,
            historyCount: 0,
            isWhite: true,
            isEdit: "PLAY",
            isCleaned: false
        }
    }
    squareMaker(props: number, props2: number, props3: any): any {
        return(
            <Cell
                id={props}
                id2={props2}
                id3={props3}
                info={this.state}
                info2={this.state.isWhite}
                info3={this}
                onClick={HandleChange}
            />
        )
    }
    render() {
        return(
            <React.Fragment>
                <Grid
                    container
                    spacing={theme.spacing(1)}
                >
                    {
                        bs.map((row, idx) => {
                            return (
                                <Grid container item sx={{backgroundColor: "black", columnGap: theme.spacing(1)}}>
                                    {
                                        row.map((col) => {
                                            return (
                                                this.squareMaker(idx, col, this.state.squares[idx][col])
                                            )
                                        })
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
                <Grid>
                    <ThemeButton onClick={() => console.log(this.state)}>check</ThemeButton>
                    <ThemeButton onClick={() => clearCells(this)}>clear</ThemeButton>
                    <ThemeButton onClick={() => back(this)}>back</ThemeButton>
                    <ThemeButton onClick={() => switchToPubBlackMode(this)}>put black</ThemeButton>
                    <ThemeButton onClick={() => switchToPutWhiteMode(this)}>put white</ThemeButton>
                    <ThemeButton onClick={() => completeEdit(this)}>complete edit</ThemeButton>
                </Grid>
                <Typography>next turn: {this.state.isWhite ? "white" : "black"}</Typography>
                <Typography>mode: {this.state.isEdit}</Typography>
            </React.Fragment>
        )
    }
}


export default Board;

