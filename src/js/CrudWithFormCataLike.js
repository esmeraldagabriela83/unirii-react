import React, {useRef , useState , useEffect} from 'react';


//https://www.youtube.com/watch?v=dYjdzpZv5yc
//Create a Table in React | Learn how to view, add, delete and edit rows in a table from Scratch


function CrudWithFormCataLike(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>crud with form cata like curs 41</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

</article>

    </section>
  );


}

export default CrudWithFormCataLike;
///
