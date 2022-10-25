import React, {useRef , useState , useEffect} from 'react';


function SpliceFuncComponent(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<a href="./pages/page2.html">link to page2.html for splice information</a>
</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
hope to be be links to outher html pages with array methods
</article>

  </section>
);



}


export default SpliceFuncComponent;











//
