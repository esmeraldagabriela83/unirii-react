import React from "react";
import ReactDOM from "react-dom";
import MyApp1 from "./MyApp1.js";

console.log("hello from app.js");

console.log("5*3 is : " , 5*3);













function App(){
  return(
    <>
<h1>my title 1 from app.js</h1>
<h2>my title 2 from app.js</h2>
<MyApp1/>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));

//
