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

//------------------------------------------------------------------------------------------------------------------------------------------------
const [sumUser , setSumUser]=useState(0);

let sumUserArray = [];
let userSUMA = 0;


const [inputVal16 , setInputVal16] = useState(0);

const onChangeUserDecision16=(event) =>{
setInputVal16(event.target.value);
sumUserArray.push(inputVal16);
}
//----------------------------------------------------

const [inputVal17 , setInputVal17] = useState(0);

const onChangeUserDecision17=(event) =>{
  setInputVal17(event.target.value);
  sumUserArray.push(inputVal17);
}

//-----------------------------------------------------
const [inputVal18 , setInputVal18] = useState(0);

const onChangeUserDecision18=(event) =>{
  setInputVal18(event.target.value);
  sumUserArray.push(inputVal18);
}

//-----------------------------------------------------

const [inputVal19 , setInputVal19] = useState(0);

const onChangeUserDecision19=(event) =>{
  setInputVal19(event.target.value);
  sumUserArray.push(inputVal19);
}

//----------------------------------------------------

const [inputVal20 , setInputVal20] = useState(0);

const onChangeUserDecision20=(event) =>{
  setInputVal20(event.target.value);
  sumUserArray.push(inputVal20);
}

//------------------------------------------------------
const userChangeHandle=(event) =>{

sumUserArray.map((el , index) =>{
  //map are intotdeauna return

   userSUMA=userSUMA + el;
   return userSUMA;
})

setSumUser(userSUMA);

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

<article id="articleWithUserInputsSecond" style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>

<input type="number" name="number" id="nr16" placeholder="write a number" style={myInputStyleThird} onChange={onChangeUserDecision16}/>
<input type="number" name="number" id="nr17" placeholder="write a number" style={myInputStyleThird} onChange={onChangeUserDecision17}/>
<input type="number" name="number" id="nr18" placeholder="write a number" style={myInputStyleThird} onChange={onChangeUserDecision18}/>
<input type="number" name="number" id="nr19" placeholder="write a number" style={myInputStyleThird} onChange={onChangeUserDecision19}/>
<input type="number" name="number" id="nr20" placeholder="write a number" style={myInputStyleThird} onChange={onChangeUserDecision20}/>

<button onClick={userChangeHandle}>change</button>

<p>sumUser is : {sumUser}</p>

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
