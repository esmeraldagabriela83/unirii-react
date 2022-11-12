import React, {useState} from 'react';

//13 05 2022 curs 36

const plusText="my plus text";
const minusText="my minus text";

function ObjAfter13052022Cata(props){

  const {propWidth , propColor , propText}=props;

    //------------------------------------------------------------------------------
    const styleBtnCataSecond={
    margin:"1em",
    padding:"1em",
    border:`3px solid ${propColor}`
    };

const [stateObj , setStateObj]=useState(
  {
    defaultCounter:0,
    defaultColor:"blue",
    defaultText:"default text"
  }
);

//------------


const handleModifyAfterCourse=(event, paramNr , paramColor , paramText)=> {

console.log(".......you clicked the btn to modify state");

//destructurare obiect

let {defaultCounter , defaultColor , defaultText}=stateObj;

console.log("................" , defaultCounter , defaultColor , defaultText);

defaultCounter=paramNr != 0 ? defaultCounter + paramNr : 0;
defaultColor=paramColor != "" ? paramColor : stateObj.defaultColor;
defaultText=paramText != "" ? paramText : stateObj.defaultText;

//destructurare obiect
setStateObj({...stateObj , defaultCounter:defaultCounter , defaultColor:defaultColor , defaultText:defaultText});

}


  //------------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{margin:"1em" , padding:"1em" , border:`3px solid ${stateObj.defaultColor}`}}>
<h1>Click count : {stateObj.defaultCounter} </h1>
<h1>Click count : {stateObj.defaultText} </h1>
</article>

<button style={styleBtnCataSecond} onClick={(event) =>handleModifyAfterCourse(event , 1 , "yellow" , plusText)}>+</button>
<button style={styleBtnCataSecond} onClick={(event) =>handleModifyAfterCourse(event , -1 , "orange" , minusText)}>-</button>
<button style={styleBtnCataSecond} onClick={(event) =>handleModifyAfterCourse(event , 0 , "crimson" , "my reset text")}>reset</button>

</section>

);


}

export default ObjAfter13052022Cata;










//
