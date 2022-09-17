import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectAfterCata.js");

function UseEffectAfterCata(props){
const {propWidth , propColor , propText}=props;

//cata useState
const [count , setCount]=useState(0);
const handleCount=(event) =>{
  setCount(count + 3)
}
//
const [growCount , setGrowCount]=useState(0);
useEffect(() =>{
  const growTmid=setTimeout(() =>{
    setGrowCount(growCount + 1 )
  }, 3000)
})
//
const [myCount, setMyCount]=useState(0);
useEffect(() =>{
  const myTmid=setTimeout(() =>{
setMyCount(myCount + 3)
  }, 3000)
}, [])
//
const [tryCount, setTryCount]=useState(0);
useEffect(() =>{
  const tryTmid=setTimeout(() =>{
    setTryCount(tryCount + 7)
  },3000)
}, [tryCount])
//---------------------------------------------------------------------------------after InteractiveDiv general ex 5 forms day 3
const [countUserValue , setCountUserValue]=useState(200);
//number este value introdus de mine in locul lui user
const number=300;

useEffect(() =>{
  setCountUserValue(number)
}, []);

useEffect(() =>{
  console.log("did upDate" , countUserValue);
}, [countUserValue])

const handleChangeUser=(event) =>{
  setCountUserValue(event.target.value);
}

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>propText is : {propText}</h1>
<h3>count variable is : {count}</h3>
<button onClick={handleCount}>increase by 3</button>

<h3>growCount is : {growCount} and does not stop</h3>
<h3>myCount is : {myCount} si se schimba o singura data</h3>
<h3>tryCount is : {tryCount} and does not stop</h3>

<h3>countUserValue is : {countUserValue}</h3>
<input type="number" name="number" id="numberOne" value={countUserValue} onChange={handleChangeUser}  />
<div style={{width:parseFloat(countUserValue) , height:"300px" , border:`3px solid ${propColor}` , margin:"1em"}}></div>
  </section>
);
}

export default UseEffectAfterCata;
