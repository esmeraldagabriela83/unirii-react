import React, {Component} from "react";
import ReactDOM from "react-dom";
console.log("hello helloo from AnotherColorClass.js");


class AnotherColorClass extends Component {

  constructor(props){
      //  console.log("constructor");
        super(props);
        this.state = {
          backgroundColor: 'yellow',
          backgroundColorSecondDiv: 'red',
          btnChangeColor:"gray"
        }
      }
      componentDidMount(){
  //    console.log("didMount");
        const intervalIdTimer = setInterval(()=>{
            this.setState({
              backgroundColor: "blue"
            })
        },5000)
      }

      componentDidUpdate(){
    //  console.log("didUpdate")
      }



////////////////////////////////////////////////////////////////////////////////
//la click schimba backgroundColor pt al 2-lea div
clickDiv = (event) => {
       //console.log("IN CLASS clicking");
       this.setState({
          backgroundColorSecondDiv: "green"
        })
     }
//la click schimba culoarea celui de al 3-lea div
     clickBtn = (event) => {
               console.log("IN CLASS clicking");
               this.setState({
                  btnChangeColor: "MediumTurquoise"
                })
             }

////////////////////////////////////////////////////////////////////////////////
render(){
  //console.log("render");
  return <>
        <div style={{backgroundColor:this.state.backgroundColor, width:"100px", height:"100px"}}></div>
        <div onClick={this.clickDiv} style={{backgroundColor:this.state.backgroundColorSecondDiv, width:"100px", height:"100px"}}></div>

        <div style={{border:"3px solid gold"}}>
        <div style={{backgroundColor:this.state.btnChangeColor, width:"100px", height:"100px"}}></div>
        <button onClick={this.clickBtn}>change my color</button>
        </div>
        </>
};

}

export default AnotherColorClass;

//




























//
