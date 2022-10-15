import React,{useState,useEffect} from 'react';
import DoButtonToClick from "./DoButtonToClick.js";

function DoButtonCounter(props){

const {propWidth , propColor , propText}=props;

const [counter , setCounter] = useState(0);

const handleChildData=(param) =>{
  console.log("PARAM IN PARENT IS : " , param);
  setCounter(counter + 1);
}

return(
  <section style={{border:`3px solid ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<h1>function component is : {propText}</h1>

<article style={{border:`5px solid ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>

<h3>Buttons clicked {counter}</h3>
<DoButtonToClick text={"First Button"} doClick={handleChildData} propWidthBtn={"350px"} propColorBtn={"green"} propTextBtn={"DoButtonToClick"}/><br></br>
<DoButtonToClick text={"Second Button"} doClick={handleChildData} propWidthBtn={"350px"} propColorBtn={"blue"} propTextBtn={"DoButtonToClick"}/><br></br>
<DoButtonToClick text={"Third Button"} doClick={handleChildData} propWidthBtn={"350px"} propColorBtn={"brown"} propTextBtn={"DoButtonToClick"}/><br></br>
<DoButtonToClick text={"Fourth Button"} doClick={handleChildData} propWidthBtn={"350px"} propColorBtn={"magenta"} propTextBtn={"DoButtonToClick"}/><br></br>

</article>

  </section>
);

}

export default DoButtonCounter;
