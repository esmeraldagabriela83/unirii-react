import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectObjectChange.js");

function UseEffectObjectChange(props){
const {propWidth , propColor , propText}=props;

const  [objSingle , setObjSingle]=useState({
  myImg:"url(../../assets/images/albastru.png)",
  color:"green",
  backgroundColor:"yellow",
  myNr:100,
  myText:"my default string"
});

const handleCgangeState=(event) =>{
const objSingleCopy={...objSingle ,
                        myImg:"url(../../assets/images/copy.jpg)",
                        color:"red",
                        backgroundColor:"floralwhite",
                        myNr:101,
                        myText:"my changed 1 string"
                    };

setObjSingle(objSingleCopy);
}

//change by useEffect 2
const  [objSingle2 , setObjSingle2]=useState({
  myImg:"url(../../assets/images/forest3.JPG)",
  color:"olive",
  backgroundColor:"Cyan",
  myNr:102,
  myText:"my default 2 string"
});

const  objSingle2Changed={
  myImg:"url(../../assets/images/myPhoto2.JPG)",
  color:"gray",
  backgroundColor:"LightSkyBlue",
  myNr:1022,
  myText:"my changed 2 string"
};

//change by useEffect 1 afiseaza direct modificarile in pagina
// useEffect(() =>{
// setObjSingle2(objSingle2Changed)
// } , [])

useEffect(() =>{

const tmidObj=setTimeout(() =>{
  setObjSingle2(objSingle2Changed)
} , 5000)

} , []);



  return(
    <section style={{color:propColor , border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em" }}>
<h1 style={{color:propColor}}>propText is : {propText}</h1>

<div style={{color:objSingle.color , border:`3px solid ${objSingle.color}` , backgroundColor:objSingle.backgroundColor, padding:"1em" , margin:"1em"}}>
<h3 style={{margin:"0.5em", padding:"0.5em"}}>objSingle.myNr is : {objSingle.myNr}</h3>
<h3 style={{margin:"0.5em", padding:"0.5em"}}>objSingle.myText is : {objSingle.myText}</h3>

<div style={{
             padding:"1em",
             backgroundImage:objSingle.myImg,
                 width:propWidth,
                 height:"200px",
                 margin:"1em" ,
                 border:`3px dotted ${objSingle.color}`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"cover"
            }}>{objSingle.myImg}</div>

<button onClick={handleCgangeState}>change the state</button>
</div>

<div style={{color:objSingle2.color , border:`3px solid ${objSingle2.color}` , backgroundColor:objSingle2.backgroundColor, padding:"1em" , margin:"1em"}}>
<div style={{ padding:"1em",
                 backgroundImage:objSingle2.myImg,
                 width:propWidth,
                 height:"200px",
                 margin:"1em" ,
                 border:`3px dotted ${objSingle2.color}`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"cover"
            }}>{objSingle2.myImg}</div>


</div>

    </section>
  );
}

export default UseEffectObjectChange;
