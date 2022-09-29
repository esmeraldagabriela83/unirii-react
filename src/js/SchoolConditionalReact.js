import React, {useState,useEffect} from 'react';


// Logical && Operator
// Another way to conditionally render a React component is by using the && operator.


function SchoolConditionalReact(props){

  const {propWidth , propColor , propText, propStateTrue , propStateFalse , carsProp}=props;
console.log("--- !!! @@@ carsProp from SchoolConditionalReact is : " , carsProp);

//--- !!! @@@ carsProp from SchoolConditionalReact is :  (3) ['Ford', 'BMW', 'Audi']

//------------------------------------------------------------------------------

const [mySchoolCarsState, setMySchoolCarsState]=useState(propStateFalse);
console.log("////---- mySchoolCarsState from SchoolConditionalReact is : " , mySchoolCarsState);
// ////---- mySchoolCarsState from SchoolConditionalReact is :  false

const handleChangeMySchoolCarsState=(event) =>{
  setMySchoolCarsState("true");
}
//------------------------------------------------------------------------------

const [mySchoolCarsArr , setMySchoolCarsArr]=useState([]);
console.log("---///--- mySchoolCarsArr from SchoolConditionalReact function component is :" , mySchoolCarsArr);

const handleChangeMySchoolCarsArr=(event) =>{
  setMySchoolCarsArr(carsProp);
}


return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1>{propText}</h1>
 <h1>Garage</h1>

{carsProp.map((elCar, index) =>{
  //map are intotdeauna return
  return <ul key={index} style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<li style={{border:`3px solid red` , padding:"1em" , margin:"1em"}}>elCar from carsProparray is <strong>{elCar}</strong></li>
  </ul>
})}

{carsProp.length > 0 &&
<h3 style={{border:`3px solid tomato` , padding:"1em" , margin:"1em"}}>You have <em>{carsProp.length}</em> cars in your garage.</h3>
}

<article style={{border:`3px solid green` , padding:"1em" , margin:"1em"}}>
{mySchoolCarsState == "false" ? <h3>don`t waite</h3> :
<div>
<h3>my cars are :</h3>
{carsProp.map((elCar , index) =>{
  //map are intotdeauna return
  return <ul key={index} style={{border:"3px dotted indigo"}}>
<li  style={{border:`3px solid yellowgreen` , padding:"1em" , margin:"1em"}}>elCar is : <strong>{elCar}</strong></li>
  </ul>
})}
</div>
}
<button onClick={handleChangeMySchoolCarsState}>click to show cars</button>
</article>

<article style={{border:`3px solid gold` , padding:"1em" , margin:"1em"}}>

{mySchoolCarsArr.map((elCar , index) =>{
  //map are intotdeauna return
  return <ul key={index} style={{border:`3px solid cornflowerblue` , padding:"1em" , margin:"1em"}}>
<li style={{border:`3px solid gold` , padding:"1em" , margin:"1em"}}>elCar is : <strong>{elCar}</strong></li>
  </ul>
})}

<button onClick={handleChangeMySchoolCarsArr}>click to show cars from mySchoolCarsArr</button>

</article>

  </section>
);

}

export default SchoolConditionalReact;












//
