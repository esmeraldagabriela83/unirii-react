import React , {useState} from 'react' ;


function ModifyByUserByBtn(props){

const {propWidth , propColor , propText}=props;
const myMyStyle={
  color:propColor,
  backgroundColor:"LightCyan",
  padding:"1em",
  margin:"1em",
  border:`3px solid ${propColor}`
}

const myMyStyleBtn={
  color:propColor,
  backgroundColor:"ivory",
  padding:"1em",
  margin:"1em",
  border:`3px solid ${propColor}`,
  borderRadius:"20px"
}


const [stateNr , setStateNr]=useState(50);

//increase by onClick event,( componenta controlata de user), este componenta necontrolata
const handleIncreaseUser=(event) =>{
const userNrOneValue=document.getElementById('userNrOne').value;
setStateNr(stateNr + parseFloat(userNrOneValue));
}

//decrease by onClick event,( componenta controlata de user), este componenta necontrolata
const handleDecreaseUser=(event) =>{
  const userNrTwoValue=document.getElementById('userNrTwo').value;
  setStateNr(stateNr - parseFloat(userNrTwoValue));
}
//------------------------------------------------------------------------------
const [userSum , setUserSum]=useState(0);
//add inputs values

const addInputsHandleFunc=(event) =>{
const userNrOneValue=document.getElementById('userNrOne').value;
const userNrTwoValue=document.getElementById('userNrTwo').value;

setUserSum(userSum + parseFloat(userNrOneValue) + parseFloat(userNrTwoValue));
}


const [userDifference , setUserDifference]=useState(0);
//difference inputs values

const differenceInputsHandleFunc=(event) =>{
const userNrOneValue=document.getElementById('userNrOne').value;
const userNrTwoValue=document.getElementById('userNrTwo').value;

setUserDifference(userDifference + (parseFloat(userNrOneValue) - parseFloat(userNrTwoValue)));
}

return(
<section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{color:propColor , border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>function componenent is : {propText}</h1>

<h3 style={{color:propColor}}>stateNr is : {stateNr}</h3>
<article style={myMyStyle}>
<label>input first :
<input type="number" name="number" id="userNrOne"  placeholder="write your first nr" style={myMyStyle}/>
</label>
<br></br>
<button onClick={handleIncreaseUser} style={myMyStyleBtn}>click to increase by your written nr</button><br></br>
</article>

<article style={myMyStyle}>
<label>input second :
<input type="number" name="number" id="userNrTwo"  placeholder="write your second nr" style={myMyStyle}/>
</label>
<br></br>
<button onClick={handleDecreaseUser} style={myMyStyleBtn}>click to decrease by your written nr</button><br></br>
</article>

<article style={myMyStyle}>
<p style={myMyStyle}>sum of the two nr you written in the inputs: {userSum} </p>
<button onClick={addInputsHandleFunc} style={myMyStyleBtn}>get sum of inputs values</button>
</article>

<article style={myMyStyle}>
<p style={myMyStyle}>difference of the two nr you written in the inputs: {userDifference} </p>
<button onClick={differenceInputsHandleFunc} style={myMyStyleBtn}>get difference of inputs values</button>
</article>

</section>
);
}

export default ModifyByUserByBtn;
