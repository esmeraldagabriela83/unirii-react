import React, {useState} from 'react';

console.log("hello from ToDoList.js");

function ToDoList(props){

const [arr, setArr]=useState([]);
const [nr, setNr]=useState(0);

console.log("rendering");

//modific state folosind arrow ShowTextFunction
const addTask=(event) =>{
  setNr(nr + 1);

//clonez list din state si adaug valoarea!!!!
   const newArr = [...arr, nr];
   //setez variabila cu valoare clonei
   console.log("arr is : " , arr);
   setArr(newArr);

}

return(
  <section style={{border:"3px solid tomato" , padding:"1.5em" , margin:"1em"}}>

<button onClick={addTask}>add task</button><br></br>
//key sau id = indexul fiecarui element din arr
<article style={{border:"3px solid forestgreen" , padding:"1.5em" , margin:"1em"}}>{arr.map( (elnr,index) => {
         return <h3 key={index} style={{border:"3px solid yellowgreen" , padding:"1.5em" , margin:"1em"}}>Task {elnr}</h3>
       })}</article>

  </section>
);
}

export default ToDoList;























//
