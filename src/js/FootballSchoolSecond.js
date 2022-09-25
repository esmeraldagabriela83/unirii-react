import React from "react";
import {useState , useEffect} from "react";

//React Events
//https://www.w3schools.com/react/react_events.asp

const styleMy={
  color:"blue",
  margin:"1em",
  padding:"1em",
  border:"3px dotted darkblue"
}

function FootballSchoolSecond(props){

const {propWidth , propColor , propText}=props;

const shootFuncArrow=(myString) =>{
  console.log(myString);
  document.getElementById('h1FootballSec').style.color=propColor;

  const secFootballParagraph=document.getElementById('secFootballParagraph');
  secFootballParagraph.style.padding="1em";
  secFootballParagraph.style.margin="1em";
  secFootballParagraph.innerText=`Goal from ${propText} function component`;
  secFootballParagraph.style.color=propColor;

  const secFootballParagraphSec=document.getElementById('secFootballParagraphSec');
  secFootballParagraphSec.style.padding="1em";
  secFootballParagraphSec.style.margin="1em";
  secFootballParagraphSec.style.color=propColor;
  secFootballParagraphSec.innerText=myString;
}
//------------------------------------------------------cata curs like
const handleCataCursLike=(event) =>{

const secFootballParagraphThird=document.getElementById('secFootballParagraphThird');
secFootballParagraphThird.innerText="example after cata curs";
secFootballParagraphThird.style.padding="1em";
secFootballParagraphThird.style.margin="1em";
secFootballParagraphThird.style.color="brown";
secFootballParagraphThird.style.fontWeight="bold";
secFootballParagraphThird.style.fontSize="1.5rem";
}

//----------------------------------------------------------------------------------

const [myCounter , setMyCounter]=useState(5);
const [myColor , setMyColor]=useState(propColor);

const handleIncreaseMyCounter=(event) =>{
  setMyCounter(myCounter + 5);
  setMyColor("gray");
}
//---------------------------------------------------------------------------------
//arrow function with two parameters : string and event(click)
const secondShootFuncArrow=(myString2 , myEvent) =>{
  console.log("myString2 is : " , myString2);
  console.log("myEvent.type is : " , myEvent.type);
  console.log("myEvent is : " , typeof(myEvent));

  const myParagraph=document.getElementById('myParagraph');
  myParagraph.innerText=myString2;
  myParagraph.style.border=`3px solid ${propColor}`;
  myParagraph.style.padding="1em";
  myParagraph.style.margin="1em";
  myParagraph.style.color=propColor;

  const myBtn=document.getElementById('myBtn');
  myBtn.style.color="olive";
  myBtn.style.fontSize="1.5rem";
}


  return(
    <>
<h1 id="h1FootballSec" style={{color:"olive"}}>{propText}</h1>
<p id="secFootballParagraph"></p>
<p id="secFootballParagraphSec"></p>
<button style={{width:propWidth , border:`3px solid ${propColor}`}} onClick={() =>shootFuncArrow("Goal from FootballSchoolSecond")}>Take the shot!</button>

<p id="secFootballParagraphThird" style={{color:propColor}}>{propText}</p>
<button onClick={handleCataCursLike} style={{width:propWidth , margin:"1em" , padding:"1em" , border:`3px dotted ${propColor}` , color:propColor}}>click Cata curs like</button><br></br>

<strong style={{color:myColor}}>myCounter is : {myCounter}</strong><br></br>
<button onClick={handleIncreaseMyCounter} style={styleMy}>Increase counter and change color</button><br></br>

<button id="myBtn" onClick={(event) => secondShootFuncArrow("myGoal-first parameter" , event)}>Take the shot! from the 2 parameters function</button>
<p id="myParagraph"></p>
    </>
  );
}

export default FootballSchoolSecond;
//
