import React , {useState} from "react" ;

//discord general 13 mai 2022  curs 36     13 05 2022    ex 2 useState day 2 react

function ColorfulBoxes(props){

const {propWidth , propColor , propText}=props;

const [list , setList]=useState([]);
const [counter,setCounter] = useState(0);

console.log("rendering ColorfulBoxes");

const addColor=(event) =>{
  let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  //clonez list din state si adaug valoarea!!!!
const newCopyList=[...list , randomColor];
 console.log("list is an array : " , list);
//setez variabila cu valoare clonei
  setList(newCopyList);

  setCounter(counter + 1);
console.log("from ColorfulBoxes counter has become : " , counter);
}

return(
<>
<button onClick={addColor} style={{padding:"0.5em" , margin:"0.5em" , color:propColor}}>Add box each time with another color!</button>

{list.map((elColor , index) =>{
  //map are intotdeauna return
  return <div key={index} style={{width:propWidth , height:"100px" , backgroundColor:elColor , border:`5px dotted ${propColor}` , margin:"0.5em"}}>counter is <em>{counter}</em></div>
})}

</>
);
}

export default ColorfulBoxes;
