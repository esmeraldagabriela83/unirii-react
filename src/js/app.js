import React from "react";
import ReactDOM from "react-dom";

import MyApp1 from "./MyApp1.js";
import FuncTest2 from "./FuncTest2.js";

import FuncLinks from "./FuncLinks.js";

console.log("hello from app.js");

console.log("5*3 is : " , 5*3);

//------------------------------------------------------------------------------

const myinputHtml=document.getElementById('inputHtml');
myinputHtml.style.border="5px solid red";
myinputHtml.style.padding="1em";
myinputHtml.style.margin="1em";
myinputHtml.style.outline="none";

const myParagraphHtml=document.getElementById('paragraphHtml');
myParagraphHtml.style.border="1px solid green";
myParagraphHtml.style.padding="1em";
myParagraphHtml.style.margin="1em";
myParagraphHtml.style.borderRadius="5px";

const myButtonHtml=document.getElementById('buttonHtml');
myButtonHtml.style.border="1px solid green";
myButtonHtml.style.padding="1em";
myButtonHtml.style.margin="1em";
myButtonHtml.style.borderRadius="15px";

myButtonHtml.addEventListener("click" , showUserTextFunc);

function showUserTextFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  this.style.backgroundColor="pink";
  this.style.fontWeight="bold";
  this.style.fontSize="1.5em";

  this.parentElement.style.backgroundColor="LightSkyBlue";
  this.nextElementSibling.style.backgroundColor="yellow";

  myParagraphHtml.style.border="3px solid orange";
  myParagraphHtml.innerText=myinputHtml.value;
}

//------------------------------------------------------------------------------










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

//ReactDOM.render(<h1>my h1 title</h1>,document.getElementById("app"));

ReactDOM.render(<h1 style={{color:"red", backgroundColor:"yellow", padding:"1em"}}>my h1 test1 title</h1>,document.getElementById("test1"));

ReactDOM.render(<FuncTest2/>,
document.getElementById("test2"));


ReactDOM.render(<FuncLinks/>,
document.getElementById("linksMain"));

//
