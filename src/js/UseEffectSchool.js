import React, {useState , useEffect} from "react";

console.log("hello from UseEffectSchool.js");
//https://www.w3schools.com/react/react_useeffect.asp

function UseEffectSchool(props){

const {propWidth , propColor , propText}=props;

const [count, setCount]=useState(0);

// useEffect accepts two arguments. The second argument is optional.
// useEffect(<function>, <dependency>)
useEffect(() =>{
  setTimeout(() =>{
    setCount((count) => count + 1)
  },10000)
});

//useState catalin to increase the count1 nr variable
const [count1, setCount1]=useState(0);

const handleCount1=(event) =>{
  setCount1((count1) => count1 + 5)
}


  return(
<>
<article style={{border:`3px solid ${propColor}` , margin:"1em" , padding:"1em"}}>

<h1>UseEffectSchool text:{propText}</h1>

</article>
<h3 style={{backgroundColor:propColor , color:"white"}}>{propText}</h3>
<h1>I`ve rendered {count} times !</h1>

<h1>I INCREASE by 5 ONLY IF YOU CLICK THE BUTTON: {count1}</h1>
<button onClick={handleCount1}>click to increase</button>
</>
  );
}

export default UseEffectSchool;

















//
