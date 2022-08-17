const HandleChange = (props: number, props2: number, info: any, info2: boolean, info3: any): void => {
    //石を置けるかどうかの判定
    let changeCell: any[] = []
    let forChangeCell: any[] = []
    const column = Number(props)
    const row = Number(props2)

    function cellChecker() {
        if (info.isWhite === true) {
            let stringed: string
            //下に置けるかどうか
            for (let i = props ; i < 8 ; i++) {
                forChangeCell.push(info.squares[i][props2])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1; i++) {
                    // changeCell.push(info.squares[Number(props) + i][props2])
                    changeCell.push(column + i + " " + props2)
                }
            }
            console.log(forChangeCell)
            console.log(changeCell)
            forChangeCell = []
            //右に置けるかどうか
            for (let i = props2 ; i < 8 ; i++) {
                forChangeCell.push(info.squares[props][i])
            }
            stringed = forChangeCell.join("")
            if (stringed.indexOf("BW") !== -1 && stringed.indexOf("B") === 1) {
                for (let i = 1 ; i < stringed.indexOf("BW") + 1; i++) {
                    console.log("done")
                    console.log(props2 + i)
                    // changeCell.push(info.squares[Number(props) + i][props2])
                    changeCell.push(props + " " + (row + i))
                }
            }
            console.log(forChangeCell)
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


