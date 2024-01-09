export const switchToPubBlackMode = (props: any) => {
    console.log("put black1")
    props.setState({
        isEdit: "EDIT_BLACK"
    })
}

export const putBlack = (cell1: number, cell2: number, props: any) => {
    if (props.state.squares[cell1][cell2] !== " ") {
        return
    }
    const board = JSON.parse(JSON.stringify(props.state.squares))
    let history = props.state.history
    let historyCount: number = props.state.historyCount

    board[cell1][cell2] = "B"
    historyCount = historyCount + 1;
    history.push(board)

    props.setState({
        squares: board,
        historyCount: historyCount,
        history: history
    })
    console.log(history)
    console.log(historyCount)
}

export const switchToPutWhiteMode = (props: any) => {
    props.setState({
        isEdit: "EDIT_WHITE"
    })
}

export const putWhite = (cell1: number, cell2: number, props: any) => {
    if (props.state.squares[cell1][cell2] !== " ") {
        return
    }
    const board = JSON.parse(JSON.stringify(props.state.squares))
    let history = props.state.history
    let historyCount: number = props.state.historyCount

    board[cell1][cell2] = "W"
    historyCount = historyCount + 1
    history.push(board)

    props.setState({
        squares: board,
        historyCount: historyCount,
        history: history
    })
    console.log(history)
    console.log(historyCount)
}


export const completeEdit = (props: any) => {
    props.setState({
        isEdit: "PLAY"
    })
}

