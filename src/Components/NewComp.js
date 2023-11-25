import React, { Component } from 'react'
import bellA from "./alarm (1).png"
import bellB from "./alarm.png"
export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "I love Coding",
         sub: "Like my style",
         imageUrl:bellB
      }
    }

    styles={
        fontStyle:"italic",
        color:"purple"
      }

      buttonChange=()=>{
        this.setState({
            message: "Click the bell to join my journey",
            sub: "Let'Go",
        });
      };

      imageChange=()=>{
        this.setState({
            imageUrl:bellA,
            message:"Thanks for liking"
        })
      };

      

  render() {
 
    return ( 
      <div>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.buttonChange}>{this.state.sub}</button>
        <p>
            <img style={{width:"30px", height:"30px"}} 
            src={this.state.imageUrl} 
            onClick={this.imageChange}/>
        </p>
       
      </div>
    )
  }
}

export default NewComp;