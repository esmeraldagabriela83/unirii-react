import React,{useState,useEffect} from 'react';

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//20 05 2022 DISCORD GR1
//https://www.w3schools.com/js/js_operators.asp
//https://www.w3schools.com/react/react_conditional_rendering.asp

function AddWhateverSec(props){

const {propWidth , propColor , propText}=props;


const [myCodeNrSec , setMyCodeNrSec]=useState(15);



function userFunc(){

console.log(" --- string inside userFunc function");
console.log(" --- myCodeNrSec * 300 is : " , myCodeNrSec * 300);
return(myCodeNrSec * 300);

}
//------------------------------------------------------------------------------

function userFuncSec(){
  console.log(" --- string inside userFuncSec function");

const yourNrGigelValue=document.getElementById('yourNrGigel').value;
console.log(" @@@ yourNrGigelValue is : " , yourNrGigelValue);
return yourNrGigelValue;
}



//------------------------------------------------------------------------------

const handleGigel1Change=(event) =>{
console.log("Gigel you clicked the btn");

const gigelBtn=document.getElementById('gigelBtn');
gigelBtn.style.border="3px solid red";
gigelBtn.style.margin="1em";
gigelBtn.style.padding="1em";
gigelBtn.style.color="olive";
gigelBtn.style.fontWeight="bold";

const paragraphGigel=document.getElementById('paragraphGigel');
//apelul functiei de mai sus
paragraphGigel.innerText=parseFloat(userFuncSec()) + 7000;
paragraphGigel.style.border="5px solid forestgreen";
//ultima linie este cu return
return paragraphGigel.style.backgroundColor="yellow";

}

//------------------------------------------------------------------------------

return(
  <section style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>

<article style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>

<div style={{border:"3px dashed indigo"}}>
<h3>myCodeNrSec is : {myCodeNrSec}</h3>
<p style={{border:"3px solid DarkSalmon" , margin:"1em" , padding:"1em"}}>userFunc is depending only on myCodeNrSec : {userFunc()}</p>
</div>

<div style={{border:"3px dashed indigo"}}>
<input type="number" type="number" id="yourNrGigel" placeholder="write your nr"  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/><br></br>
<button id="gigelBtn" onClick={handleGigel1Change}>apel functie in urmatorul paragraf la click btn</button>
<p id="paragraphGigel" style={{border:"3px solid GoldenRod" , margin:"1em" , padding:"1em"}}></p>
</div>



</article>

  </section>
);

}

export default AddWhateverSec;
