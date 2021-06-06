import React from "react"


//export const Greet = ({name}) => <h1> Hello, {name} </h1>;
export const Greet = (props) => {
    const {name} = props
    return(<h1> Hello, {name} </h1>)
}
//export default Greet;