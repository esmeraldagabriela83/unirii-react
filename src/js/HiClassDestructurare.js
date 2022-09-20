import React , {Component} from "react";

class HiClassDestructurare extends Component{
  render(){

console.log("general discord 7 mai 2022 / curs 33 teorie");

console.log("///--- this.props is : " , this.props);

    return(
      <section>
<h1>class component</h1>
<h3 style={{color:this.props.propColor}}>Salut {this.props.propSurname} {this.props.propName} ! I know your age is : {this.props.propAge}</h3>

      </section>
    );
  }
}

export default HiClassDestructurare;
//
