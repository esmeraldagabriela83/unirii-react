import React, {useState} from "react";

console.log("hello from UseStateSchool.js");

//https://www.w3schools.com/react/react_usestate.asp
//Use a button to update the state:

function UseStateSchool({propColor , propText}){

const [color , setColor]=useState("red");

const handleChangeColor=(event) =>{
  setColor("gold")
}

const handleChangeColorPropColor=(event) =>{
  setColor(propColor)
}

  return(
    <section style={{border:"3px solid yellowgreen" , padding:"1em" , margin:"1em"}}>
<h1>https://www.w3schools.com/react/react_usestate.asp</h1>
<h1 style={{color:propColor , border:"3px solid green", padding:"1em", margin:"1em"}}>{propText}</h1>
<h1 style={{color:color}}>My favorite color is {color}!</h1>

<button type="button" onClick={(event) => setColor("yellowgreen")}>change color in yellowgreen</button>

<button onClick={handleChangeColor}>change color in gold</button>

<button onClick={handleChangeColorPropColor}>change color in {propColor}</button>

    </section>
  ) ;
}

export default UseStateSchool;











//
