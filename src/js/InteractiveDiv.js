import React,{useState,useEffect} from 'react';

//20.05.2022 discord grupa1
console.log("hello from InteractiveDiv.js");

function InteractiveDiv(props){

  //componenta controlata pt ca este legata de state  , si are event onChange
      const [userValue,setUserValue] = useState(50.45);

      //number este value introdus dec mine in locul lui user
const number=100;

//useEffect are 2 parametri : arrow function si []
//prin componenta controlata , prin variabila number se stabileste width a div-ului afisat in pag
useEffect(() =>{
   setUserValue(number)
}, [])

//useEffect are 2 parametri : arrow function si [userValue]
useEffect(() =>{
console.log("did update" , userValue);
}, [userValue])

const handleChange = (event) => {
      setUserValue(event.target.value);
      //citeste ce scrie utilizatorul si se transmite in state lui userValue , la eventul onChange
      //width are valoarea introdusa de user
    }

return(
  <div id="fragment-parent">

      <label style={{display:"block" , marginTop:"1em" , marginBottom:"1em"}}>write a number in the input interface(body I see on screen-desktop):
                  <input type="number" name="number" id="numberOne" value={userValue} onChange={handleChange}  />
              </label>

              <div id="div-child" style={{border:"5px solid red" ,
                                          backgroundColor:"yellow",
                                          height:"300px",
                                          width:parseFloat(userValue)}}></div>

      </div>
);
}

export default InteractiveDiv;











































//
