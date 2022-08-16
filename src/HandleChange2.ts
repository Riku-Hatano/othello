const HandleChange = (props: number, props2: number, info: any, info2: boolean, info3: any): void => {
    //以下同じマスのクリック回避
    if (info.squares[props][props2] === "W" || info.squares[props][props2] === "B") {
        // alert("info is not allowed by: " + info[props][props2]);
        return;
    }
    //以下上方向のマス返し.
    let count: number = 0;
    let up: any[] = new Array(props + 1);
    let stringed: string;
    let isUp: boolean = true;

    for (let i = props ; i >= 0 ; i --) {
        if (info.squares[i][props2] !== !info2) {
            up[count] = info.squares[i][props2];
        }
        count++;
    }
    count = 0;
    // console.log("up: " + up);

    stringed = up.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isUp = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isUp = false;
                    console.log("done")
                }
            }
            if (isUp === true) {
                console.log(stringed.indexOf("BW"));
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    console.log(up.indexOf("BW"))
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][props2] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isUp = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isUp = false;
                }
            }
            if (isUp === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][props2] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }

    //以下下方向のマス返し
    let down: any[] = new Array(8 - props);
    let isDown: boolean = true;
    for (let i = props ; i < 8 ; i ++) {
        if (info.squares[i][props2] !== !info2) {
            down[count] = info.squares[i][props2];
        }
        count++;
    }
    count = 0;
    // console.log("down: " + down);

    stringed = down.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isDown = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isDown = false;
                }
            }
            if (isDown === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][props2] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isDown = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isDown = false;
                }
            }
            if (isDown === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][props2] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    
    //以下右方向のマス返し
    let right: any[] = new Array(8 - props2);
    let isRight: boolean = true;
    for (let i = props2 ; i < 8 ; i ++) {
        if (info.squares[props][i] !== !info2) {
            right[count] = info.squares[props][i];
        }
        count++;
    }
    count = 0;
    // console.log("rigtht: " + right);

    stringed = right.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    console.log("false")
                    isRight = false;
                }
            }
            if (isRight === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[props][Number(props2) + i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isRight = false;
                }
            }
            if (isRight === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[props][Number(props2) + i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }

    //以下左方向のマス返し
    let left: any[] = new Array(props2 + 1);
    let isLeft: boolean = true;
    for (let i = props2 ; i >= 0 ; i --) {
        if (info.squares[props][i] !== !info2) {
            left[count] = info.squares[props][i];
        }
        count++;
    }
    count = 0;
    // console.log("left: " + left);

    stringed = left.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isLeft = false;
                }
            }
            if (isLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[props][Number(props2) - i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isLeft = false;
                }
            }
            if (isLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[props][Number(props2) - i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    
    //以下右上方向マス返し
    let searcher: number = 0;
    let isUpRight: boolean = true;
    
    if (props < 7 - props2) {
        searcher = Number(props) + 1
    } else if (props > 7 - props2) {
        searcher = 7 - Number(props2) + 1;
    } else {
        searcher = 7 - Number(props2) + 1;
    }
    let upRight: any[] = new Array(searcher);
    for (let i = searcher ; i > 0 ; i --) {
        if (info.squares[Number(props) - count][Number(props2) + count] !== !info2) {
            upRight[count] = info.squares[Number(props) - count][Number(props2) + count];
            // console.log(info[Number(props) - count][Number(props2) + count])
        }
        count++;
    }
    count = 0;
    // console.log("upRight: " + upRight);

    stringed = upRight.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isUpRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isUpRight = false;
                }
            }
            if (isUpRight === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][Number(props2) + i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isUpRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isUpRight = false;
                }
            }
            if (isUpRight === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][Number(props2) + i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    
    //以下右下方向のマス返し
    searcher = 0;
    let isBottomRight: boolean = true;
    if (7 - props < 7 - props2) {
        searcher = 7 - Number(props) + 1;
    } else if (7 - props > 7 - props2) {
        searcher = 7 - Number(props2) + 1;
    } else {
        searcher = 7 - Number(props2) + 1;
    }
    let bottomRight: any[] = new Array(searcher);
    for (let i = searcher ; i > 0 ; i --) {
       if (info.squares[Number(props) + count][Number(props2) + count] !== !info2) {
           bottomRight[count] = info.squares[Number(props) + count][Number(props2) + count];
       }
       count++;
    }
    count = 0;
    // console.log("bottomRight: " + bottomRight);

    stringed = bottomRight.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isBottomRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isBottomRight = false;
                }
            }
            if (isBottomRight === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][Number(props2) + i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isBottomRight = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isBottomRight = false;
                }
            }
            if (isBottomRight === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][Number(props2) + i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    
    //以下左下方向のマス返し
    searcher = 0;
    let isBottomLeft: boolean = true;
    if (7 - props < props2) {
        searcher = 7 - Number(props) + 1;
    } else if (7 - props > props2) {
        searcher = Number(props2) + 1;
    } else {
        searcher = Number(props2) + 1;
    }
    let bottomLeft: any[] = new Array(searcher);
    for (let i = searcher ; i > 0 ; i --) {
       if (info.squares[Number(props) + count][Number(props2) - count] !== !info2) {
           bottomLeft[count] = info.squares[Number(props) + count][Number(props2) - count];
       }
       count++;
    }
    count = 0;
    // console.log("bottomLeft: " + bottomLeft);

    stringed = bottomLeft.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isBottomLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isBottomLeft = false;
                }
            }
            if (isBottomLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][Number(props2) - i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isBottomLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isBottomLeft = false;
                }
            }
            if (isBottomLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) + i][Number(props2) - i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    
    //以下左上方向のマス返し
    searcher = 0;
    let isUpLeft: boolean = true;
    if (props < props2) {
        searcher = Number(props) + 1;
    } else if (props > props2) {
        searcher = Number(props2) + 1;
    } else {
        searcher = Number(props2) + 1;
    }
    let upLeft: any[] = new Array(searcher);
    for (let i = searcher ; i > 0 ; i --) {
       if (info.squares[Number(props) - count][Number(props2) - count] !== !info2) {
           upLeft[count] = info.squares[Number(props) - count][Number(props2) - count];
       }
       count++;
    }
    count = 0;
    // console.log("upLeft: " + upLeft);

    stringed = upLeft.join("");
    
    switch (info2) {
        case true:
            if (stringed.indexOf("BW") === -1) {
                isUpLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                if (stringed[i] !== "B") {
                    isUpLeft = false;
                }
            }
            if (isUpLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][Number(props2) - i] = "W";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
            break;
        case false:
            if (stringed.indexOf("WB") === -1) {
                isUpLeft = false;
            }
            for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                if (stringed[i] !== "W") {
                    isUpLeft = false;
                }
            }
            if (isUpLeft === true) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i ++) {
                    const allBoard = info.squares.slice(); 
                    allBoard[Number(props) - i][Number(props2) - i] = "B";
                    info3.setState({
                        squares: allBoard
                    })
                }
            }
    }
    if (isRight === false && isLeft === false && isUp === false && isDown === false && isUpRight === false && isBottomRight === false && isUpLeft === false && isBottomLeft === false) {
        isRight = true;
        isLeft = true;
        isDown = true;
        isUp = true;
        isBottomRight = true;
        isUpRight = true;
        isBottomLeft = true;
        isUpLeft = true;
        return;
    } 
    isRight = true;
    isLeft = true;
    isDown = true;
    isUp = true;
    isBottomRight = true;
    isUpRight = true;
    isBottomLeft = true;
    isUpLeft = true;

   
    const all = info.squares.slice();
    all[props][props2] = info2 ? "W" : "B"

    const history = info.history
    console.log(all)
    console.log(history)
    history.push(all)
    console.log(history)
    const historyCount = info.historyCount + 1

    info3.setState({
        squares: all,
        isWhite: !info2,
        history: history,
        historyCount: historyCount
    })
    
    console.log(info.history)
    for (let i = 0 ; i < 8 ; i ++) {
        for (let j = 0 ; j < 8 ; j ++) {
            if (info.squares[i][j] === "W") {
                let changedCell = document.getElementById(String(i) + String(j))
                changedCell?.classList.remove("squareColorBlack")
                changedCell?.classList.add("squareColorWhite")
            } else if (info.squares[i][j] === "B") {
                let changedCell = document.getElementById(String(i) + String(j))
                changedCell?.classList.remove("squareColorWhite")
                changedCell?.classList.add("squareColorBlack")
                
            }
        }
    }
}

export default HandleChange;


