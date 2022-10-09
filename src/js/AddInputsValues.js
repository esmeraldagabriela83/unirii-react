import React , {useState} from 'react' ;


function AddInputsValues(props){

const {propWidth , propColor , propText}=props;

//style variables

const myStyleMy={
  color:propColor,
  backgroundColor:"Khaki",
  padding:"1em" ,
  margin:"1em",
  border:`3px dashed ${propColor}`
};

const myInputStyle={
  color:"MediumVioletRed" ,
  backgroundColor:"HoneyDew",
  padding:"1em" ,
  margin:"1em",
  border:`3px solid ${propColor}`,
  outline:"none"
}

const myBtnStyle={
  color:"tomato" ,
  backgroundColor:"indigo",
  padding:"1em" ,
  margin:"1em",
  border:`3px solid ${propColor}`,
  borderRadius:"15px"
}

//componenta necontrolata de mine , ci de user

const [sumInputs , setSumInputs]=useState(0);



const handleUserAddInputsValues=(event) =>{
  const allInputs=document.querySelectorAll("#sectionAddInputs input");
  console.log("--   ---allInputs from AddInputsValues function component is : " , allInputs);
  console.log("--  --allInputs.length is " , allInputs.length);

for(let i=0 ; i<allInputs.length ; i++){
  console.log("allInputs[i] is : " , allInputs[i]);
  console.log("allInputs[i].value is : " , allInputs[i].value);




}

}

return(
  <section style={{border:"3px solid blue", padding:"1em" , margin:"1em"}} id="sectionAddInputs">

<h1 style={myStyleMy}>function component is : {propText}</h1>

<input type="number" name="number" id="nr1" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr2" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr3" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr4" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr5" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr6" placeholder="write a number" style={myInputStyle}/>
<input type="number" name="number" id="nr7" placeholder="write a number" style={myInputStyle}/>

<h3>sumInputs is : {sumInputs}</h3>

<button onClick={handleUserAddInputsValues} style={myBtnStyle}>show sum of inputs</button>

  </section>
);

}

export default AddInputsValues;
