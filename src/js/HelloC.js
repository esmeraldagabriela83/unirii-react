import React, {Component} from "react";

console.log(" hello from HelloC.js");

class HelloC extends Component{
  render(){
    const {name , surname}=this.props;
      return <h1>{name +  surname}</h1>;
  }
}

export default HelloC;
