export const putBlack = (props: any) => {
    console.log(props.state)
    props.setState({
        isEdit: 1
    })
}

export const putBlack2 = (cell1: number, cell2: number, props: any) => {
    const board = props.state.squares
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

export const putWhite = (props: any) => {
    props.setState({
        isEdit: 2
    })
}

export const putWhite2 = (cell1: number, cell2: number, props: any) => {
    const board = props.state.squares
    let history = props.state.history
    let historyCount: number = props.state.historyCount

    board[cell1][cell2] = "W"
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


export const completeEdit = (props: any) => {
    props.setState({
        isEdit: 0
    })
}

