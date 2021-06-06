import React, { Component } from "react"

export class Message extends Component{
    constructor(){
        super();
        this.state = {
            message:"Welcome visitor"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank you for subscribing"
        })
    }
    render(props){
        return (
            <div>
                <h1>{this.state.message}, {this.props.name}</h1>
                <button onClick = {()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
        //return React.createElement("h1",null,"Welcome, Yufei");
    }
}
