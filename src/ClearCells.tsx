export const clearCells = (props: any) => {
    if (props.state.isCleaned === true) {
        return
    }
    const empty = [
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " "]
    ]
    const history = props.state.history.slice()
    history.push(empty)
    props.state.historyCount = props.state.historyCount + 1
    props.setState({
        squares: empty,
        history: history,     
        idEdit: true,
        isCleaned: true   
    })
}