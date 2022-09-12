import React, {useState} from 'react';

//UpperLower function 13 05 2022 elena discord gr 1


function UseStateFuncComponent(props){

const [string, setString] = useState(props.string);
console.log("!!! string is : " , string);

const handleUpper=(event) =>{
  setString(string.toUpperCase())
}

const handleLower=(event) =>{
  setString(string.toLowerCase())
}

  return(
    <section style={{color:"crimson", backgroundColor:"floralwhite", padding:"1em"}}>

<h1>use state</h1>
<h1>{props.string}</h1>

<button onClick={handleUpper}> Upper Case</button>
<h1>{string}</h1>
<button onClick={handleLower}> Lower Case</button>

    </section>
  )
}

export default UseStateFuncComponent;
