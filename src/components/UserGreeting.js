//if and else condition
//conditionally rendering

import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    render() {
        return this.state.isLoggedIn && <div>Welcome Yufei</div>


        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Yufei</div>:
        //     <div>Welcome Guest</div>
        // )


        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Yufei</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>



        // if (this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Yufei</div>
        //     )
        // }
        // else return(
        //     <div>Welcome Guest</div>
        // )
    }
}

export default UserGreeting
