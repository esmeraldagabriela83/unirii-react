import React, {useState , useEffect} from 'react';
//Counter function component 13 05 2022

import myBirds from "./birds.js";
import myCopaci from "./copaci.js";
import mypersons from "./persons.js";

const styleBtnAll={
  margin:"1em",
  padding:"1em",
  border:"3px dotted yellowgreen"
};


function ChangeClickBtnArrListOfObj(props){

  //destructurare props
  const {propWidth , propColor , propText}=props;

  //---------------------------------------------------------------------------
const [arrList , setArrList]=useState([]);

const handleChangeList=(event , userList) =>{

console.log("user clicked btn to change list");
console.log("userList is : " , userList);

setArrList(userList);

};


  //-----------------------------------------------------------------------------


  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>


  {arrList.map((listEl , index) =>{
  //map are intotdeauna return
    return(
      <div key={index} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
  <p><strong>{listEl.code}   </strong>{listEl.name}</p>
  <p>{listEl.surname}</p>

  <div style={{
               height:"200px",
               width:"300px",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"center",
               backgroundSize:"contain",
               backgroundImage:listEl.urlImage
               }}></div>

  <p>tel : {listEl.tel}</p>

      </div>
    );
  })}


<button style={styleBtnAll} onClick={(event) =>handleChangeList(event , myBirds)}>birds</button>
<button style={styleBtnAll} onClick={(event) =>handleChangeList(event , myCopaci)}>trees</button>
<button style={styleBtnAll} onClick={(event) =>handleChangeList(event , mypersons)}>person</button>


  </section>

  );


}

export default ChangeClickBtnArrListOfObj;


//
