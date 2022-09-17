import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectUserInput.js");

function UseEffectUserInput(props){
  //destructuring props
const {propWidth , propColor , propText}=props;

const [colorTextMy, setColorTextMy]=useState("red");
const [nrMy, setNrMy]=useState(67);
const [textMy, seyTextMy]=useState("my default state text");

const handleChangeState=(event) =>{
  setColorTextMy("magenta");
  setNrMy(nrMy => nrMy + 100);
  seyTextMy("my changed state text");
}


return(
  <section>
  <h3 id="userTitle">user function component</h3>
    <h3 id="userTitle2">user function component 2</h3>
<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${propColor}`, color:propColor, width:propWidth}}>propText is : {propText}</h1>

<div style={{color:colorTextMy , border:`3px solid ${colorTextMy}` , padding:"1em" , margin:"1em"}}>
<h3>textMy is : {textMy}</h3>
<h3>nrMy is : {nrMy}</h3>
<button style={{color:colorTextMy, border:`3px solid ${propColor}`}} onClick={handleChangeState}>change by useState</button>
</div>
  </section>
);
}

export default UseEffectUserInput;

//
