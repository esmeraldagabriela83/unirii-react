import React, {useState , useEffect} from 'react';

//https://www.w3schools.com/java/java_conditions_shorthand.asp
//variable = (condition) ? expressionTrue :  expressionFalse;

//---------//------------

const intigerVariable=20;
let intigerText="";

if(intigerVariable < 18){
  console.log("Good day.");
  intigerText="Good day.";
}else{
  console.log("Good evening.");
  intigerText="Good evening.";
}

const integerParagraph=document.getElementById('integerParagraph');
integerParagraph.innerText=intigerText;
integerParagraph.style.textAlign="center";

//-------------------------------
const intigerNr=300;
let intigerNrText="";

function modifyNr(nr){

if(nr >= 100){
  console.log("more or equal to 100");
  intigerNrText="more or equal to 100";
}else{
  console.log("less than 100");
  intigerNrText="less than 100";
}

}

//apel functie
modifyNr(intigerNr);

const integerParagraphNr=document.getElementById('integerParagraphNr');
integerParagraphNr.innerText=intigerNrText;
integerParagraphNr.style.textAlign="center";

//-----------------------------------------//-------------------------------------

function ShortIfSchool(props){
  //destructurare props
  const {propWidth , propColor , propText}=props;

  //-----------------------------------
  const styleBtnCataArrReact={
  margin:"1em",
  padding:"1em",
  border:`3px solid ${propColor}`
  };
  //------------------------------------------------

  //-----------------------------------------------------------------------------
const [valueVariableInput , setValueVariableInput]=useState(0);

  const takeNrValueInput=(event) =>{
    setValueVariableInput(event.target.value);
  }
//-----------

const handleChangeIntigerVariable=(event) =>{

console.log("you clicked to change intigerVariable ");

const titleIntigerVariable=document.getElementById('titleIntigerVariable');
titleIntigerVariable.style.border="5px solid LightSalmon";
titleIntigerVariable.innerText=parseFloat(valueVariableInput) + intigerVariable;
};

//------------------------------------------------------------------------------

const [myCodeDef , setMyCodeDef]=useState(50);

const handleAdd100=(event , param100) =>{

console.log("you clicked to add 100 to intigerVariable");
setMyCodeDef(param100 != 0 ? param100 + intigerVariable + myCodeDef : 0);

}

  //----------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>intigerVariable is : {intigerVariable}</p>

<p>intigerVariable + 500 is : {intigerVariable + 500}</p>

<p>intigerVariable * 500 is : {intigerVariable * 500}</p>

{intigerVariable >= 40 ? intigerVariable + 40 : intigerVariable - 40}
{intigerVariable >= 40 ? <h3>{intigerVariable + 40}</h3> : <h3>{intigerVariable - 40}</h3>}
{intigerVariable >= 40 ? <h3>more than {intigerVariable}</h3> : <h3>less than {intigerVariable}</h3>}

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label forHtml="userNrSchool">write a number<br></br>
<input type="number" name="userNrSchool" id="userNrSchool" placeholder="nr" onChange={takeNrValueInput}/>
</label><br></br>

<button type="button" onClick={handleChangeIntigerVariable}>add your nr to intigerVariable</button>

<h3 id="titleIntigerVariable" style={{border:"5px solid cyan" , margin:"1em" , padding:"1em"}}></h3>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button style={styleBtnCataArrReact} onClick={(event) => handleAdd100(event , 100)}>add 100 and intigerVariable</button>
<button style={styleBtnCataArrReact} onClick={(event) => handleAdd100(event , 0)}>reset</button>
<button style={styleBtnCataArrReact} onClick={(event) => handleAdd100(event , -100)}>dectrease by 100 and increase by intigerVariable</button>

<h3>myCodeDef is : {myCodeDef}</h3>
<h3>sum of param100 + intigerVariable + myCodeDef is :{myCodeDef}</h3>

</article>

  </section>

  );



}


export default ShortIfSchool;
