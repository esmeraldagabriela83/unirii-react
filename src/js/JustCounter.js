import React,{useState,useEffect} from 'react';


function JustCounter(props){

const {propWidth , propColor , propText}=props;

const btnCounterStyle={
  border:`3px dashed ${propColor}`,
  padding:"1em",
  margin:"1em",
  color:propColor
};

const [myCounter , setMyCounter] = useState(0);

const handleIcrease=(event) =>{
  setMyCounter(myCounter + 1);
}

const handleDecrease=(event) =>{
    setMyCounter(myCounter - 1);
}

//------------------------------------------------------------------------------

const handleAdd10=(event) =>{
  setMyCounter(myCounter + 10);
}

//------------------------------------------------------------------------------

const [myCounter2 , setMyCounter2]=useState(100);

const userChange=(event) =>{

setMyCounter2(event.target.value);

}

//------------------------------------------------------------------------------


const [myCounter3 , setMyCounter3]=useState(150);

const handleDivWidth=(event) =>{

const userNumber2=document.getElementById('userNumber2');
userNumber2.style.border=`3px dashed ${propColor}`;
document.getElementById('userDiv').style.border="3px solid red";
setMyCounter3(userNumber2.value);
}
//-----------------------------------------------------------------------------
const [myCounter4 , setMyCounter4]=useState(300);

const increaseHandleUser=(event) =>{

const userDiv4=document.getElementById('userDiv4');

console.log(myCounter4 + 50);

  setMyCounter4(myCounter4 + 50);
}

const decreaseHandleUser=(event) =>{

const userDiv4=document.getElementById('userDiv4');
console.log(myCounter4 - 50);
  setMyCounter4(myCounter4 -50);
}

//-----------------------------------------------------------------------------

const [myCounter5 , setMyCounter5]=useState(500);

const handleDivWidth5Increase=(event) =>{

const userNumber5Value=document.getElementById('userNumber5').value;
console.log(parseFloat(userNumber5Value) + myCounter5);
setMyCounter5(parseFloat(userNumber5Value) + myCounter5);
}

const handleDivWidth5Decrease=(event) =>{

const userNumber5Value=document.getElementById('userNumber5').value;
console.log(parseFloat(userNumber5Value) - myCounter5);
  setMyCounter5(myCounter5 - parseFloat(userNumber5Value));
}

return(
<section style={{color:propColor , border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em"}}>
<h1 style={{color:propColor , border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em"}}>{propText}</h1>

<button onClick={handleIcrease} style={btnCounterStyle}>click to increase by 1</button><br></br>

<button onClick={handleDecrease} style={btnCounterStyle}>click to decrease by 1</button>

<h3>myCounter is : {myCounter}</h3>

<button onClick={handleAdd10}>click to add 10</button>

<h3>myCounter + 10 is = {myCounter}</h3>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<input type="number" name="number" id="userNumber1" value={myCounter2} onChange={userChange}/>
<h3>myCounter2 is : {myCounter2}</h3>

<div style={{backgroundColor:propColor , height:"150px" , width:parseFloat(myCounter2) , color:"floralwhite"}}><strong>width set by code</strong></div>

</article>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>myCounter3 is : {myCounter3}</h3>
<input type="number" name="number" id="userNumber2" placeholder="write a number"/><br></br>
<button onClick={handleDivWidth}>click to modify div width</button>
<div id="userDiv" style={{backgroundColor:propColor ,margin:"1em" , height:"200px" , width:parseFloat(myCounter3) , color:"magenta"}}><strong>>my width is set by user</strong></div>
</article>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>myCounter4 is : {myCounter4}</h3>

<div id="userDiv4" style={{backgroundColor:propColor ,margin:"1em" , height:"200px" , width:`${myCounter4}px` , color:"yellow"}}><strong>my width is set by user / adding 50px</strong></div>
<button onClick={increaseHandleUser}>increase width with 50px by user</button><br></br>
<button onClick={decreaseHandleUser}>decrease width with 50px by user</button>
</article>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>myCounter5 is : {myCounter5}</h3>

<input type="number" name="number" id="userNumber5" placeholder="write a number"/><br></br>
<button onClick={handleDivWidth5Increase}>click to modify / increase div width by your nr</button><br></br>
<button onClick={handleDivWidth5Decrease}>click to modify / decrease div width by your nr</button>
<div id="userDiv5" style={{backgroundColor:propColor ,margin:"1em" , height:"200px" , width:`${myCounter5}px` , color:"red"}}><strong>modify my width by input value</strong></div>

</article>

</section>
);

}



export default JustCounter;

















//
