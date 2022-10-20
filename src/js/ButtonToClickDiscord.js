import React,{useState,useEffect} from 'react';


function ButtonToClickDiscord(props){
  const {textItemProp , colorProp, bgColor , doClickProp,   propWidth , propColor , propText}=props;

  console.log(textItemProp , colorProp, bgColor , doClickProp,   propWidth , propColor , propText);

  //----------------------------------------------------------------------------

  const clickMeBtnDiscord=(event) =>{
    console.log(`you clicked the btn  ${textItemProp}`);

    console.log("--- textItemProp is : " , textItemProp);

if( typeof doClickProp === 'function' ){
  doClickProp(textItemProp + "was clicked by user");
}

const itemParagraphTextAll=document.querySelectorAll('#myArticleItems .itemParagraphText');

console.log("--- ### --- itemParagraphTextAll is : " , itemParagraphTextAll);

for(let i=0 ; i<itemParagraphTextAll.length ; i++){

itemParagraphTextAll[i].style.padding="1em";
itemParagraphTextAll[i].style.margin="1em";
itemParagraphTextAll[i].style.border=`3px solid ${propColor}`;
itemParagraphTextAll[i].style.color=colorProp;
itemParagraphTextAll[i].style.backgroundColor=bgColor;
}

  }

//------------------------------------------------------------------------------

return(
  <section style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>

<article id="myArticleItems" style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<p>textItemProp is : <em>{textItemProp}</em></p>

<button onClick={clickMeBtnDiscord}>click to show {textItemProp}</button>

<p className="itemParagraphText">{textItemProp}</p>

</article>

  </section>
);


}







export default ButtonToClickDiscord;


//
