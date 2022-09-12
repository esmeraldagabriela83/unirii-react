import React,{useState,useEffect} from 'react';

//function Box 13 05 2022 gr 1 discord

function UseEffectMainFunction(){
  const [mycolor,setMyColor] = useState("yellowgreen");

  const handleColor=(event) =>{
    setMyColor("magenta")
  }
//
  const [color,setColor] = useState("cornflowerblue");
    //echivalent componentDidMount
    //useEffect(functie, []) - array gol ca al doilea parametru

    useEffect(()=>{
    const tmid = setTimeout(() => {
      setColor("tomato")
    },5000)
  },[])

return(
  <>
  <div style={{width:"100px",height:"100px", margin:"1em",backgroundColor:mycolor}}></div>
  <button onClick={handleColor}> change div color</button>


<h1>use effect</h1>

<div style={{width:"100px",height:"100px", margin:"1em",backgroundColor:color}}></div>

  </>
);
}

export default UseEffectMainFunction;
