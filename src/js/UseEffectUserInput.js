import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectUserInput.js");

function UseEffectUserInput(props){
  //destructuring props
const {propWidth , propColor , propText}=props;

const [colorTextMy, setColorTextMy]=useState("red");
const [nrMy, setNrMy]=useState(67);
const [textMy, seyTextMy]=useState("my default state text");

//change by useState
const handleChangeState=(event) =>{
  setColorTextMy("magenta");
  setNrMy(nrMy => nrMy + 1000);
  seyTextMy("my changed state text");
}

//change by useEffect 1
const [colorTextMy1, setColorTextMy1]=useState("red");
const [nrMy1, setNrMy1]=useState(67);
const [textMy1, seyTextMy1]=useState("my default state text");


const personalColorText="blue";
const personalNr=nrMy + 100;
const personalText="my personal changed text";

useEffect(() =>{
setColorTextMy1(personalColorText);
setNrMy1(personalNr);
seyTextMy1(personalText);
} , []);

//change by useEffect 2
const [colorTextMy2, setColorTextMy2]=useState("DarkSalmon");
const [nrMy2, setNrMy2]=useState(67);
const [textMy2, seyTextMy2]=useState("my default state text");

useEffect(() =>{

const tmid=setTimeout(() =>{
  setColorTextMy2("cornflowerblue");
  setNrMy2(() =>nrMy2 + 200);
  seyTextMy2("my set timeout changed state text");
} , 5000);

},[])

////change by useState cu input (transmite schimbarea la onChange) ce preia valoarea de la user
const [colorTextMy3, setColorTextMy3]=useState("Darkorange");
const [nrMy3, setNrMy3]=useState(67);
const [textMy3, seyTextMy3]=useState("my default state text");

const handleChangeByUSER=(event) =>{
  console.log("user changed color");
  setColorTextMy3(event.target.value);
}

const handleChangeByUSERnr=(event) =>{
  console.log("user changed nr");
  setNrMy3(parseFloat(event.target.value) + 300);
}

const handleChangeByUSERtext=(event) =>{
  console.log("user changed text");
  seyTextMy3(event.target.value);
}

////change by useState cu input / transmiterea se face de la button la evenimentul click
const [colorTextMy4, setColorTextMy4]=useState("DarkGoldenRod");
const [nrMy4, setNrMy4]=useState(67);
const [textMy4, seyTextMy4]=useState("my default state text");

const handleChangeGigelTextColor=(event) =>{
  console.log("user clicked the button to change the color");

let userColorChosen=document.getElementById('textColorGigel').value;
  setColorTextMy4(userColorChosen);

  document.getElementById('textColorGigel').style.color=userColorChosen;
  document.getElementById('textColorGigel').style.fontWeight="bold";

  document.getElementById('colorUserBtn').style.color=propColor;
  document.getElementById('colorUserBtn').style.backgroundColor=userColorChosen;
  document.getElementById('colorUserBtn').style.fontWeight="bold";
  document.getElementById('colorUserBtn').style.border=`3px solid ${propColor}`;
}

const handleChangeGigelNr=(event) =>{
  console.log("user clicked the button to change the nr");

  let userNrChoosen=document.getElementById('gigelNr').value;
  setNrMy4(parseFloat(userNrChoosen) + nrMy4);
}

const handleChangeGigelText=(event) =>{
  console.log("user clicked the button to change the text");

  let userTextChosen=document.getElementById('gigelText').value;
  seyTextMy4(userTextChosen);
}

return(
  <section style={{margin:"1em" , padding:"1em" , border:`3px solid ${propColor}`}}>
  <h3 id="userTitle">user function component</h3>
    <h3 id="userTitle2">user function component 2</h3>
<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${propColor}`, color:propColor, width:propWidth}}>propText is : {propText}</h1>

<div style={{color:colorTextMy , border:`3px solid ${colorTextMy}` , padding:"1em" , margin:"1em"}}>
<h3>textMy is : {textMy}</h3>
<h3>nrMy is : {nrMy}</h3>
<button style={{color:colorTextMy, border:`3px solid ${propColor}`}} onClick={handleChangeState}>change by useState</button>
</div>

<div style={{color:colorTextMy1 , border:`3px solid ${colorTextMy1}` , padding:"1em" , margin:"1em"}}>
<h3>nrMy1 is : {nrMy1}</h3>
<h3>textMy1 is : {textMy1}</h3>
</div>

<div style={{color:colorTextMy2 , border:`3px solid ${colorTextMy2}` , padding:"1em" , margin:"1em"}}>
<h3>nrMy2 is : {nrMy2}</h3>
<h3>textMy2 is : {textMy2}</h3>
</div>

<div style={{color:colorTextMy3 , border:`3px solid ${colorTextMy3}` , padding:"1em" , margin:"1em"}} id="userDiv1">
<input type="text" name="text" id="textColor" placeholder="write a color" onChange={handleChangeByUSER}/>

<h3>nrMy3 is : {nrMy3}</h3>
<input type="number" name="number" id="userNr" placeholder="write a number"  onChange={handleChangeByUSERnr}/>

<h3>textMy3 is : {textMy3}</h3>
<input type="text" name="text" id="userTextFromInput" placeholder="write your text" onChange={handleChangeByUSERtext}/>
</div>

<div style={{color:colorTextMy4 , border:`3px solid ${colorTextMy4}` , padding:"1em" , margin:"1em"}} id="userDiv2">
<input type="text" name="text" id="textColorGigel" placeholder="write a color"/><br></br>
<button id="colorUserBtn" onClick={handleChangeGigelTextColor} style={{margin:"1em" , padding:"1em"}}>click to change the text color</button>

<h3>nrMy4 is : {nrMy4}</h3>
<input type="number" name="numberGigel" id="gigelNr" placeholder="write a number"/><br></br>
<button onClick={handleChangeGigelNr} style={{margin:"1em" , padding:"1em"}}>click to change the nr</button><br></br>

<h3>textMy4 is : {textMy4}</h3>
<input type="text" name="textGigel" id="gigelText" placeholder="write a text" /><br></br>
<button onClick={handleChangeGigelText} style={{margin:"1em" , padding:"1em"}}>click to change the text</button><br></br>

</div>
  </section>
);
}

export default UseEffectUserInput;

//
