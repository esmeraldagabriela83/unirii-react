import React, {Component} from "react";

console.log("hello from ExampleComponent.js");

class ExampleComponent extends Component{
  //se declanseaza primul o singura data : la invocarea componentei (pentru fiecare componenta invocata)
   constructor(props){
     console.log("CONSTRUCTOR")
     super(props);
     this.state = {
       counter: 0
     }
     this.arr = [
       "nimic",
       "primul",
       "al doilea",
       "al treilea",
       "al patrulea",
       "al cincilea"
     ]
   }
   //se declanseaza dupa prima "randare" a componentei
   componentDidMount(){
     console.log("MOUNT");
   }
   //se declanseaza la fiecare modificare de STATE
   componentDidUpdate(){
     console.log("STATE UPDATE");
   }
   //se dclqnseaza cand componenta dispare din pagina
   componentWillUnmount(){
     console.log("UNMOUNT");
   }

   handleNext=(event) =>{
     event.preventDefault();
     this.setState({
       counter:this.state.counter + 1
     })
   }

   handlePrev=(event) =>{
     event.preventDefault();
     this.setState({
       counter:this.state.counter - 1
     })
   }


   render(){
     return(
       <>
<section style={{backgroundColor:"yellowgreen", padding:"1em" , border:"3px dashed indigo" , margin:"1em"}}>

<div><a href="#" onClick={this.handlePrev}>prev link button like</a></div>
<h1>{this.arr[this.state.counter]}</h1>
<div><a href="#" onClick={this.handleNext}>next link button like</a></div>

</section>
       </>
     );
   }
}

export default ExampleComponent;








































//
