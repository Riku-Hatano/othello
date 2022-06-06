import "./App.css";


const Squares = (props: any) => {
    return(
        <div className="square" onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}>{props.info.squares[props.id][props.id2]}</div>
    )
}

export default Squares;