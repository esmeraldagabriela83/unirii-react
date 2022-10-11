import React , {useState , useEffect} from 'react' ;

function AddNrFromArr(props){

const {propWidth , propColor , propText}=props;

const [myText , setMyText]=useState("my text string");

const [sumNR , setSumNR]=useState(0);

//-----------------------------------------------------------------------------

const paragraphStyle={
  padding:"1em",
  margin:"1em",
  backgroundColor:"yellow"
}

const handleChangeMyText=(event) =>{
  setMyText("my changed text string");

  const btnChangeString=document.getElementById('btnChangeString');
  btnChangeString.style.color="red";
  btnChangeString.style.backgroundColor="yellow";
  btnChangeString.style.border="3px dotted orangered";
}

//-----------------------------------------------------------------------------

const myNrArr=[10, 20, 30, 50, 100];
console.log("--- myNrArr is : " , myNrArr);
//--- myNrArr is :  (5) [10, 20, 30, 50, 100]
let mySum=0;
  console.log("@@@---mySum before is : " , mySum);

const myNrParagraph=document.getElementById('myNrParagraph');

const handleAddNrArr=(event) =>{
  const myNrParagraph=document.getElementById('myNrParagraph');
  myNrParagraph.style.color="olive";
  myNrParagraph.style.backgroundColor="pink";
  myNrParagraph.style.fontWeight="bold";

  myNrArr.map((elNr , index) =>{
    //map are intotdeauna return
    mySum = mySum + elNr;
  })

  console.log("@@@---mySum after is : " , mySum);

  setSumNR(mySum);
  console.log("@@@---sumNR is : " , sumNR);
}

//-----------------------------------------------------------------------------

  return(
<section style={{border:`3px solid ${propColor}`}}>
<h1 style={{color:propColor, margin:"1em" , padding:"1em"}}>{propText}</h1>

<article style={{color:"MediumVioletRed" , margin:"1em" , padding:"1em" , border:`5px dotted LightSlateGray`}}>

<h3>myText is : {myText}</h3>
<button id="btnChangeString"
        style={{margin:"1em" , padding:"1em" , border:`3px solid ${propColor}` , fontWeight:"bold" , color:"cornflowerblue"}}
        onClick={handleChangeMyText}>
        change {myText}
</button>

<p id="myNrParagraph" style={paragraphStyle}>{myNrArr.join(" / ")}</p>
<button onClick={handleAddNrArr}>show sum of nr from arr</button>
<h3>sum is {sumNR}</h3>
</article>

</section>
  );
}

export default AddNrFromArr;

//
