import React from "react"
import Squares from "./Squares";
import "./App.css";
import HandleChange from "./HandleChange";
import { next, back } from "./Back"
import { switchToPubBlackMode, switchToPutWhiteMode, completeEdit } from "./EditBoard";
import { clearCells } from "./ClearCells";

type Props = {
}
type State = {
    squares: any
    isWhite: boolean
    isEdit: number //0...編集モードではない、1...黒を自由におくモード、2...白を自由に置くモード
    isCleaned: boolean
    history: any
    historyIsWhite: any
    historyCount: any
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
            historyIsWhite: true,
            historyCount: 0,
            isWhite: true,
            isEdit: 0,
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
                {/* <button onClick={() => next(this)}>next</button> */}
                <button onClick={() => back(this)}>back</button>
                <button onClick={() => switchToPubBlackMode(this)}>putBlack</button>
                <button onClick={() => switchToPutWhiteMode(this)}>putWhite</button>
                <button onClick={() => completeEdit(this)}>completeEdit</button>
                <button onClick={() => clearCells(this)}>clearCells</button>
            </div>
            <button onClick={() => console.log(this.state)}>check</button>
            </React.Fragment>
        )
    }
}


export default Board;

