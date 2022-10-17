import React,{useState,useEffect} from 'react';

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//20 05 2022 DISCORD GR1
//https://www.w3schools.com/js/js_operators.asp
//https://www.w3schools.com/react/react_conditional_rendering.asp

//DACA COPII INPUT TAG DE PE W 3 SCHOOL , NU UITA SA INCHIZI TAG-UL , CA SI LA IMG <input />


function AddWhateverText(props){
  const {propWidth , propColor , propText}=props;


  const handleGigelTEXT=(event) =>{
    console.log("you clicked the btn for text");

const inputGigel=document.getElementById(`inputGigel`);
console.log("inputGigel.value is : " , inputGigel.value);

const paragraphStringGigel=document.getElementById('paragraphStringGigel');
paragraphStringGigel.innerText=inputGigel.value;

  }


return(
  <section style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<h1 style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>function component is : {propText}</h1>

<label>Your text:
<input type="text" id="inputGigel" name="inputGigel" placeholder="write a text" />
</label><br></br>

<button onClick={handleGigelTEXT} style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:"Sienna"}}>show your written text string</button>

<p id="paragraphStringGigel" style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}></p>

  </section>
);

}

export default AddWhateverText;
