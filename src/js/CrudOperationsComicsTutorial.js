import React,{useState,useEffect} from 'react';

//CRUD Operations Insert, Update and Delete in React Js || Map the Inserted Value in React js
//https://www.youtube.com/watch?v=JLu4aBNZ-Po


function CrudOperationsComicsTutorial(props){

  const {propWidth , propColor , propText}=props;

  const allStyleBox={
    border:`3px dotted ${propColor}`,
    padding:"1em",
    margin:"1em"
  };


//------------------------------------------------------------------------------
const [nameCrudCata , setNameCrudCata]=useState("");

//------------------------------------------------------------------------------

const handleCataChange=(event) =>{
  setNameCrudCata(event.target.value);
  console.log("/// nameCrudCata from Cata function is : " , nameCrudCata);
}

const handleClickCata=(event) =>{
  setNameCrudCata(event.target.value);
  console.log("/// nameCrudCata from Cata function on btn is : " , nameCrudCata);

const valueNameInput=document.getElementById('valueNameInput');
  valueNameInput.innerText=nameCrudCata;
}

//------------------------------------------------------------------------------
const [nameCrud , setNameCrud]=useState("");
const [allData , setAllData]=useState([]);


const handleAddTutorial=(event) =>{
  console.log("---///--- nameCrud from tutorial function is : " , nameCrud);

if(nameCrud.length !== 0){
  //destructurare array pt copiere
  const newCopyAllData=[...allData , nameCrud];
  setAllData(newCopyAllData);
}

}

console.log("---///--- allData" , allData);

//------------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is : {propText}</h1>
<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>insert , update , delite</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<input type="text" name="crudInputTextCata" id="crudInputTextCata" placeholder="your name cata" style={allStyleBox} onChange={handleCataChange}/>

<button onClick={handleClickCata}>cata btn</button>

<p>nameCrudCata with the input value  is : <em id="valueNameInput" style={{padding:"1em" , margin:"1em" , border:"3px dashed cornflowerblue" , fontWeight:"bold"}}></em> </p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<input type="text" name="crudInputTextTutorial" id="crudInputTextTutorial" value={nameCrud} style={allStyleBox}  onChange={(event) =>{setNameCrud(event.target.value)}}/><br></br>

<button style={allStyleBox} onClick={handleAddTutorial} >add</button>

</article>

    </section>
  );

}

export default CrudOperationsComicsTutorial;

//
