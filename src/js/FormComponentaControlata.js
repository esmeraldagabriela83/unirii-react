import React, {useState} from "react";

//20.05.2022 grupa1 discord

//COMPONENTA CONTROLATA
function FormComponentaControlata(props){

  //1.variabila de state pentru memorat valoarea (cu valoare implicita setata)
   const [name,setName] = useState("Your name here");

 //2.functie de event cu parametru event de asociat input-ului
 const handleChange=(event) =>{
   setName(event.target.value);
   document.getElementById('userValueIntroduced').innerText=event.target.value;
 }


  return(<>
    <form>
        <h1>Hello, {name}</h1>

        <input
        type="text"
        name="name"
        id="name"

        value={name}

        onChange={handleChange}/>
    </form>

    <h3 id="userValueIntroduced" style={{color:"darkgreen", backgroundColor:"orange", padding:"1em"}}></h3>

</>  )
}

export default FormComponentaControlata;

//  {/*orice componenta controlata are atributul value*/}
//    {/*orice componenta controlata are asociata pe onChange o functie care opereaza evenimentul*/}
