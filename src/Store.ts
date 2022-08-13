import { AnyAaaaRecord } from "dns"
import React from "react"

type History = {
    history: any
}
type Props = {
}
class Store extends React.Component<Props, History> { 
    constructor(props: Props) {
        super(props)
        this.state = {
            history: [],
        }
    }
}

let a = 0;
export const next = (props: any) => {
    a++;
    props.setState({
        his: a
    })
    console.log(props.state.his)
}
export const back = () => {
    console.log("back")
}

export default Store