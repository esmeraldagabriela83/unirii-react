import React, {useRef , useState , useEffect} from 'react';

function ShowPersonObjFromArr(props){

  const {propWidth , propColor , propText , propPersons}=props;

  console.log("---!!!---propPersons is : " , propPersons);
  //---!!!---propPersons is :  (5) [{…}, {…}, {…}, {…}, {…}]
  console.log("---!!!---propPersons.length is : " , propPersons.length);
  //---!!!---propPersons.length is :  5

  //propPersons a devenit myPersons din persons.js

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is : {propText}</h1>

<h1>all persons are from persons.js , from myPersons array :</h1>

  <article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

{
  propPersons.map((elPerson , indexPerson) =>{
    //map are intotdeauna return
    return(
      <div key={indexPerson} style={{border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
  <h3>person is : {elPerson.name} {elPerson.surname}</h3>
  <p>code is : {elPerson.code}</p>
  <h3>tel is : {elPerson.tel}</h3>
  <div style={{
    border:`3px solid ${propColor}`,
    height:"300px",
    width:propWidth,
    margin:"1em",
    padding:"1em",
    backgroundColor:"yellow",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundSize:"cover",
    backgroundImage:elPerson.urlImage
  }}></div>
      </div>
    );
  })
}

  </article>



  </section>
);

}

export default ShowPersonObjFromArr;

//
