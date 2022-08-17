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
        isWhite: !props.state.isWhite,
        squares: back,
        historyCount: historyCount,
        history: history
    })
    console.log(props.state.history)
    for (let i = 0 ; i < 8 ; i ++) {
        for (let j = 0 ; j < 8 ; j ++) {
            if (props.state.squares[i][j] === "W") {
                let changedCell = document.getElementById(String(i) + String(j))
                changedCell?.classList.remove("squareColorBlack")
                changedCell?.classList.add("squareColorWhite")
            } else if (props.state.squares[i][j] === "B") {
                let changedCell = document.getElementById(String(i) + String(j))
                changedCell?.classList.remove("squareColorWhite")
                changedCell?.classList.add("squareColorBlack")
                
            }
        }
    }
}

