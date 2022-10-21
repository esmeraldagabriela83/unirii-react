import React,{useState,useEffect} from 'react';
import BtnToShowContent from "./BtnToShowContent.js";


function DoShowMyText(props){

const {propWidth , propColor , propText}=props;


const [counterNr,setCounterNr] = useState(0);
const [totalSumItems , setTotalSumItems]=useState(0);

const imgSrc1="https://images.unsplash.com/photo-1666297143162-ee2657710183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const imgSrc2="https://plus.unsplash.com/premium_photo-1661380615917-4e19220f4c89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";
const imgSrc3="https://images.unsplash.com/photo-1666292507133-4668ed16b1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60";

const handleChildDataItem=(param , priceParam) =>{
  console.log("PARAM IN PARENT", param , priceParam);
  setCounterNr(counterNr + 1);
  setTotalSumItems(totalSumItems + priceParam);
}

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>function component is : {propText}</h1>

<h3>counterNr is : {counterNr}</h3>

<BtnToShowContent textProp={"lorem ipsum 1"} imgProp={imgSrc1} doClickChange={handleChildDataItem} propWidth={"300px"} propColor={"red"} propText={"BtnToShowContent"} idProp={1} priceItemProp={10}/>
<BtnToShowContent textProp={"lorem ipsum 2"} imgProp={imgSrc2} doClickChange={handleChildDataItem} propWidth={"500px"} propColor={"blue"} propText={"BtnToShowContent"} idProp={2} priceItemProp={20}/>
<BtnToShowContent textProp={"lorem ipsum 3"} imgProp={imgSrc3} doClickChange={handleChildDataItem} propWidth={"700px"} propColor={"green"} propText={"BtnToShowContent"} idProp={3} priceItemProp={30}/>


<p>total is : <strong>{totalSumItems}</strong></p>

  </section>
);


}


export default DoShowMyText;
