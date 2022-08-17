const HandleChange = (props: number, props2: number, info: any, info2: boolean, info3: any): void => {
    //石を置けるかどうかの判定
    let changeCell: any[] = []
    let forChangeCell: any[] = []
    const column = Number(props)
    const row = Number(props2)
    let diagonalCounter: any = 0

    function cellChecker() {
        if (info.isWhite === true) {
            let stringed: string
            //下がひっくり返るか
            for (let i = column ; i < 8 ; i++) {
                forChangeCell.push(info.squares[i][row])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1; i++) {
                    // changeCell.push(info.squares[Number(props) + i][props2])
                    changeCell.push(column + i + " " + row)
                }
            }
            forChangeCell = []
            //右がひっくり返るか
            for (let i = props2 ; i < 8 ; i++) {
                forChangeCell.push(info.squares[column][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1; i++) {
                    changeCell.push(props + " " + (row + i))
                }
            }
            forChangeCell = []
            //上がひっくり返るか
            for (let i = column ; i > -1 ; i--) {
                forChangeCell.push(info.squares[i][row])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column - i) + " " + row)
                }
            }
            forChangeCell = []
            //左がひっくり返るか
            for (let i = row ; i > -1 ; i--) {
                forChangeCell.push(info.squares[column][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push(column + " " + (row - i))
                }
            }
            forChangeCell = []
            //右下がひっくり返るか
            if (7 - column < 7 - row) {
                diagonalCounter = 7 - column + 1
            } else if (7 - column > 7 - row) {
                diagonalCounter = 7 - row + 1
            } else {
                diagonalCounter = 7 - row + 1
            }
            for (let i = 0 ; i < diagonalCounter ; i++) {
                forChangeCell.push(info.squares[column + i][row + i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column + i) + " " + (row + i))
                }
            }
            forChangeCell = []
            //左下がひっくり返るか
            if (7 - column < row) {
                diagonalCounter = 7 - column + 1
            } else if (7 - column > row) {
                diagonalCounter = row + 1
            } else {
                diagonalCounter = row + 1
            }
            for (let i = 0 ; i < diagonalCounter ; i++) {
                forChangeCell.push(info.squares[column + i][row - i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column + i) + " " + (row - i))
                }
            }
            forChangeCell = []
            //左上がひっくり返るか
            if (column < row) {
                diagonalCounter = column + 1
            } else if (column > row) {
                diagonalCounter = row + 1
            } else {
                diagonalCounter = row + 1
            }
            for (let i = 0 ; i < diagonalCounter ; i++) {
                forChangeCell.push(info.squares[column - i][row - i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column - i) + " " + (row - i))
                }
            }
            forChangeCell = []
            //右上がひっくり返るか
            if (column < 7 - row) {
                diagonalCounter = column + 1
            } else if (column > 7 - row) {
                diagonalCounter = 7 - row + 1
            } else {
                diagonalCounter = 7 - row + 1
            }
            for (let i = 0 ; i < diagonalCounter ; i++) {
                forChangeCell.push(info.squares[column - i][row + i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column - i) + " " + (row + i))
                }
            }
            forChangeCell = []
            console.log(changeCell)
        } else {
            console.log("black")
        }
    }
    cellChecker()
    

    // if (info.isWhite === true) {
    //     let down = []
    //     let stringed: string
    //     for (let i = props ; i < 8 ; i++) {
    //         down.push(info.squares[i][props2])
    //     }
    //     stringed = down.join("")
    //     if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
    //         for (let i = 0 ; i < stringed.indexOf("BW") ; i++) {
    //             changeCell.push(info.squares[Number(props) - i + 1][props2])
    //         }
    //     }
    //     console.log(down)
    //     console.log(changeCell)
    // } else {
    //     console.log("black")
    // }


    // let count: number = 0;
    //     let up: any[] = new Array(props + 1);
    //     let stringed: string;
    //     let isUp: boolean = true;

    // let down: any[] = new Array(8 - props);
    //     let isDown: boolean = true;
    //     for (let i = props ; i < 8 ; i ++) {
    //         if (info.squares[i][props2] !== !info2) {
    //             down[count] = info.squares[i][props2];
    //         }
    //         count++;
    //     }
    //     console.log(down)
}
export default HandleChange;


