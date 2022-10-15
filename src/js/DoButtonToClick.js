import React,{useState,useEffect} from 'react';


function DoButtonToClick({text, doClick , propWidthBtn , propColorBtn , propTextBtn}){
  const clickMe = (event) =>{
        if(typeof doClick === 'function') {
            doClick(text + " was clicked");

const paragraphText=document.querySelector(`.textParagraph`);
paragraphText.style.border=`3px solid ${propColorBtn}`;
paragraphText.style.padding="1em";
paragraphText.style.margin="1em";
paragraphText.style.color=`${propColorBtn}`;
paragraphText.innerText="text is : " +  text + " , from function component " + propTextBtn;
        }
    }

    return (<>

<p className="textParagraph"></p>

      <h1 style={{color:propColorBtn , border:`3px dotted ${propColorBtn}` , margin:"1em" , padding:"1em"}}>{propTextBtn}</h1>

      <article style={{color:propColorBtn , border:`3px solid ${propColorBtn}` , padding:"1em" , margin:"1em"}}>

      <button onClick={clickMe} style={{color:propColorBtn , border:`3px solid ${propColorBtn}` , padding:"1em" , margin:"1em"}}>{text}</button>

      </article>

  </>)
}

export default DoButtonToClick;












//
