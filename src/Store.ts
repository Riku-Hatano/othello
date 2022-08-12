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
            history: []
        }
    }
}

export default Store