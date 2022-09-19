import React , {Component} from "react";

class HiClass extends Component{

render(){

console.log("general discord 7 mai 2022");

const {propName , propSurname , propWidth , propColor , propText}=this.props;
console.log("===== props from HiClass are : " , propName , propSurname , propWidth , propColor , propText);

  return(
    <article>
    <h1 style={{color:propColor , width:propWidth , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>Hi from HiClass !</h1>

    <div style={{color:propColor , width:propWidth , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
    <h3>Hi {propName} !</h3>
    <h3>My surname is:  {propSurname} !</h3>
    </div>

    <div>

    </div>

    </article>
  );
}
}



export default HiClass;

//const [hiColor , setHiColor]=useState("red");
