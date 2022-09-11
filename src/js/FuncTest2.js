import React from "react";
import ReactDOM from "react-dom";

import FuncTest22 from "./FuncTest22.js";

console.log("hello from FuncTest2.js");

const paragraphStyle={
  color:"green",
  padding:"1em",
  border:"3px solid indigo",
  backgroundColor:"skyblue"
}

function FuncTest2(){
  return(
    <>
    <section>
<p style={paragraphStyle}><strong style={{fontSize:"2em"}}>1</strong> lorem ipsum from paragraph tag from FuncTest2 inside FuncTest2.js file</p>
<p style={paragraphStyle}><em style={{fontSize:"4em"}}>2</em> lorem ipsum from paragraph tag from FuncTest2 inside FuncTest2.js file</p>
<p style={paragraphStyle}><span style={{fontSize:"6em"}}>3</span> lorem ipsum from paragraph tag from FuncTest2 inside FuncTest2.js file</p>

<p id="paragraphTest2">text paragraph from FuncTest2.js</p>

<p id="testParagraph2"> paragraph text from FuncTest2.js</p>

<FuncTest22/>

<div id="jsDiv" style={{border:"3px solid red"}}>
<input id="inputJS" type="text" placeholder="write your text" value=""/><br></br>

<button id="buttonJS">click to show your text</button>

<p id="paragraphJS"  style={{border:"3px solid green"}}></p>
</div>
</section>
    </>
  )
}

export default FuncTest2;

//------------------------------------------------------------------------------











//
