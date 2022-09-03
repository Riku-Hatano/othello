import React from "react"

export const putBlack = (props: any) => {
    props.setState({
        isEdit: 1
    })
}
export const putWhite = (props: any) => {
    props.setState({
        isEdit: 2
    })
}
export const completeEdit = (props: any) => {
    props.setState({
        isEdit: false
    })
}
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