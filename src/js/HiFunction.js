import React , {useState , useEffect} from "react" ;

// curs 33 6 05 2022
// general discord 7 mai 2022

function HiFunction(props){

const {propName , propSurname , propWidth , propColor , propText}=props;

const [hiColor , setHiColor]=useState("red");

const handleChangeHi=(event) =>{
  setHiColor("green");
};
//user will make the change
const [initialColor , setInitialColor]=useState(propColor);
const [initialName , setInitialName]=useState(propName);
const [initialSurname , setInitialSurname]=useState(propSurname);
const [initialAge , setInitialAge]=useState(0);

const handleChangeAllHi=(event) =>{
  const colorUserHi=document.getElementById('colorUserHi').value;
  setInitialColor(colorUserHi);

  const nameUserHi=document.getElementById('nameUserHi').value;
  setInitialName(nameUserHi);

  const surnameUserHi=document.getElementById('surnameUserHi').value;
  setInitialSurname(surnameUserHi);

  const ageUserHi=document.getElementById('ageUserHi').value;
  setInitialAge(parseFloat(ageUserHi) + initialAge);
}

  return(
    <article>

    <div style={{color:propColor , width:propWidth , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
    <p>color is propColor : {propColor}</p>
    <h3>Hi {propName} !</h3>
    <h3>My surname is:  {propSurname} !</h3>
    </div>

    <div style={{color:hiColor , width:propWidth , border:`3px dashed ${hiColor}` , padding:"1em" , margin:"1em"}}>
    <p>color is hiColor : {hiColor}</p>
    <button onClick={handleChangeHi}>changeColor</button>

    <h3>Hi {propName} !</h3>
    <h3>My surname is:  {propSurname} !</h3>
    </div>

      <div style={{color:initialColor , width:propWidth , border:`3px dashed ${initialColor}` , padding:"1em" , margin:"1em"}}>
      <p>color is propColor : {initialColor}</p>
      <input type="text" name="textColor" id="colorUserHi" placeholder="write a color" />

      <h3>Hi {initialName} !</h3>
      <input type="text" name="textName" id="nameUserHi" placeholder="write your name" />

      <h3>My surname is:  {initialSurname} !</h3>
      <input type="text" name="textSurname" id="surnameUserHi" placeholder="write your surname" />

      <h3>Your full name is {initialName} {initialSurname} !</h3>
      <h3>Age is {initialAge}</h3>
      <input type="number" name="numberAge" id="ageUserHi" placeholder="write your age"/><br></br>

      <button onClick={handleChangeAllHi}>change all Hi</button>
      </div>

    </article>
  );
}

export default HiFunction;
















//
