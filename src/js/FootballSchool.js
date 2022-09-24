import React from "react";
import {useState , useEffect} from "react";

//React Events
//https://www.w3schools.com/react/react_events.asp





function FootballSchool(props){
  //destructurare props
const {propWidth , propColor , propText}=props;


const handleShoot=(event) =>{
  console.log(`Great shoot from ${propText} function component`);

  document.getElementById('footballParagraph').style.border=`3px dashed ${propColor}`;
  document.getElementById('footballParagraph').style.color=propColor;
  document.getElementById('footballParagraph').style.padding="1em";
  document.getElementById('footballParagraph').style.margin="1em";
  document.getElementById('footballParagraph').innerText=`text from props is : ${propText}`;

const footballBtn=document.getElementById('footballBtn');
footballBtn.style.color="green";
footballBtn.style.fontWeight="bold";
footballBtn.style.padding="1em";
footballBtn.style.margin="1em";
}

return(
  <section style={{border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>

<p id="footballParagraph"></p>

<button id="footballBtn" onClick={handleShoot}>Take the shoot !</button>
  </section>
);
}

export default FootballSchool;
//
