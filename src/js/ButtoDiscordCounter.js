import React,{useState,useEffect} from 'react';
import ButtonToClickDiscord from "./ButtonToClickDiscord";


function ButtoDiscordCounter(props){

  const {propWidth , propColor , propText}=props;

  console.log(propWidth , propColor , propText);

  //----------------------------------------------------------------------------

const [mihCounter , setMihCounter]=useState(0);

const handleChildDataUserChange=(param) =>{

console.log("--- @@@ ---PARAM IN PARENT", param);

  setMihCounter(mihCounter + 1);
}



//----------------------------------------------------------------------------

  return(
    <section style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1>function component is : {propText}</h1>

<h3>Number of clicks by user are: {mihCounter}</h3>


<article style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>


<ButtonToClickDiscord textItemProp={"item 1"} colorProp={"red"} bgColor={"floralwhite"} doClickProp={handleChildDataUserChange} propWidth={"290px"} propColor={"cornflowerblue"} propText={"ButtoDiscordCounter"}/>
<ButtonToClickDiscord textItemProp={"item 2"} colorProp={"green"} bgColor={"skyblue"} doClickProp={handleChildDataUserChange} propWidth={"290px"} propColor={"cornflowerblue"} propText={"ButtoDiscordCounter"}/>
<ButtonToClickDiscord textItemProp={"item 3"} colorProp={"blue"} bgColor={"yellow"} doClickProp={handleChildDataUserChange} propWidth={"290px"} propColor={"cornflowerblue"} propText={"ButtoDiscordCounter"}/>
<ButtonToClickDiscord textItemProp={"item 4"} colorProp={"olive"} bgColor={"pink"} doClickProp={handleChildDataUserChange} propWidth={"290px"} propColor={"cornflowerblue"} propText={"ButtoDiscordCounter"}/>
<ButtonToClickDiscord textItemProp={"item 5"} colorProp={"white"} bgColor={"dimgray"} doClickProp={handleChildDataUserChange} propWidth={"290px"} propColor={"cornflowerblue"} propText={"ButtoDiscordCounter"}/>


</article>

    </section>
  );


}



export default ButtoDiscordCounter;












//
