import React , {useState , useEffect} from 'react' ;

function AddNrFromArrSecTry(props){
const {propWidth , propColor , propText}=props;

//style variables

const myInputStyleSec={
  color:"MediumVioletRed" ,
  backgroundColor:"HoneyDew",
  padding:"1em" ,
  margin:"1em",
  border:`3px solid ${propColor}`,
  outline:"none",
  borderRadius:"10px"
};

const [sumNumbers , setSumNumbers]=useState(0);

const myNrArrSec=[10, 20, 30, 50, 100];
let sumByUser = 0;

const handleAddNrFromArr=(event) =>{

for(let i=0 ; i<myNrArrSec.length ; i++){
sumByUser=sumByUser + myNrArrSec[i];
setSumNumbers(sumByUser);
}

}

//----------------------------------------------------------------------------------------------

const [inputValue8 , setInputValue8]=useState(80);
const [inputValue9 , setInputValue9]=useState(90);
const [inputValue10 , setInputValue10]=useState(100);



const handleChangeInputValue8=(event) =>{
  setInputValue8(event.target.value);
}
//-------------
const handleChangeInputValue9=(event) =>{
  setInputValue9(event.target.value);
}
//--------------------
const handleChangeInputValue10=(event) =>{
  setInputValue10(event.target.value);
}
//------------

let userInputsValues = parseFloat(inputValue8) + parseFloat(inputValue9) + parseFloat(inputValue10) ;

//-------------------------------------------------------------------------------------------------

return(
<section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>propText is : {propText}</h1>

<article style={{border:"3px dotted deeppink" , margin:"1em" , padding:"1em"}}>
<p style={{padding:"1em" , margin:"1em" , backgroundColor:"floralwhite"}}>{myNrArrSec.join(" / ")}</p>

<button onClick={handleAddNrFromArr}>click to add the numbers from array</button>

<h3>the sum of arr nrs are : {sumNumbers}</h3>
</article>

<article style={{border:"3px dotted deeppink" , margin:"1em" , padding:"1em"}}>

<input type="number" name="number" id="nr8" style={myInputStyleSec} value={inputValue8} onChange={handleChangeInputValue8}/>
<input type="number" name="number" id="nr9" style={myInputStyleSec} value={inputValue9} onChange={handleChangeInputValue9}/>
<input type="number" name="number" id="nr10" style={myInputStyleSec} value={inputValue10} onChange={handleChangeInputValue10}/>

<p>userInputsValues is : <strong>{userInputsValues}</strong></p>

</article>

</section>
);

}


export default AddNrFromArrSecTry;
//
//discord gr 1 InteractiveDiv 20.05.2022
//<input type="number" name="number" id="numberOne" value={userValue} onChange={handleChange}  />


//AddInputsValues function component from js folder
//<input type="number" name="number" id="nr7" placeholder="write a number" style={myInputStyle}/>






//
