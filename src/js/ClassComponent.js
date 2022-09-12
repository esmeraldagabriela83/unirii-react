import React , {Component} from "react";
import ReactDOM from "react-dom";


class ClassComponent extends Component{

  render(){
    //destructurare a lui MyPropExerciseFunc
    const {colorClass , backgroundColorClass, textClass}=this.props;


      const styleH3={
        color:colorClass,
        backgroundColor:backgroundColorClass,
        border:"3px dashed green",
        margin:"1em 0"
      };

    console.log("@@@ colorClass , backgroundColorClass, textClass are : " , colorClass , backgroundColorClass, textClass);
    console.log("@@@ this.props are : " , this.props);
    return(
      <>
<h1 style={{color:colorClass , backgroundColor:backgroundColorClass , border:"3px dashed red", margin:"1em 0"}}>my class text is : {textClass}</h1>
<h3 style={styleH3}>{textClass}</h3>
      </>
    );
  }
}

export default ClassComponent;
