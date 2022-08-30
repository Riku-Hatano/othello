import React from "react"

export const putBlack = (props: any) => {
    console.log("black")
}
export const putWhite = (props: any) => {
    console.log("white")
}
export const completeEdit = (props: any) => {
    props.setState({
        squares: [
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "],
            [" ", " ", " ", " ", " ", " ", " ", " "]
        ],
        historyCount: props.state.historyCount + 1
    })
}