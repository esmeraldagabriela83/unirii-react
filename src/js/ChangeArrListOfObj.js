import React, {useState , useEffect} from 'react';


import myBirds from "./birds.js";
import myCopaci from "./copaci.js";

function ChangeArrListOfObj(props){

  //destructurare props
  const {propWidth , propColor , propText}=props;

  //---------------------------------------------------------------------------

  //-----------------------------show copaci list or birds list------------16052022-------------------------------------

  const [userStateBulb , setUserStateBulb]=useState(false);

  const handleUserChangeList=(event , statusList) =>{

  console.log("you clicked to change list");
  console.log("statusList is : " , statusList);

  setUserStateBulb(statusList);

  }


//----------------------------------------------------------------------------
  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

  <article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

  { (userStateBulb ? myCopaci : myBirds).map((element , index) =>{

  //map are intotdeauna return
  return(

    <div key={index} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
    <p><strong>{element.code}   </strong>{element.name}</p>
    <p>{element.surname}</p>

    <div style={{
             height:"200px",
             width:"300px",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSize:"contain",
             backgroundImage:element.urlImage
             }}></div>

    <p>tel : {element.tel}</p>

    </div>


  );

  }) }

  <button onClick={(event) =>handleUserChangeList(event , !userStateBulb)}>{userStateBulb ? "tree list" : "bird list"}</button>

  </article>

  </section>

  );

}



export default ChangeArrListOfObj;









//
