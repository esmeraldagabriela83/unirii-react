import React , {useState , useEffect} from 'react' ;

function DiscordInteractiveGr1(props){

const {propWidth , propColor , propText}=props;


  //componenta controlata pt ca este legata de state  , si are event onChange

const [anyUserValue , setAnyUserValue]=useState(25.85);
//mynumber este value introdus dec mine in locul lui user
const mynumber=150;

//eu modific controlat valoarea lui anyUserValue pt ca ii dau valoarea mynumber care imi apartine din js file

useEffect(() =>{
  setAnyUserValue(mynumber);
} , []);


useEffect(() =>{
  console.log("did upDate from DiscordInteractiveGr1 function component");
} , [anyUserValue]);


//componenta necontrolata , pt ca anyUserValue isi ia valoarea  din input , unde scrie userValue
const anyUserHandleChange=(event) =>{
  setAnyUserValue(event.target.value);
        //citeste ce scrie utilizatorul si se transmite in state lui anyUserValue , la eventul onChange
}


return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>function component is : {propText}</h1>

<div id="div-parent">

<label style={{display:"block"}}>
write a number in the input interface(body) seen on screen-desktop<br></br>

<input type="number" name="number" id="numberOne" value={anyUserValue} onChange={anyUserHandleChange} />

</label>

<p>anyUserValue este prima data cu valoarea lui mynumber , adica <strong>{mynumber}</strong> apoi devine ceea ce scrie user in input, anyUserValue : <strong>{anyUserValue}</strong></p>

<div id="div-child" style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , height:"100px" , width:parseFloat(anyUserValue)}}>
{anyUserValue}
</div>

</div>

  </section>
);

}

export default DiscordInteractiveGr1;
