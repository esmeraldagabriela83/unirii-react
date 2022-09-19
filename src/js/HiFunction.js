import React , {useState , useEffect} from "react" ;

// curs 33 6 05 2022
// general discord 7 mai 2022

function HiFunction(props){

const {propName , propSurname , propWidth , propColor , propText}=props;

const [hiColor , setHiColor]=useState("red");

const handleChangeHi=(event) =>{
  setHiColor("green");
};

  return(
    <article>

    <div style={{color:propColor , width:propWidth , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
    <p>color is propColor : {propColor}</p>
    <h3>Hi {propName} !</h3>
    <h3>My surname is:  {propSurname} !</h3>
    </div>

    <div style={{color:hiColor , width:propWidth , border:`3px dashed ${hiColor}` , padding:"1em" , margin:"1em"}}>
    <p>color is hiColor : {hiColor}</p>
    <button onClick={handleChangeHi}>changeColor</button>

    <h3>Hi {propName} !</h3>
    <h3>My surname is:  {propSurname} !</h3>
    </div>

    </article>
  );
}

export default HiFunction;
















//
