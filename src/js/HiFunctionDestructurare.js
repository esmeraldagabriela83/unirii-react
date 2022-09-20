import React , {useState , useEffect} from "react" ;

function HiFunctionDestructurare(props){

const {propName , propSurname , propAge , propColor}=props;

const [hiColorFunc , setHiColorFunc]=useState(propColor);

const handleChangeColorHi=(event) =>{
  setHiColorFunc("tomato");
}

return(
<section style={{border:`3px dotted ${hiColorFunc}` , padding:"1em" , margin:"1em"}}>
<h1>function component</h1>
<h3 style={{color:hiColorFunc}}>Salut {propSurname} {propName} ! Your age is : {propAge}</h3>

<button className="btnHiFunc" onClick={handleChangeColorHi}>change color</button><br></br>
</section>
);

}

export default HiFunctionDestructurare;




















//
