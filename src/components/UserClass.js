import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        console.log("parent")
        this.state= {
            userinfo:{
                name:"dummy",
                location:"dummylocation",
            }
        }
    }
   async componentDidMount(){
       const data= await fetch("https://api.github.com/users/Akshaiya03")
       const json= await data.json();
       console.log(json);

       this.setState( {
         userinfo:json,

    });
}
    render(){
        const {login,id} = this.state.userinfo;
        console.log("child rendered")
        return(
            
            <div className="aboutinfo">
                <h1>name:{login}</h1>
                <h2>location:{id}</h2>
            </div>
        )
    }
}
export default User;