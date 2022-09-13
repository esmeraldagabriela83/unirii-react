import React, {useState} from "react";
console.log("hello from UseStateSchoolCar.js");

function UseStateSchoolCar(props){
  //destructurare props
const {propWidth , propColor , propText}=props;

console.log("props from UseStateSchoolCar : " , props);
console.log("propWidth , propColor , propText is : " , propWidth , propColor , propText);

const [brand, setBrand] = useState("Ford");
 const [model, setModel] = useState("Mustang");
 const [year, setYear] = useState("1964");
 const [color, setColor] = useState("red");

 const [myWidth, setMyWidth]=useState(propWidth);

 //change

const handleChange=(event) =>{
  setBrand("Dacia");
  setModel("no idea");
  setYear("2000");
  setColor("gray")
}

 //

return(
  <>
<section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<div style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , width:`${propWidth}`}}>
propText from UseStateSchoolCar function component is : <em>{propText}</em>
</div>

<div style={{border:`3px solid ${color}` , padding:"1em" , margin:"1em" , width:`${myWidth}`}}>second div width is {myWidth}</div>

<h3>{propText}</h3>
<h1>My brand is {brand}</h1>
<h3>It is a {color} {model} from {year}</h3>

<button onClick={handleChange}>change from handleChange</button>

<button onClick={(event) => setYear("1983")}>change year of car</button>
<button onClick={(event) => setColor("tomato")}>change color of car</button>
</section>
  </>
);
}

export default UseStateSchoolCar;
