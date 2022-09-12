import React from "react";
import ReactDOM from "react-dom";

console.log("salut din ShowTextFunctionDestructuring.js");

export default function ShowTextFunctionDestructuring({differentColor1 , differentText1 , names1}){
  console.log("differentColor1 , differentText1 , names1 is : " , differentColor1 , differentText1 , names1);

  return(
    <>
<h2 style={{color:differentColor1 , border:"3px dotted green" , padding:"1em" , margin:"1em"}}>{differentText1}</h2>
<h2 style={{color:differentColor1 , border:"3px dotted green" , padding:"1em" , margin:"1em"}}>{names1}</h2>
    </>
  );
}
