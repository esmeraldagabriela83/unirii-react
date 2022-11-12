import React, {useState} from 'react';

//13 05 2022 curs 36

const resetVariable="RESET TEXT";


function After13052022Cata(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------

  //------------------------------------------------------------------------------
  const styleBtnCataThird={
  margin:"1em",
  padding:"1em",
  border:`3px solid ${propColor}`
  };

    //------------------------------------------------------------------------------
const [defCntr , setDefCntr]=useState(0);
const [defColor , setDefColor]=useState("blue");
const [defText , setDefText]=useState("DEF TEXT");

//---------------------------------------------

const handleCourse36After=(event , parCntr , parColor , parText) =>{

console.log("you click to change state");

setDefCntr(parCntr != 0 ? defCntr + parCntr : 0);
setDefColor(parColor != "" ? parColor : defColor);
setDefText(parText != "" ? parText : defText);

}


//-----------------------

    return(

      <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

    <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article  style={{margin:"1em" , padding:"1em" , border:`3px solid ${defColor}`}}>
    <h2>Click count : {defCntr}</h2>
    <h2>Click count : {defText}</h2>
</article>

<button style={styleBtnCataThird} onClick={(event) =>handleCourse36After(event , 1 , "yellow" , "+++")}>+</button>
<button style={styleBtnCataThird} onClick={(event) =>handleCourse36After(event , -1 , "orange" , "---")}>-</button>
<button style={styleBtnCataThird} onClick={(event) =>handleCourse36After(event , 0 , "crimson" , resetVariable)}>reset</button>

    </section>

    );

}




export default After13052022Cata;






//
