import React from "react";
import {useState , useEffect} from "react";

//React Events
//https://www.w3schools.com/react/react_events.asp

//get an element tag by id from index.inputHtml
document.getElementById('footballParagraphFirst').style.color="red";
document.getElementById('footballParagraphFirst').style.fontWeight="bold";
document.getElementById('footballParagraphFirst').style.fontSize="1.5rem";

//get an element tag by id from index.inputHtml
const footballParagraphSecond=document.getElementById('footballParagraphSecond');
footballParagraphSecond.style.color="yellowgreen";
footballParagraphSecond.style.fontWeight="bold";
footballParagraphSecond.style.fontSize="1.5rem";
//------------------------------------------------------------------------------get elements from index.html
const footballParagraphThird=document.getElementById('footballParagraphThird');
footballParagraphThird.style.color="magenta";
footballParagraphThird.style.fontWeight="bold";
footballParagraphThird.style.fontSize="1.5rem";

const footballBtnIdexHTML=document.getElementById('footballBtnIdexHTML');
footballBtnIdexHTML.style.fontSize="1.5rem";
footballBtnIdexHTML.style.color="darkmagenta";
footballBtnIdexHTML.style.padding="1em";
footballBtnIdexHTML.style.margin="1em";

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
footballBtn.style.fontSize="1.5rem";
footballBtn.style.fontWeight="bold";
footballBtn.style.padding="1em";
footballBtn.style.margin="1em";

footballParagraphSecond.style.color=propColor;
}



footballBtnIdexHTML.addEventListener("click" , function(event){
  event.preventDefault();
  footballParagraphThird.style.color=propColor;
  footballParagraphThird.style.backgroundColor="floralwhite";
  footballParagraphThird.style.border=`5px solid ${propColor}`;
  footballParagraphThird.style.padding="1em";
  footballParagraphThird.style.margin="1em";

  this.style.color=propColor;
  this.style.backgroundColor="yellowgreen";
})

return(
  <section style={{border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>

<p id="footballParagraph"></p>

<button id="footballBtn" onClick={handleShoot}>Take the shoot !</button>
  </section>
);
}

export default FootballSchool;
//
