import React,{useState,useEffect} from 'react';

console.log("hello from UseEffectObjectChange.js");

function UseEffectObjectChange(props){
const {propWidth , propColor , propText}=props;
//change by useState
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

//change by useState with values from inputs 1 , each input with its button
const  [objSingle3 , setObjSingle3]=useState({
  myImg:"url(../../assets/images/forest4.JPG)",
  color:"brown",
  backgroundColor:"cornsilk",
  myNr:0,
  myText:"my default string"
});

//change photo
const handleChangePhotoCostel=(event) =>{
const costelImgChoice=document.getElementById('userPhotoCostel').value;
console.log("costelImgChoice is : " , costelImgChoice);

  const objSingle3Copy={...objSingle3 , myImg:costelImgChoice};
  setObjSingle3(objSingle3Copy);
}

//change color
const handleChangeColorCostel=(event) =>{
const costelColorChoice=document.getElementById('userColorCostel').value;

const objSingle3Copy={...objSingle3 , color:costelColorChoice};
setObjSingle3(objSingle3Copy);
}

//change backgroundColor
const handleChangeBackgroundColorCostel=(event) =>{
  const userbackgroundColorCostel=document.getElementById('userbackgroundColorCostel').value;

  const objSingle3Copy={...objSingle3 , backgroundColor:userbackgroundColorCostel};
  setObjSingle3(objSingle3Copy);
}

//change nr
const handleChangeNrCostel=(event) =>{
const userNrCostel=document.getElementById('userCostelNr').value;

const objSingle3Copy={...objSingle3 , myNr:parseFloat(userNrCostel) + 1000};
  setObjSingle3(objSingle3Copy);
}

//change text by userNr
const handleChangeTextCostel=(event) =>{
  const usertextCostel=document.getElementById('usertextCostel').value;

  const objSingle3Copy={...objSingle3 ,myText:usertextCostel};
  setObjSingle3(objSingle3Copy);
}

//change by useState with values from inputs 2 , one button
const  [objSingle4 , setObjSingle4]=useState({
  myImg:"url(../../assets/images/yellowCV.jpg)",
  color:"red",
  backgroundColor:"Cyan",
  myNr:0,
  myText:"my default string"
});

const handleChangeAllMihaela=(event) =>{

  const userPhotoMihaela=document.getElementById('userPhotoMihaela').value;
  const userColorMihaela=document.getElementById('userColorMihaela').value;
  const userbackgroundColorMihaela=document.getElementById('userbackgroundColorMihaela').value;
  const userMihaelaNr=document.getElementById('userMihaelaNr').value;
  const usertextMihaela=document.getElementById('usertextMihaela').value;

  const objSingle4Copy={...objSingle4 , myImg:userPhotoMihaela ,color:userColorMihaela , backgroundColor:userbackgroundColorMihaela, myNr:parseFloat(userMihaelaNr) + 3000 ,  };
  setObjSingle4(objSingle4Copy);
}

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

<article style={{color:objSingle3.color , border:`7px solid ${objSingle3.color}` , backgroundColor:objSingle3.backgroundColor, padding:"1em" , margin:"1em"}}>

<h4>change the image, introduce this: </h4>
<h3>url(../../assets/images/flower3.JPG)</h3><em>or</em>
<h3>url(../../assets/images/photo2.jpg)</h3>

<div style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>

<input type="text" name="text" id="userPhotoCostel" placeholder="copy and insert one of the above h3" /><br></br>
<button onClick={handleChangePhotoCostel}>change image</button><br></br>
<div style={{ padding:"1em",
                 backgroundImage:objSingle3.myImg,
                 width:propWidth,
                 height:"200px",
                 margin:"1em" ,
                 border:`3px dotted ${objSingle3.color}`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"cover"
            }}>{objSingle3.myImg} {objSingle3.myNr}</div>

</div>

<div style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>
<input type="text" name="color" id="userColorCostel" placeholder="write a color" /><br></br>
<button onClick={handleChangeColorCostel}>change color</button><br></br>
</div>

<div style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>
<input type="text" name="backgroundColor" id="userbackgroundColorCostel" placeholder="write a backgroundColor" /><br></br>
<button onClick={handleChangeBackgroundColorCostel}>change backgroundColor</button>
</div>

<div style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>
<input type="number" name="number" id="userCostelNr" placeholder="write a number and change" />
<button onClick={handleChangeNrCostel}>add number + 1000</button>
</div>

<div style={{border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>
<h1 style={{color:propColor}}>objSingle3.myText is : {objSingle3.myText}</h1>
<input type="text" name="text" id="usertextCostel" placeholder="write a text" /><br></br>
<button onClick={handleChangeTextCostel}>change text</button>
</div>

</article>

<article style={{color:objSingle4.color , border:`5px solid ${objSingle4.color}` , backgroundColor:objSingle4.backgroundColor, padding:"1em" , margin:"1em"}}>

<h4>change the image, introduce this: </h4>
<h3>url(../../assets/images/word-page3.png)</h3><em>or</em>
<h3>url(../../assets/images/albastru.png)</h3>
      <input type="text" name="text" id="userPhotoMihaela" placeholder="copy and insert one of the above h3" /><br></br>
<div style={{ padding:"1em",
                 backgroundImage:objSingle4.myImg,
                 width:propWidth,
                 height:"200px",
                 margin:"1em" ,
                 border:`3px dotted ${objSingle4.color}`,
                 backgroundRepeat:"no-repeat",
                 backgroundPosition:"center",
                 backgroundSize:"cover"
            }}>{objSingle4.myImg} {objSingle4.myNr}</div>
            <h3>color text</h3>
            <input type="text" name="text" id="userColorMihaela" placeholder="change color" /><br></br>
            <h3>backgroundColor</h3>
            <input type="text" name="backgroundColor" id="userbackgroundColorMihaela" placeholder="write a backgroundColor" /><br></br>
            <h3>nr + 3000</h3>
            <input type="number" name="number" id="userMihaelaNr" placeholder="write a number and change" /><br></br>
            <h1 style={{color:propColor}}>objSingle4.myText is : {objSingle4.myText}</h1>
            <h3>change text</h3>
            <input type="text" name="text" id="usertextMihaela" placeholder="write a text" /><br></br>

            <button onClick={handleChangeAllMihaela}>change all</button><br></br>

</article>

    </section>
  );
}

export default UseEffectObjectChange;
