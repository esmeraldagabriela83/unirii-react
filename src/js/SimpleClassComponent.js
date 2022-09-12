import React, {Component} from "react";
import ReactDOM from "react-dom";
console.log("hello helloo from SimpleClassComponent.js");


export default class SimpleClassComponent extends Component {

render(){

//destructurarea lui props
const {propColor , propBackground , propText}=this.props;

  return <h1 style={{textAlign:"right", color:propColor, backgroundColor:propBackground}}>text from SimpleClassComponent.js and SimpleClassComponent class component: {propText}</h1>;
};

}
