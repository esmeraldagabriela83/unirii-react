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

 const updateColor = () => {
   setCar(previousState => {
     return { ...previousState, color: "blue" }
   });
 }

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<button onClick={handleChangeWidth}>handle change width div</button>
<button onClick={(event) =>setMyWidth("300px")}></button>
<div style={{width:myWidth , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>{propText}</div>

<h1>second car</h1>

<h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button
       type="button"
       onClick={updateColor}
     >Blue</button>

  </section>
);
}

export default UseStateSchoolCarSecond;






























//
