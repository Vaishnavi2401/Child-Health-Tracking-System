import { Component } from "react";

export class AppHeader extends Component{
    // constructor(props){
    //     super(props)
    // }
    
    render(){
        return(
        <div class = 'App-header'>
            <p id= "btn"><button  onClick={this.onClick}>Logout</button></p>
            <h1>Child Health Tracking System</h1>
            <hr/>
        </div>
    )}
}