import React , {useState , useEffect} from 'react' ;

function ModifyCounterByUser(props){

const {propWidth , propColor , propText}=props;

const [myState , setMyState]=useState(30);

//componenta controlata de mine
const myChoosenNr=100;

useEffect(() =>{
  setMyState(myChoosenNr);
} , []);

useEffect(() =>{
  console.log("did upDate from ModifyCounterByUser function component");
} ,[myState]);


//componente necontrolate de mine , user hotaraste cand scrie in input
const handleChangeUserIncrease=(event) =>{
  setMyState(parseFloat(event.target.value) + 1);
}

const handleChangeUserDecrease=(event) =>{
    setMyState(parseFloat(event.target.value) - 1);
}

  return(
    <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , margin:"1em" , padding:"1em" , border:`3px solid ${propColor}`}}>function component is : {propText}</h1>

<h3>myState is : {myState} and is equal to myChoosenNr because of useEffect modification</h3>
<h3>myChoosenNr is {myChoosenNr}</h3>

<label>
write a number to increase by 1 to myState:<br></br>

<input type="number" name="number" id="numberFromInputForIncrease" value={myState} onChange={handleChangeUserIncrease} style={{border:`3px solid ${propColor}` , outline:"none" , padding:"1em" , margin:"1em"}}/><br></br>
write a number to decrease by  1 to myState:<br></br>
<input type="number" name="number" id="numberFromInputForDecrease" value={myState} onChange={handleChangeUserDecrease} style={{border:`3px solid ${propColor}` , outline:"none" , padding:"1em" , margin:"1em"}}/>

</label>

    </section>
  );
}

export default ModifyCounterByUser;
