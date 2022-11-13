import React, {useState , useEffect} from 'react';


// ColorfulBoxes 13 05 2022 discord
//https://www.w3schools.com/jsref/jsref_foreach.asp
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach2

//chris Tutorial budget
//https://www.youtube.com/watch?v=aeYxBd1it7I
//React Budget App Tutorial | Learn how to use the Context API

//chris tutorial react table
//Create a Table in React | Learn how to view, add, delete and edit rows in a table from Scratch
//https://www.youtube.com/watch?v=dYjdzpZv5yc


function DiscordArrReact13052022(props){

  //destructurare props
  const {propWidth , propColor , propText}=props;

  //--------------------------------------------------------------------------------

const arrjs=[100 , 20 , 60 , 50 , 30];
//----//-------------------------------------------------------each item of the arr----

const arrjsSec=[100 , 20 , 60 , 50 , 30];
console.log("////////////////arrjsSec before forEach" , arrjsSec);

arrjsSec.forEach(myForEachFunction);

function myForEachFunction(item , index , arr){
return arr[index] = item + 500;
}

console.log("////////////////arrjsSec after forEach" , arrjsSec);
//---------------//-----------------sum of items from arr------------------------
const arrjsThird=[100 , 20 , 60 , 50 , 30];

  let reactSum=0;

arrjsThird.forEach(myForEachSumFunction);

function myForEachSumFunction(item){
  reactSum=reactSum + item;
console.log("///////////////reactSum" , reactSum);
  return reactSum;
}

//---------------------------------//-------------take nr from user and fiill the arr---------------------------------------------

const [usserArr , setUsserArr]=useState([]);

const [usserVal , setUsserVal]=useState(0);
//------------

const handleTakeUsserVal=(event) =>{
setUsserVal(event.target.value) ;
console.log("//////////////////usserVal after onChange event" , usserVal);

}

//--------------

const handleNrArr=(event) =>{

console.log("you click to add nr and show sum");
usserArr.push(usserVal);
console.log("//////////////////////usserArr" , usserArr);

const userArrNrStrong=document.getElementById('userArrNrStrong');
userArrNrStrong.innerText=usserArr.join(" , ");

//---------

let sumArrUSERnr=0;

usserArr.forEach(userSumReactFunction);

function userSumReactFunction(item){

sumArrUSERnr = sumArrUSERnr + parseFloat(item);

return sumArrUSERnr;

}

//------------
const userArrNrStrongSum=document.getElementById('userArrNrStrongSum');
userArrNrStrongSum.innerText=sumArrUSERnr;

//--------------------------------------------------------------------------
//Math.round(num)

console.log("Math.round method for 5 , 12345 is " , Math.round(5.12345));

//--------------------------------------get average-------------------------------------------

const userArrNrStrongAverage=document.getElementById('userArrNrStrongAverage');
userArrNrStrongAverage.innerText=Math.round(sumArrUSERnr/usserArr.length);

}

//-------------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>arr.join() method is : {arrjs.join(" , ")}</p>

<p>each item + 500 // arrjsSec.join() method is : {arrjsSec.join(" , ")}</p>

<p>sum of arr items is : {reactSum}</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label forHtml="usserInput">write temperature of the last day`s and get their average // then click btn<br></br>
<input type="number" name="usserInput" id="usserInput" placeholder="your nr" onChange={handleTakeUsserVal}/>
</label><br></br>

<button onClick={handleNrArr}>add item nr in arr and make their sum // get average</button>

<p>usserArr numbers are : <strong id="userArrNrStrong"></strong></p>

<p>sum of your numbers <strong id="userArrNrStrongSum"></strong></p>

<p>get average temperature <strong id="userArrNrStrongAverage"></strong></p>

</article>

</section>

);

}

export default DiscordArrReact13052022;
