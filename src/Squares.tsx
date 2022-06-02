import React from "react";
import "./App.css";

// const Squares = (props: any) => {
//     return(
//         <div className="square" onClick={() => props.onClick(props.id)}>{props.info[props.id]}</div>
//     )
// }
const Squares = (props: any) => {
    return(
        <div className="square" onClick={() => props.onClick([props.id],[props.id2])}>{props.info[props.id][props.id2]}</div>
        // <div className="square" onClick={() => props.onClick([props.id],[props.id2])}></div>
    )
}

export default Squares;