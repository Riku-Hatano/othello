import React from "react"
import Squares from "./Squares";
import "./App.css";
import HandleChange from "./HandleChange";

type Props = {
}
type State = {
    squares: any
    isWhite: boolean
}

class Board extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            squares: [
                [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", "W", "B", " ", " ", " "],
                [" ", " ", " ", "B", "W", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " ", " "],
                [" ", " ", " ", " ", " ", " ", " ", " ", " "]
                
            ],
            isWhite: true,
        }
        // this.HandleChange = this.HandleChange.bind(this);
    }
    // handleChange(props: number, props2: number): void {
    //     //以下同じマスのクリック回避
    //     if (this.state.squares[props][props2] === "W" || this.state.squares[props][props2] === "B") {
    //         // alert("this is not allowed by: " + this.state.squares[props][props2]);
    //         return;
    //     }

    //     //以下上方向のマス返し
    //     let count: number = 0;
    //     let up: any[] = new Array(props + 1);
    //     let stringed: string;
    //     let isUp: boolean = true;

    //     for (let i = props ; i >= 0 ; i --) {
    //         if (this.state.squares[i][props2] !== !this.state.isWhite) {
    //             up[count] = this.state.squares[i][props2];
    //         }
    //         count++;
    //     }
    //     count = 0;
    //     console.log("up: " + up);

    //     stringed = up.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isUp = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isUp = false;
    //                     console.log("done")
    //                 }
    //             }
    //             if (isUp === true) {
    //                 console.log(stringed.indexOf("BW"));
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     console.log(up.indexOf("BW"))
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][props2] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isUp = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isUp = false;
    //                 }
    //             }
    //             if (isUp === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][props2] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }

    //     //以下下方向のマス返し
    //     let down: any[] = new Array(8 - props);
    //     let isDown: boolean = true;
    //     for (let i = props ; i < 8 ; i ++) {
    //         if (this.state.squares[i][props2] !== !this.state.isWhite) {
    //             down[count] = this.state.squares[i][props2];
    //         }
    //         count++;
    //     }
    //     count = 0;
    //     console.log("down: " + down);

    //     stringed = down.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isDown = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isDown = false;
    //                 }
    //             }
    //             if (isDown === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][props2] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isDown = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isDown = false;
    //                 }
    //             }
    //             if (isDown === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][props2] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
        
    //     //以下右方向のマス返し
    //     let right: any[] = new Array(8 - props2);
    //     let isRight: boolean = true;
    //     for (let i = props2 ; i < 8 ; i ++) {
    //         if (this.state.squares[props][i] !== !this.state.isWhite) {
    //             right[count] = this.state.squares[props][i];
    //         }
    //         count++;
    //     }
    //     count = 0;
    //     console.log("rigtht: " + right);

    //     stringed = right.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     console.log("false")
    //                     isRight = false;
    //                 }
    //             }
    //             if (isRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[props][Number(props2) + i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isRight = false;
    //                 }
    //             }
    //             if (isRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[props][Number(props2) + i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
    
    //     //以下左方向のマス返し
    //     let left: any[] = new Array(props2 + 1);
    //     let isLeft: boolean = true;
    //     for (let i = props2 ; i >= 0 ; i --) {
    //         if (this.state.squares[props][i] !== !this.state.isWhite) {
    //             left[count] = this.state.squares[props][i];
    //         }
    //         count++;
    //     }
    //     count = 0;
    //     console.log("left: " + left);

    //     stringed = left.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isLeft = false;
    //                 }
    //             }
    //             if (isLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[props][Number(props2) - i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isLeft = false;
    //                 }
    //             }
    //             if (isLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[props][Number(props2) - i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
        
    //     //以下右上方向マス返し
    //     let searcher: number = 0;
    //     let isUpRight: boolean = true;
        
    //     if (props < 7 - props2) {
    //         searcher = Number(props) + 1
    //     } else if (props > 7 - props2) {
    //         searcher = 7 - Number(props2) + 1;
    //     } else {
    //         searcher = 7 - Number(props2) + 1;
    //     }
    //     let upRight: any[] = new Array(searcher);
    //     for (let i = searcher ; i > 0 ; i --) {
    //         if (this.state.squares[Number(props) - count][Number(props2) + count] !== !this.state.isWhite) {
    //             upRight[count] = this.state.squares[Number(props) - count][Number(props2) + count];
    //             // console.log(this.state.squares[Number(props) - count][Number(props2) + count])
    //         }
    //         count++;
    //     }
    //     count = 0;
    //     console.log("upRight: " + upRight);

    //     stringed = upRight.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isUpRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isUpRight = false;
    //                 }
    //             }
    //             if (isUpRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][Number(props2) + i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isUpRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isUpRight = false;
    //                 }
    //             }
    //             if (isUpRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][Number(props2) + i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
        
    //     //以下右下方向のマス返し
    //     searcher = 0;
    //     let isBottomRight: boolean = true;
    //     if (7 - props < 7 - props2) {
    //         searcher = 7 - Number(props) + 1;
    //     } else if (7 - props > 7 - props2) {
    //         searcher = 7 - Number(props2) + 1;
    //     } else {
    //         searcher = 7 - Number(props2) + 1;
    //     }
    //     let bottomRight: any[] = new Array(searcher);
    //     for (let i = searcher ; i > 0 ; i --) {
    //        if (this.state.squares[Number(props) + count][Number(props2) + count] !== !this.state.isWhite) {
    //            bottomRight[count] = this.state.squares[Number(props) + count][Number(props2) + count];
    //        }
    //        count++;
    //     }
    //     count = 0;
    //     console.log("bottomRight: " + bottomRight);

    //     stringed = bottomRight.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isBottomRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isBottomRight = false;
    //                 }
    //             }
    //             if (isBottomRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][Number(props2) + i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isBottomRight = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isBottomRight = false;
    //                 }
    //             }
    //             if (isBottomRight === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][Number(props2) + i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
        
    //     //以下左下方向のマス返し
    //     searcher = 0;
    //     let isBottomLeft: boolean = true;
    //     if (7 - props < props2) {
    //         searcher = 7 - Number(props) + 1;
    //     } else if (7 - props > props2) {
    //         searcher = Number(props2) + 1;
    //     } else {
    //         searcher = Number(props2) + 1;
    //     }
    //     let bottomLeft: any[] = new Array(searcher);
    //     for (let i = searcher ; i > 0 ; i --) {
    //        if (this.state.squares[Number(props) + count][Number(props2) - count] !== !this.state.isWhite) {
    //            bottomLeft[count] = this.state.squares[Number(props) + count][Number(props2) - count];
    //        }
    //        count++;
    //     }
    //     count = 0;
    //     console.log("bottomLeft: " + bottomLeft);

    //     stringed = bottomLeft.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isBottomLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isBottomLeft = false;
    //                 }
    //             }
    //             if (isBottomLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][Number(props2) - i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isBottomLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isBottomLeft = false;
    //                 }
    //             }
    //             if (isBottomLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) + i][Number(props2) - i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
        
    //     //以下左上方向のマス返し
    //     searcher = 0;
    //     let isUpLeft: boolean = true;
    //     if (props < props2) {
    //         searcher = Number(props) + 1;
    //     } else if (props > props2) {
    //         searcher = Number(props2) + 1;
    //     } else {
    //         searcher = Number(props2) + 1;
    //     }
    //     let upLeft: any[] = new Array(searcher);
    //     for (let i = searcher ; i > 0 ; i --) {
    //        if (this.state.squares[Number(props) - count][Number(props2) - count] !== !this.state.isWhite) {
    //            upLeft[count] = this.state.squares[Number(props) - count][Number(props2) - count];
    //        }
    //        count++;
    //     }
    //     count = 0;
    //     console.log("upLeft: " + upLeft);

    //     stringed = upLeft.join("");
        
    //     switch (this.state.isWhite) {
    //         case true:
    //             if (stringed.indexOf("BW") === -1) {
    //                 isUpLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                 if (stringed[i] !== "B") {
    //                     isUpLeft = false;
    //                 }
    //             }
    //             if (isUpLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][Number(props2) - i] = "W";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //             break;
    //         case false:
    //             if (stringed.indexOf("WB") === -1) {
    //                 isUpLeft = false;
    //             }
    //             for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                 if (stringed[i] !== "W") {
    //                     isUpLeft = false;
    //                 }
    //             }
    //             if (isUpLeft === true) {
    //                 for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
    //                     const allBoard = this.state.squares.slice(); 
    //                     allBoard[Number(props) - i][Number(props2) - i] = "B";
    //                     this.setState({
    //                         squares: allBoard
    //                     })
    //                 }
    //             }
    //     }
    //     if (isRight === false && isLeft === false && isUp === false && isDown === false && isUpRight === false && isBottomRight === false && isUpLeft === false && isBottomLeft === false) {
    //         isRight = true;
    //         isLeft = true;
    //         isDown = true;
    //         isUp = true;
    //         isBottomRight = true;
    //         isUpRight = true;
    //         isBottomLeft = true;
    //         isUpLeft = true;
    //         return;
    //     } 
    //     isRight = true;
    //     isLeft = true;
    //     isDown = true;
    //     isUp = true;
    //     isBottomRight = true;
    //     isUpRight = true;
    //     isBottomLeft = true;
    //     isUpLeft = true;


    //     const all = this.state.squares.slice();
    //     all[props][props2] = this.state.isWhite ? "W" : "B"
    //     this.setState({
    //         squares: all,
    //         isWhite: !this.state.isWhite
    //     })
    // }

    squareMaker(props: number, props2: number, props3: any): any {
        return(
            <Squares
            id={props}
            id2={props2}
            info={this.state}
            info2={this.state.isWhite}
            info3={this}
            onClick={HandleChange}
            />
        )
    }
    render() {
        return(
            <div>
                <div className="squareParent">
                    {this.squareMaker(0, 0, this.state.squares[0][0])}
                    {this.squareMaker(0, 1, this.state.squares[0][1])}
                    {this.squareMaker(0, 2, this.state.squares[0][2])}
                    {this.squareMaker(0, 3, this.state.squares[0][3])}
                    {this.squareMaker(0, 4, this.state.squares[0][4])}
                    {this.squareMaker(0, 5, this.state.squares[0][5])}
                    {this.squareMaker(0, 6, this.state.squares[0][6])}
                    {this.squareMaker(0, 7, this.state.squares[0][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(1, 0, this.state.squares[1][0])}
                    {this.squareMaker(1, 1, this.state.squares[1][1])}
                    {this.squareMaker(1, 2, this.state.squares[1][2])}
                    {this.squareMaker(1, 3, this.state.squares[1][3])}
                    {this.squareMaker(1, 4, this.state.squares[1][4])}
                    {this.squareMaker(1, 5, this.state.squares[1][5])}
                    {this.squareMaker(1, 6, this.state.squares[1][6])}
                    {this.squareMaker(1, 7, this.state.squares[1][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(2, 0, this.state.squares[2][0])}
                    {this.squareMaker(2, 1, this.state.squares[2][1])}
                    {this.squareMaker(2, 2, this.state.squares[2][2])}
                    {this.squareMaker(2, 3, this.state.squares[2][3])}
                    {this.squareMaker(2, 4, this.state.squares[2][4])}
                    {this.squareMaker(2, 5, this.state.squares[2][5])}
                    {this.squareMaker(2, 6, this.state.squares[2][6])}
                    {this.squareMaker(2, 7, this.state.squares[2][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(3, 0, this.state.squares[3][0])}
                    {this.squareMaker(3, 1, this.state.squares[3][1])}
                    {this.squareMaker(3, 2, this.state.squares[3][2])}
                    {this.squareMaker(3, 3, this.state.squares[3][3])}
                    {this.squareMaker(3, 4, this.state.squares[3][4])}
                    {this.squareMaker(3, 5, this.state.squares[3][5])}
                    {this.squareMaker(3, 6, this.state.squares[3][6])}
                    {this.squareMaker(3, 7, this.state.squares[3][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(4, 0, this.state.squares[4][0])}
                    {this.squareMaker(4, 1, this.state.squares[4][1])}
                    {this.squareMaker(4, 2, this.state.squares[4][2])}
                    {this.squareMaker(4, 3, this.state.squares[4][3])}
                    {this.squareMaker(4, 4, this.state.squares[4][4])}
                    {this.squareMaker(4, 5, this.state.squares[4][5])}
                    {this.squareMaker(4, 6, this.state.squares[4][6])}
                    {this.squareMaker(4, 7, this.state.squares[4][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(5, 0, this.state.squares[5][0])}
                    {this.squareMaker(5, 1, this.state.squares[5][1])}
                    {this.squareMaker(5, 2, this.state.squares[5][2])}
                    {this.squareMaker(5, 3, this.state.squares[5][3])}
                    {this.squareMaker(5, 4, this.state.squares[5][4])}
                    {this.squareMaker(5, 5, this.state.squares[5][5])}
                    {this.squareMaker(5, 6, this.state.squares[5][6])}
                    {this.squareMaker(5, 7, this.state.squares[5][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(6, 0, this.state.squares[6][0])}
                    {this.squareMaker(6, 1, this.state.squares[6][1])}
                    {this.squareMaker(6, 2, this.state.squares[6][2])}
                    {this.squareMaker(6, 3, this.state.squares[6][3])}
                    {this.squareMaker(6, 4, this.state.squares[6][4])}
                    {this.squareMaker(6, 5, this.state.squares[6][5])}
                    {this.squareMaker(6, 6, this.state.squares[6][6])}
                    {this.squareMaker(6, 7, this.state.squares[6][7])}
                </div>
                <div className="squareParent">
                    {this.squareMaker(7, 0, this.state.squares[7][0])}
                    {this.squareMaker(7, 1, this.state.squares[7][1])}
                    {this.squareMaker(7, 2, this.state.squares[7][2])}
                    {this.squareMaker(7, 3, this.state.squares[7][3])}
                    {this.squareMaker(7, 4, this.state.squares[7][4])}
                    {this.squareMaker(7, 5, this.state.squares[7][5])}
                    {this.squareMaker(7, 6, this.state.squares[7][6])}
                    {this.squareMaker(7, 7, this.state.squares[7][7])}
                </div>
                <div>next turn: {this.state.isWhite ? "W" : "B"}</div>
            </div>
        )
    }
}


export default Board;

