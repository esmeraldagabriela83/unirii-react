import React from "react";
import ReactDOM from "react-dom";

console.log("salut din MyPropExerciseFunc.js");

const sectionStyle={
  padding:"1em",
  margin:"1em",
  border:"3px solid forestgreen",
  textAlign:"center",
  color:"red"
}

function MyPropExerciseFunc(props){
  console.log("props from inside MyPropExerciseFunc function component are: " , props);
  return (
    <>
    <section style={sectionStyle}>
<h1>{props.myProp1}</h1>
<h1>{props.myProp1.toLocaleUpperCase()}</h1>
<h2>{props.myProp2}</h2>
<h3>{props.myProp3}</h3>
<h3>{props.myProp3.toLocaleLowerCase()}</h3>
</section>
    </>
  );
}

export default MyPropExerciseFunc;























//
