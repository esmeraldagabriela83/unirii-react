import React,{useState, useEffect, Component} from 'react';

class BulbDiscodClass extends Component{

  //merge in principiu datorita setarilo din babel (alea cu props)
      state = {
        bulbState: false
      }

      handleClick = (event, status) => {
            console.log("event",event.target);
            console.log("status",status);
            this.setState({bulbState:status});
          }
          /*
                                intotdeauna event la sfarsit
            FORMALI :            (////pf1,pf2,pf3.., event)
            TRANSMITERE BIND:    (this,pr1,pr2,pr3..)
                                intotdeauna am this in plus la inceput
          **/

          handleClickCls(status,event) {
            console.log("event",event.target);
            console.log("status",status);
            this.setState({bulbState:status});
          }

//------------------------------------------------------------------------------

render(){


  const {propWidth, propColor , propText} = this.props;
     console.log("this.props from inside BulbDiscodClass class component" , this.props);

//-----------------destructuring obj-------------------------------------------------------------

const {bulbState} = this.state;

      const stl = {
        width:"100px",
        height:"100px",
        border:"solid #333 3px",
        borderRadius:"50%",
        display:"flex",
        justifyContent: "center",
        alignItems:"center"
      }

//------------------------------------------------------------------------------

return(
  <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

  <h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>class component is : {propText}</h1>
  <h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>class component is : {propText.toLocaleUpperCase()}</h1>
  <h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>class component is : {propText.toLocaleLowerCase()}</h1>


  <div style={{...stl,backgroundColor:(bulbState ? "gold" : "white")}}>
              <button onClick={this.handleClickCls.bind(this,!bulbState)}>{bulbState ? 'Off' : 'On'}</button>
          </div>



  </section>
);
}

}

export default BulbDiscodClass;

//
