import React, {useState} from 'react';

//13 05 2022 curs 36

const myResetVariable="reset reset reset";

function MyCounterChangeStateParameterPassing(props){
  //destructurare props
  const {propWidth , propColor , propText}=props;

  //-----------------------------------
  const styleBtnCataFifth={
  margin:"1em",
  padding:"1em",
  border:`3px solid ${propColor}`
  };

  //-------------------

const [defMyNum , setDefMyNum]=useState(0);
const [defMyCol , setDefMyCol]=useState("blue");
const [defMyText , setDefMyText]=useState("my default text");

  //---------------

const handleChangeDefaulState=(event , userParamNr , userParamColor , userParamText) =>{

console.log("you clicked btn to change 3 default different states");

console.log("userParamNr , userParamColor , userParamText are : " , userParamNr , userParamColor , userParamText);

//short if conditional
//Short Hand If...Else
//syntax : variable = (condition) ? expressionTrue :  expressionFalse;
//https://www.w3schools.com/java/java_conditions_shorthand.asp


setDefMyNum(userParamNr != 0 ? defMyNum + userParamNr : 0 );
setDefMyCol(userParamColor);
setDefMyText(userParamText);
}

  //----------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${defMyCol}`}}>{defMyNum}</h1>
<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${defMyCol}`}}>{defMyText}</h1>

<button style={styleBtnCataFifth} onClick={(event) =>handleChangeDefaulState(event , 1 , "yellow" , "plus plus plus")}>+</button>
<button style={styleBtnCataFifth} onClick={(event) =>handleChangeDefaulState(event , -1 , "orange" , "minus minus minus")}>-</button>
<button style={styleBtnCataFifth} onClick={(event) =>handleChangeDefaulState(event , 0 , "crimson" , myResetVariable)}>reset state</button>

</article>

  </section>

  );

}

export default MyCounterChangeStateParameterPassing;













//
