import { AnyAaaaRecord } from "dns"
import React from "react"



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
    props.setState({
        squares: back,
        historyCount: historyCount,
        history: history
    })
    if (props.state.isEdit === true) {
        props.setState({
            isWhite: !props.state.isWhite
        })
    }
    console.log(props.state.history)
}

