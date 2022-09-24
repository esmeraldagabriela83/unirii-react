import React , {useState , useEffect} from "react" ;

function ColorfulBoxesUseEffect(props){

const {propWidth , propColor , propText}=props;

const [list , setList]=useState([]);
console.log("rendering ColorfulBoxesUseEffect");

useEffect(() =>{
  console.log("--- useEffect from ColorfulBoxesUseEffect");

  const tmid=setTimeout(() =>{
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    //clonez list din state si adaug valoarea!!!!
    const newCopyList=[...list , randomColor];
    console.log("list is an array : " , list);
    console.log("didMount");
    //setez variabila cu valoare clonei
    setList(newCopyList);
  } , 5000)
} , []);

useEffect(() =>{
console.log("action took place from ColorfulBoxesUseEffect function component");
console.log("didUpDate");
}, [list]);

return(
  <>
  {list.map((elColor , index) =>{
    //map are intotdeauna return
    return <div key={index} style={{width:propWidth , height:"100px" , backgroundColor:elColor , border:`5px dotted ${propColor}` , margin:"0.5em"}}>
I appear after 5 seconds , only once
    </div>
  })}
  </>
);

}

export default ColorfulBoxesUseEffect;
