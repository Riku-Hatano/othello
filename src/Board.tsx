import React from "react"
import Squares from "./Squares";
import "./App.css";
import HandleChange from "./HandleChange";
import { next, back } from "./Back"
import { switchToPubBlackMode, switchToPutWhiteMode, completeEdit } from "./EditBoard";
import { clearCells } from "./ClearCells";
import { boardSize, emptyBoard } from "./initial";

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
            <Squares
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
                <div className="body">
                    {
                        bs.map((row, idx) => {
                            return (
                                <div className="squareParent">
                                    {
                                        row.map((col) => {
                                            return (
                                                <div className="squareChild">
                                                    {this.squareMaker(idx, col, this.state.squares[idx][col])}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <button onClick={() => console.log(this.state)}>check</button>
                    <button onClick={() => clearCells(this)}>clear</button>
                    <button onClick={() => back(this)}>back</button>
                    <button onClick={() => switchToPubBlackMode(this)}>put black</button>
                    <button onClick={() => switchToPutWhiteMode(this)}>put white</button>
                    <button onClick={() => completeEdit(this)}>complete edit</button>
                </div>
                <p>next turn: {this.state.isWhite ? "white" : "black"}</p>
                <p>mode: {this.state.isEdit}</p>
            </React.Fragment>
        )
    }
}


export default Board;

