import React, {useRef , useState , useEffect} from 'react';
import myBirds from "./birds.js";


function ShowPersonAndTreesObjFromArrAndBtn(props){

  const {propWidth , propColor , propText , propPersons , propCopaci}=props;

  console.log("...propPersons is : " , propPersons);
  console.log("...propPersons.length is : " , propPersons.length);

  console.log("...propCopaci is : " , propCopaci);
  console.log("...propCopaci.length is : " , propCopaci.length);

  console.log("...myBirds is :" , myBirds);
  console.log("...myBirds.length is : " , myBirds.length);


  //------------------------------------------------------------------------------

const [personArrDefault , setPersonDefault]=useState(propPersons);

  //--------------------------------------------------------------------------
const handleChangePersons=(event) =>{
  setPersonDefault(propPersons);
}

  const handleChangeTrees=(event)=>{
    setPersonDefault(propCopaci);
  }

  const handleChangeBirds=(event)=>{
    setPersonDefault(myBirds);
  }

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

    <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is : {propText}</h1>

  <article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
  {
    personArrDefault.map((elPerson , indexPerson) =>{
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

<button onClick={handleChangePersons}>change into persons</button>
<button onClick={handleChangeTrees}>change into trees</button>
<button onClick={handleChangeBirds}>change into birds</button>

  </article>

  </section>
);

}


export default ShowPersonAndTreesObjFromArrAndBtn;


//
