import "./App.css";


const Squares = (props: any) => {
    //最初にコマが置かれているマス
    if (props.id3 === "W") {
        return (
            <div className="square inSquare squareColorWhite" 
            id={String(props.id) + String(props.id2)} 
            onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}>
            {props.info.squares[props.id][props.id2]}
        </div>
        )
    } else if (props.id3 === "B") {
        return (
        <div className="square inSquare squareColorBlack" 
            id={String(props.id) + String(props.id2)} 
            onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}>
                {props.info.squares[props.id][props.id2]}
        </div>
        )
    } else {
        //コマが置かれていないマス
        return(
            <div className="square inSquare" 
            id={String(props.id) + String(props.id2)} 
            onClick={() => props.onClick([props.id],[props.id2],props.info,props.info2,props.info3)}>
                {props.info.squares[props.id][props.id2]}
            </div>
        )
    }

}

export default Squares;