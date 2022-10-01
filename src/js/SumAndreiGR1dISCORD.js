import React , {useState} from "react";

function SumAndreiGR1dISCORD(props){

const {propWidth , propColor , propText , firstNr , secondNr}=props;

const sumTwoNrs=firstNr + secondNr;
//------------------------------------------------------------------------------

const [stateSum , setStateSum]=useState(0);


const handleAddNrs=(event) =>{
  const userParagraphSum=document.getElementById('userParagraphSum');
  userParagraphSum.style.border=`3px dotted ${propColor}`;
  userParagraphSum.style.padding="1em";
  userParagraphSum.style.margin="1em";

  const firstInputNrValue=document.getElementById('firstInputNr').value;
  const secondInputNrValue=document.getElementById('secondInputNr').value;

  const userSum=parseFloat(firstInputNrValue) + parseFloat(secondInputNrValue);

userParagraphSum.innerText=userSum;

setStateSum(userSum);
}

//------------------------------------------------------------------------------

return(<>
  <article style={{border:`3px dotted ${propColor}` , color:propColor , padding:"1em" , margin:"1em"}}>
<h3>propText is : {propText}</h3>
<h3>sum of firstNr and secondNr is :  {firstNr + secondNr}</h3>
<h3>sumTwoNrs is : {sumTwoNrs}</h3>
  </article>

<article style={{border:`3px dotted ${propColor}` , color:propColor , padding:"1em" , margin:"1em"}}>
<p>user writes and add two numbers //  after UseEffectObjectChange function component</p>

<label htmlFor="firstNr">First nr:</label><br></br>
<input type="text" id="firstInputNr" name="firstInputNr" placeholder="write first nr"/><br></br>

<label htmlFor="secondNr">Second nr:</label><br></br>
<input type="text" id="secondInputNr" name="secondInputNr" placeholder="write second nr"/><br></br>

<button onClick={handleAddNrs}>click to add your numbers</button>
<p id="userParagraphSum">your sum is : {stateSum} </p>
</article>

</>);
}

export default SumAndreiGR1dISCORD;

//  <input type="text" name="text" id="usertextMihaela" placeholder="write a text" /><br></br>
