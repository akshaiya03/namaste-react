import User from "./UserClass";
import React
 from "react";
class About extends React.Component{
    constructor(props){
       super(props);
    }

    componentDidMount(){
        console.log("parent render")
    }
       render(){
        return(
            <div>
              <h1>About this app</h1>
              <User name="akshaiya" location="royapuram"/>
          </div>
        )}
       
}


export default About;