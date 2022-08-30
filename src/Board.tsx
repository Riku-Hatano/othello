import React from "react"
import Squares from "./Squares";
import "./App.css";
import HandleChange from "./HandleChange2";
import { next, back } from "./Store"
import { putBlack, putWhite, completeEdit } from "./EditBoard"
import { editableInputTypes } from "@testing-library/user-event/dist/utils";

type Props = {
}
type State = {
    squares: any
    isWhite: boolean
    history: any
    historyCount: any,
}


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
            historyCount: 0,
            isWhite: true,
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
            <div className="body">
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(0, 0, this.state.squares[0][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 1, this.state.squares[0][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 2, this.state.squares[0][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 3, this.state.squares[0][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 4, this.state.squares[0][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 5, this.state.squares[0][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 6, this.state.squares[0][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(0, 7, this.state.squares[0][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(1, 0, this.state.squares[1][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 1, this.state.squares[1][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 2, this.state.squares[1][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 3, this.state.squares[1][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 4, this.state.squares[1][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 5, this.state.squares[1][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 6, this.state.squares[1][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(1, 7, this.state.squares[1][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(2, 0, this.state.squares[2][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 1, this.state.squares[2][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 2, this.state.squares[2][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 3, this.state.squares[2][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 4, this.state.squares[2][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 5, this.state.squares[2][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 6, this.state.squares[2][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(2, 7, this.state.squares[2][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(3, 0, this.state.squares[3][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 1, this.state.squares[3][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 2, this.state.squares[3][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 3, this.state.squares[3][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 4, this.state.squares[3][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 5, this.state.squares[3][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 6, this.state.squares[3][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(3, 7, this.state.squares[3][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(4, 0, this.state.squares[4][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 1, this.state.squares[4][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 2, this.state.squares[4][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 3, this.state.squares[4][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 4, this.state.squares[4][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 5, this.state.squares[4][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 6, this.state.squares[4][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(4, 7, this.state.squares[4][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(5, 0, this.state.squares[5][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 1, this.state.squares[5][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 2, this.state.squares[5][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 3, this.state.squares[5][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 4, this.state.squares[5][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 5, this.state.squares[5][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 6, this.state.squares[5][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(5, 7, this.state.squares[5][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(6, 0, this.state.squares[6][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 1, this.state.squares[6][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 2, this.state.squares[6][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 3, this.state.squares[6][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 4, this.state.squares[6][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 5, this.state.squares[6][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 6, this.state.squares[6][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(6, 7, this.state.squares[6][7])}
                    </div>
                </div>
                <div className="squareParent">
                    <div className="squareChild">
                        {this.squareMaker(7, 0, this.state.squares[7][0])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 1, this.state.squares[7][1])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 2, this.state.squares[7][2])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 3, this.state.squares[7][3])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 4, this.state.squares[7][4])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 5, this.state.squares[7][5])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 6, this.state.squares[7][6])}
                    </div>
                    <div className="squareChild">
                        {this.squareMaker(7, 7, this.state.squares[7][7])}
                    </div>
                </div>
                <div>next turn: {this.state.isWhite ? "W" : "B"}</div>
                <button onClick={() => next(this)}>next</button>
                <button onClick={() => back(this)}>back</button>
                <button onClick={() => putBlack(this)}>putBlack</button>
                <button onClick={() => putWhite(this)}>putWhite</button>
                <button onClick={() => completeEdit(this)}>completeEdit</button>
            </div>
        )
    }
}


export default Board;

