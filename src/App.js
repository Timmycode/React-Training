import React from "react";
import "./App.css";
import NewComp from "./Components/NewComp";
class App extends React.Component{

  styles ={
    fontStyle: "bold",
    color: "teal"
  };
  render(){
    return <div className="header">
     <h1 style={this.styles}>Welcome</h1>
     <NewComp />
    </div>
    
  }
}

export default App;
