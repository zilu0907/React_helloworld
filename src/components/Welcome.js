import React, { Component } from "react"

export class Welcome extends Component{
    render(props){
        return <h1>Welcome, {this.props.name}</h1>;
        //return React.createElement("h1",null,"Welcome, Yufei");
    }
}