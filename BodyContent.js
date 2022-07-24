import { Component } from "react";
import {table} from "react-table";

export default class BodyContent extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         hospitals : [];
    //     }

    //     setHospitals(data){
    //         let hospitalsList = [];
    //         data.forEach()

    //     }
    // }
    // onClick (){
    //     alert("BUtton was Clicked");
    // }
    render(){
        return(<table class= 'body-Content' border = {1} padding='20px'>
         <div>
            <tr>
                <th>Hospital-Name</th>
                <th>Contact Number</th>
                <th>Email</th>
                <th>City</th>
            </tr>
        </div>
        </table>)
    }
}