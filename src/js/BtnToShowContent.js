import React,{useState,useEffect} from 'react';

function BtnToShowContent(props){

const {textProp , imgProp , doClickChange , propWidth , propColor , propText , idProp , priceItemProp}=props;

const clickForContent=(event) =>{

if(typeof doClickChange === 'function'){
doClickChange(textProp , priceItemProp);
}

}

return(
  <section id="contentSection" style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

  <h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>function component is : {propText}</h1>

  <button onClick={clickForContent}>btn {idProp}</button>

<p>textProp is : {textProp}</p>
<p><strong>priceItemProp is : {priceItemProp}</strong> $</p>

<img src={imgProp} alt="img should be here" style={{width:propWidth , height:"300px" , border:`3px solid ${propColor}`}}/>

  </section>
);

}


export default BtnToShowContent;

/////////
