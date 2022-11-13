import React, {useState} from 'react';

//13 05 2022 curs 36
const myResetText="text reset";

function MyCounterParameterPassing(props){

//destructurare props
const {propWidth , propColor , propText}=props;
console.log("props are : " , propWidth , propColor , propText);

//-----------------------------------
const styleBtnCataFourth={
margin:"1em",
padding:"1em",
border:`3px solid ${propColor}`
};

//--------------------------------------------

const [myStateObj , setMyStateObj]=useState(
  {
    defaultCounter:0,
    defaultColor:"blue",
    defaultText:"default text"
  }
);

//--------------------------------

const handleChangeBtnByUser=(event , nrParam , colorParam , textParam) =>{

console.log("you clicked btn to change default state");
console.log(" nrParam , colorParam , textParam are : " ,  nrParam , colorParam , textParam);

//destructurare obiect
let {defaultCounter , defaultColor , defaultText}=myStateObj;
defaultCounter=nrParam != 0 ? defaultCounter + nrParam : 0;
defaultColor=colorParam;
defaultText=textParam;

const newCopyMyStateObj={...myStateObj , defaultCounter:defaultCounter , defaultColor:defaultColor , defaultText:defaultText };
setMyStateObj(newCopyMyStateObj);

}

//-------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${myStateObj.defaultColor}`}}>Click count : {myStateObj.defaultCounter} </h1>
<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${myStateObj.defaultColor}`}}>Click count : {myStateObj.defaultText} </h1>

<button style={styleBtnCataFourth} onClick={(event) => handleChangeBtnByUser(event , 1 , "yellow" , "text plus")}>+</button>
<button style={styleBtnCataFourth} onClick={(event) => handleChangeBtnByUser(event , -1 , "orange" , "text minus")}>-</button>
<button style={styleBtnCataFourth} onClick={(event) => handleChangeBtnByUser(event , 0 , "crimson" , myResetText)}>reset</button>

</article>

</section>

);

}


export default MyCounterParameterPassing;










//
