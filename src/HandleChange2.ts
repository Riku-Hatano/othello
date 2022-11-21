import { createNoSubstitutionTemplateLiteral, isStringTextContainingNode } from "typescript"
import { putBlack, putBlack2, putWhite2 } from "./EditBoard";

const HandleChange = (props: number, props2: number, info: any, info2: boolean, info3: any): void => {
    switch (info.isEdit) {
        case 0: cellChecker();
        break;
        case 1: putBlack2(props, props2, info3)
        break;
        case 2: putWhite2(props, props2, info3)
        break;
    }
    
    function cellChecker() {
        //石を置けるかどうかの判定
        let changeCell: any[] = []
        let forChangeCell: any[] = []
        const column = Number(props)
        const row = Number(props2)
        //普通にcolumnとrowがプロパゲートされた段階で文字列だからNumber()で数字に直す必要がある。
        //だからcolumn: nubmer = propsではエラーが出る。
        let diagonalCounter: any = 0
        let stringed: string
        //例外の処理
        if (info.squares[column][row] !== " ") {
            return
        }
        if (info.isWhite === true) {
            //下がひっくり返るか
            for (let i = column ; i < 8 ; i++) {
                forChangeCell.push(info.squares[i][row])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1; i++) {
                    changeCell.push(column + i + " " + row)
                }
            }
            forChangeCell = []
            //右がひっくり返るか
            for (let i = props2 ; i < 8 ; i++) {
                forChangeCell.push(info.squares[column][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
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
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1 && stringed.indexOf("B ") === -1 || stringed.indexOf("B ") > stringed.indexOf("W")) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1 ; i++) {
                    changeCell.push((column - i) + " " + (row + i))
                }
            }
            forChangeCell = []
        } else {
            //下がひっくり返るか
            for (let i = column ; i < 8 ; i++) {
                forChangeCell.push(info.squares[i][row])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1; i++) {
                    changeCell.push(column + i + " " + row)
                }
            }
            forChangeCell = []
            //右がひっくり返るか
            for (let i = props2 ; i < 8 ; i++) {
                forChangeCell.push(info.squares[column][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1; i++) {
                    changeCell.push(props + " " + (row + i))
                }
            }
            forChangeCell = []
            //上がひっくり返るか
            for (let i = column ; i > -1 ; i--) {
                forChangeCell.push(info.squares[i][row])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
                    changeCell.push((column - i) + " " + row)
                }
            }
            forChangeCell = []
            //左がひっくり返るか
            for (let i = row ; i > -1 ; i--) {
                forChangeCell.push(info.squares[column][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
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
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
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
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
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
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
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
            if (stringed.indexOf("WB") !== -1 && stringed.indexOf("W") === 1 && stringed.indexOf("W ") === -1 || stringed.indexOf("W ") > stringed.indexOf("B")) {
                for (let i = 1 ; i < stringed.indexOf("WB") + 1 ; i++) {
                    changeCell.push((column - i) + " " + (row + i))
                }
            }
            forChangeCell = []
        }


        //実際にマスを反転させる処理。changeCellに反転させるマスの番地が入っている。
        if (changeCell.length === 0) {
            return;
        }
        const newSquares = JSON.parse(JSON.stringify(info.squares))
        if (info.isWhite === true) {
            for (let i = 0 ; i < changeCell.length ; i++) {
                newSquares[changeCell[i][0]][changeCell[i][2]] = "W"
            } 
            newSquares[column][row] = "W"
        } else {
            for (let i = 0 ; i < changeCell.length ; i++) {
                newSquares[changeCell[i][0]][changeCell[i][2]] = "B"
            } 
            newSquares[column][row] = "B"
        }
        const history = info.history.slice()
        history.push(newSquares)
        const historyCount = info.historyCount + 1

        info3.setState({
            squares: newSquares,
            history: history,
            historyCount: historyCount,
            isWhite: !info2,
            isCleaned: false
        })
        
        changeCell = []
        console.log(history)
        console.log(historyCount)
    }
}
export default HandleChange;


