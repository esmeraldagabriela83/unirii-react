import React, {Component} from "react";
//after ex 3 events discord gr 1  — 09.05.2022

function HoverDiscordFunc(props){

const {propWidth , propColor , propText}=props;

const handleHoverButton=(event) =>{
  console.log("you hovered the button from function component");
     console.log(`propText is ${propText}`);

const hoverBtnFunc=document.getElementById('hoverBtnFunc');
  hoverBtnFunc.style.backgroundColor=propColor;
  hoverBtnFunc.style.color="white";
  //----------------------------------------------------------------------------

  const hoverFuncTitle=document.getElementById('hoverFuncTitle');
  hoverFuncTitle.style.color=propColor;
  hoverFuncTitle.style.backgroundColor="yellow";
  hoverFuncTitle.innerText="you hovered the button from function component";
}

  return(
    <section style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>{propText}</h3>

<button onMouseOver={handleHoverButton} id="hoverBtnFunc" style={{margin:"1em" , padding:"1em"}}>HOVER BUTTON func</button>
<h3 id="hoverFuncTitle"></h3>
    </section>
  );
}

//export default HoverDiscordFunc;


class HoverDiscordClass extends Component{

 handleClassHover=(event) =>{
    console.log("you hovered the button from class component");

    const hoverBtnClass=document.getElementById('hoverBtnClass');
    hoverBtnClass.style.backgroundColor="olive";
    hoverBtnClass.style.color="white";

    //--------------------------------------------------------------------------

    const hoverClassTitle=document.getElementById('hoverClassTitle');
    hoverClassTitle.innerText="you hovered the button from class component";
    hoverClassTitle.style.backgroundColor="olive";
    hoverClassTitle.style.color="white";
  }

render(){

  const {propWidth, propColor , propText} = this.props;
     console.log("this.props from inside HoverDiscordClass function component" , this.props);
     console.log(`propText is ${propText}`);
     console.log(`propWidth is ${propWidth}`);
     console.log(`propColor is ${propColor}`);

  return(
    <section style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h3>{propText}</h3>

<button onMouseOver={this.handleClassHover} id="hoverBtnClass" style={{margin:"1em" , padding:"1em"}}>HOVER BUTTON class</button>
<h3 id="hoverClassTitle"></h3>
    </section>
  )
}
}

export {HoverDiscordFunc , HoverDiscordClass};
