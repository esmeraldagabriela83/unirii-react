import React,{useState,useEffect} from 'react';
import ButtonToClick from './ButtonToClick';

console.log("salut from ButtonCounter.js");

function ButtonCounter(props){

  const [counter,setCounter] = useState(0);

      const handleChildData = (param) => {
        console.log("PARAM IN PARENT", param);
        setCounter(counter + 1);
      }

  return(
    <div style={{color:"red", backgroundColor:"yellow", padding:"1em"}}>
         <h1>Buttons clicked:{counter}</h1>
         <ButtonToClick text={"First Button"} doClick={handleChildData}/>
         <ButtonToClick text={"Second Button"} doClick={handleChildData}/>
     </div>
  );
}

export default ButtonCounter;
