import React, {useState} from "react";
console.log("hello from UseStateSchoolCarSecond.js");

function UseStateSchoolCarSecond(props){
  //destructurare props
const {propWidth , propColor , propText}=props;
console.log("propWidth , propColor , propText from UseStateSchoolCarSecond.js are:" , propWidth , propColor , propText);
//
 const [myWidth, setMyWidth]=useState(propWidth);
 const handleChangeWidth=(event) =>{
   setMyWidth("500px")
 }
//
const [car, setCar] = useState({
   brand: "Ford",
   model: "Mustang",
   year: "1964",
   color: "red"
 });

//w 3 UseStateSchool
//https://www.w3schools.com/react/react_usestate.asp
 const updateColor = () => {
   setCar(previousState => {
     //clonare array cu destructurare
     return { ...previousState, color: "blue" }
   });
 }

//catalin discord general
// Mihaela Gabriela A — 20.05.2022
// curs 39 20 05 2022  formular contact cu css // style.css
 const handleChangeCatalin=(event) =>{
   //clonare array cu destructurare
   const currentCopyCar={...car, color:"yellow"};
   setCar(currentCopyCar)
 }

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1>UseStateSchoolCarSecond function component</h1>

<button onClick={handleChangeWidth}>handle change width div</button>
<button onClick={(event) =>setMyWidth("300px")}>change width</button>
<div style={{width:myWidth , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>{propText}</div>

<h1>second car</h1>

<h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button type="button" onClick={updateColor}>Blue</button>
      <button type="button" onClick={handleChangeCatalin}>yellow catalin</button>

  </section>
);
}

export default UseStateSchoolCarSecond;






























//
