import React , {useState , useEffect} from 'react' ;

function AddNrFromArrThirdTry(props){

const {propWidth , propColor , propText}=props;

const myInputStyleThird={
  color:"MediumVioletRed" ,
  backgroundColor:"HoneyDew",
  padding:"1em" ,
  margin:"1em",
  border:`3px solid ${propColor}`,
  outline:"none",
  borderRadius:"10px"
};

//-----------------------------------------------

const [sumValueInputs , setSumValueInputs]=useState(0);

let inputsSum = 0;

//handle change onClick event

const handleAddValuesFromUserWrittenValues=(event) =>{

const allInputs=document.querySelectorAll(`#articleWithUserInputs input`);

console.log("=== @@@ allInputs arr is : " , allInputs);
console.log("=== @@@ allInputs.length arr is : " ,allInputs.length);

for(let i=0 ; i<allInputs.length ; i++){
  inputsSum = inputsSum + parseFloat(allInputs[i].value);
}

setSumValueInputs(inputsSum);

}


return(
<section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{color:propColor}}>propText is : {propText}</h1>

<article id="articleWithUserInputs" style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>

<input type="number" name="number" id="nr11" placeholder="write a number" style={myInputStyleThird}/>
<input type="number" name="number" id="nr12" placeholder="write a number" style={myInputStyleThird}/>
<input type="number" name="number" id="nr13" placeholder="write a number" style={myInputStyleThird}/>
<input type="number" name="number" id="nr14" placeholder="write a number" style={myInputStyleThird}/>
<input type="number" name="number" id="nr15" placeholder="write a number" style={myInputStyleThird}/><br></br>

<button onClick={handleAddValuesFromUserWrittenValues}>add your inputs values</button>
<p>sumValueInputs is : {sumValueInputs}</p>

</article>

</section>
);

}

export default AddNrFromArrThirdTry;



//discord gr 1 InteractiveDiv 20.05.2022
//<input type="number" name="number" id="numberOne" value={userValue} onChange={handleChange}  />


//AddInputsValues function component from js folder
//<input type="number" name="number" id="nr7" placeholder="write a number" style={myInputStyle}/>




//
