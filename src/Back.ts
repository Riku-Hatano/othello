let a = 0;
export const next = (props: any) => {
    a++;
    props.setState({
        his: a
    })
    console.log(props.state.his)
}
export const back = (props: any) => {
    if (props.state.historyCount < 1) {
        return;
    }
    const historyCount = props.state.historyCount - 1
    const back = props.state.history[historyCount]
    const history = props.state.history
    history.pop()

    if (props.state.isEdit === "PLAY") {
        console.log(`number is ${props.state.isEdit}`)
        props.setState({
            squares: back,
            historyCount: historyCount,
            history: history,
            isWhite: !props.state.isWhite,
        })
        console.log(props.state.history)
    } else {
        console.log(`number is false ${props.state.isEdit}`)
        props.setState({
            squares: back,
            historyCount: historyCount,
            history: history
        })
        console.log(props.state.history)
    }
        
}

