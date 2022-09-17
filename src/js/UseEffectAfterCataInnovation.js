import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectAfterCataInnovation.js");

function UseEffectAfterCataInnovation(props){
const {propWidth , propColor , propText}=props;

const [colorText , setColorText]=useState("tomato");
const handleChangeColor=(event) =>{
  setColorText("cornflowerblue");
}
//
const [myFontText , setMyFontText]=useState(1.5);
const handleChangeFont=(event) =>{
  setMyFontText(2.5);
}
//
const [myFontSize, setMyFontSize]=useState(1.5);
const handleChangeFontSize=(event) =>{
  setMyFontSize(myFontSize =>myFontSize * 2);
}

const [myBackgroundColor , setMyBackgroundColor]=useState("red") ;
const [myColor, setMyColor]=useState("white");
const handleChangeColors=(event) =>{
  setMyBackgroundColor("skyblue");
  setMyColor(propColor);
}
//
const [myObjStyle , setMyObjStyle]=useState(
  {
    fontSize:1.5,
    color:"blue",
    backgroundColor:"yellow",
    margin:"1em",
    padding:"1em"
  }
);
console.log("!!! myObjStyle is : " , myObjStyle);

const handleChangeObjStyle=(event) =>{
  //destructurare object catalin
  const copymyObjStyle={...myObjStyle , fontSize:3.5, color:"tomato", backgroundColor:"floralwhite", margin:"1.5em", padding:"1.5em"};

  setMyObjStyle(copymyObjStyle);
}
//
const [myObjStyleSecond , setMyObjStyleSecond]=useState(
  {
    fontSize:2.5,
    color:"cornflowerblue",
    backgroundColor:"skyblue",
    margin:"0.5em",
    padding:"0.5em",
    text:"my default text"
  }
);
console.log("!!! myObjStyleSecond is : " , myObjStyleSecond);
const handleChangeObjStyleSecond=(event) =>{
  //folosesc arrow function
  setMyObjStyleSecond(previousObj =>{
    return {...previousObj, fontSize:1.5, color:"yellow", backgroundColor:"orange", margin:"0.5em", padding:"0.5em" , text:propText}
  });
}

//-----------------------------------------------------------------------------
const [firstNr, setFirstNr]=useState(200);
console.log("!!!---firstNr is : " , firstNr);
//change by useState
const handleChangeMultiply=(event) =>{
  //folosesc arrow function
  setFirstNr(firstNr => firstNr * 1.5)
}

//number este value introdus de mine in locul lui user
const mynumber=350;
console.log("!!!---mynumber is : " , mynumber);
const handleChangeNr=(event) =>{
  setFirstNr(mynumber);
}

const handleChangeNrAdd=(event) =>{
  //folosesc arrow function
  setFirstNr(mynumber =>mynumber + 30);
}
////change by useEffect 1
const [secondNr, setSecondtNr]=useState(200);
console.log("!!!---secondNr is : " , secondNr);

const mynumberSecond=450;
console.log("!!!---mynumberSecond is : " , mynumberSecond);

useEffect(() =>{
setSecondtNr(mynumberSecond);
} , []);

////change by useEffect 2
const [thirdNr, setThirdtNr]=useState(200);
console.log("!!!---thirdNr is : " , thirdNr);

const mynumberThird=450;
console.log("!!!---mynumberThird is : " , mynumberThird);
//ii schimb valoarea lui thirdNr cu mynumberThird
useEffect(() =>{
setThirdtNr(mynumberThird);
} , []);
//ii schimb valoarea lui thirdNr cu valoarea lui initiala
useEffect(() =>{
  console.log("did upDate" , thirdNr);
}, [thirdNr]);
//ii schimb valoarea lui thirdNr cu valoarea introdusa de user
const handleChangeByUser=(event) =>{
  setThirdtNr(event.target.value);
}

//userul schimba culoarea folosind useState
const [userColor, setUserColor]=useState("pink");
const handleChangeColorByUser=(event) =>{
  console.log("user changed color");
  setUserColor(event.target.value);
}

//userul schimba culoarea folosind useState
const [userTextColor , setUserTextColor]=useState("magenta");
const handleChangeColorTEXTByUser=(event) =>{
    console.log("user changed text color");
    setUserTextColor(event.target.value);
}
//userul schimba nr folosind useState
const [nrUser , setNrUser]=useState(50);
const handleChangeNRByUser=(event) =>{
    console.log("user changed nr color");
    setNrUser(parseFloat(event.target.value) + 10);
}

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>propText is : {propText}</h1>

<article style={{border:`3px solid ${colorText}` , padding:"1em" , margin:"1em"}}>
<h3 style={{color:colorText, fontSize:`${myFontText}rem`}}>firstNr is : {firstNr} and colorText is {colorText}</h3>
<button onClick={handleChangeColor}>change color text</button>
<button onClick={handleChangeFont}>change my fontSize</button>
</article>

<article style={{border:`3px solid ${myColor}` , padding:"1em" , margin:"1em"}}>
<h3 style={{color:myColor, fontSize:`${myFontSize}rem` , backgroundColor:myBackgroundColor , border:`3px solid ${propColor}` , padding:"0.5em" , margin:"1em"}}>firstNr is : {firstNr} and myColor is {myColor}</h3>
<button onClick={handleChangeFontSize}>change and increase the font size of above text</button>
<button onClick={handleChangeColors}>change colors</button>
</article>

<article style={{border:`3px solid ${myObjStyle.color}` , padding:"1em" , margin:"1em"}}>

<h3 style={{
  color:myObjStyle.color,
  backgroundColor:myObjStyle.backgroundColor ,
  fontSize:`${myObjStyle.fontSize}em` ,
  margin:myObjStyle.margin ,
  padding:myObjStyle.padding}}>
firstNr is : {firstNr} and myObjStyle.color is {myObjStyle.color}
</h3>
<button onClick={handleChangeObjStyle}>change values myObjStyle for all article</button>
</article>

<article style={{border:`3px solid ${myObjStyleSecond.color}` , padding:"1em" , margin:"1em"}}>
<h3 style={{
  color:myObjStyleSecond.color,
  backgroundColor:myObjStyleSecond.backgroundColor ,
  fontSize:`${myObjStyleSecond.fontSize}em` ,
  margin:myObjStyleSecond.margin ,
  padding:myObjStyleSecond.padding}}>
firstNr is : {firstNr} and myObjStyleSecond.color is {myObjStyleSecond.color} and text is {myObjStyleSecond.text}
</h3>
<button onClick={handleChangeObjStyleSecond} style={{color:myObjStyleSecond.color, fontWeight:"bold" , fontSize:"2rem"}}>change values myObjStyleSecond for all article</button>
</article>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<button onClick={handleChangeNr}>change nr by useState</button>
<button onClick={handleChangeMultiply}>multiply nr by useState</button>
<button onClick={handleChangeNrAdd}>add nr by useState</button>
<div style={{height:"100px" , width:`${firstNr}px` , border:`3px solid ${propColor}`, marginTop:"1em"}}><h3>firstNr is {firstNr}</h3></div>

<div style={{height:"100px" , width:`${secondNr}px`,  border:`3px solid ${propColor}` , marginTop:"1em"}}><h3>secondNr is {secondNr}</h3></div>


<div style={{height:"100px" , width:`${thirdNr}px`,  border:`3px solid ${propColor}` , marginTop:"1em" , backgroundColor:userColor, color:userTextColor}}>
<h3>thirdNr is {thirdNr} </h3>
</div>
<input type="number" name="number" id="myInputNr" value={thirdNr} onChange={handleChangeByUser} style={{margin:"0.5em"}}/><br></br>
<input type="text" name="text" id="myInputText"  placeholder="write a color" onChange={handleChangeColorByUser}/><br></br>
<input type="text" name="text2" id="myInputText2" value={userTextColor} onChange={handleChangeColorTEXTByUser}/><br></br>
</article>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>nrUser is : {nrUser}</h3>
<input type="text" name="textNr" id="textNr" placeholder="write a nr" onChange={handleChangeNRByUser}/>
</article>
  </section>
);

}
export default UseEffectAfterCataInnovation;






























//
