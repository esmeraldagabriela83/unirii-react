import React, {useState} from 'react';

const styleBtnCata={
margin:"1em",
padding:"1em",
border:"3px solid gold"
};

function Counter13052022Cata(props){

const {propWidth , propColor , propText}=props;

//------------------------------------------------------------------------------

const [stateCata , setStateCata]=useState(
  {
    counterCata:0,
    colorCata:"blue"
  }
);

const [cntrCata , setCntrCata]=useState(0);
const [anotherColor , setAnotherColor]=useState("cyan");



//------------------------------------------------------------------------------

const handleCountCata=(event , valParam , valParamColor)=>{

console.log("stateCata is : " , stateCata);
console.log("stateCata.counterCata is : " , stateCata.counterCata);

let {counterCata}=stateCata;
counterCata = valParam != 0 ? counterCata + valParam : 0;


//-------------
let {colorCata}=stateCata;
colorCata = valParamColor != "" ? valParamColor : stateCata.colorCata;

setStateCata({...stateCata , counterCata:counterCata , colorCata:colorCata});

setCntrCata(valParam != 0 ? cntrCata + valParam : 0);
setAnotherColor(valParamColor != "" ? colorCata : stateCata.colorCata);

}

console.log("---rendering function component");
console.log(`---rendering from ${propText}`);


//--------------------------counter cata discor----------------------------------------------------


const [state ,  setState] = useState({
  counter:0
});

const [cntr,setCntr] = useState(0);

const handleCount = (val) => {
  console.log("state Catalin : " , state);
  console.log("cntr",cntr);
  let {counter} = state;
  counter = val != 0 ? counter + val : 0;
  setState({
    ...state,
    counter:counter
  })
  setCntr(val != 0 ? cntr + val : 0)
};
console.log("rendering...");


//------------------------------------------------------------------------------


return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1 id="titleH1" style={{margin:"1em" , padding:"1em" , border:`5px solid ${stateCata.colorCata}`}}>stateCata.counterCata is {stateCata.counterCata}</h1>

<h1 style={{margin:"0.5em" , padding:"0.5em" , border:`7px solid ${anotherColor}`}}>cntrCata is {cntrCata}</h1>

<h2>Click count {stateCata.counterCata} , {cntrCata}</h2>

<button style={styleBtnCata} onClick={(event) =>handleCountCata(event , 1 , "yellow")}>+</button>
<button style={styleBtnCata}  onClick={(event) =>handleCountCata(event , -1 , "orange")}>-</button>
<button style={styleBtnCata}  onClick={(event) =>handleCountCata(event , 0 , "crimson")}>reset</button>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h2>cata discord : Click count state.counter : {state.counter} , cntr : {cntr}</h2>

      <button style={styleBtnCata}  onClick={()=>handleCount(1)}>+</button>
      <button style={styleBtnCata}  onClick={()=>handleCount(-1)}>-</button>
      <button style={styleBtnCata}  onClick={()=>handleCount(0)}>Reset</button>
</article>

</section>

);

}

export default Counter13052022Cata;





















//
