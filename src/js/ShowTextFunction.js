import React from "react";
import ReactDOM from "react-dom";

console.log("salut din ShowTextFunction.js");



export function ShowTextFunction(props){

  const title1Style={
    padding:"1em",
    margin:"1em",
    border:"3px solid magenta",
    textAlign:"center",
    color:props.differentColor
  };

  console.log("---props are : " , props);
  console.log("---props.differentColor is : " , props.differentColor);
  console.log("---props.differentText is : " , props.differentText);
  return (
    <>
    <h1 style={title1Style}>{props.differentText}</h1>
    <h1 style={title1Style}>{props.names}</h1>
    </>
  );
}


export default ShowTextFunction ;











//
