import React, {useState,useEffect} from 'react';

function TextFieldgr1(props){

const {propWidth , propColor , propText}=props;

const [selected , setSelected]=useState("");
const [options , setOptions]=useState([]);

const handleChangeUser=(event) =>{
  setSelected(event.target.value);
}

useEffect(() =>{
  const time = Math.floor(5 + Math.random()*95) * 30;
      console.log("Request time:",time);


      setTimeout(() =>{

        const result = [
                {
                  text:"First",
                  myvalue:"one"
                },
                {
                  text:"Second",
                  myvalue:"two"
                },
                {
                  text:"Third",
                  myvalue:"three"
                },
                {
                  text:"Fourth",
                  myvalue:"four"
                },
              ];

setOptions(result);


      } , time);


} , []);

  return(
    <>
<h1 style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>{propText}</h1>

{options.length == 0 ? <h3>Loading .. . . please wait</h3> :
  <>
<select name="fields" id="fields" value={selected} onChange={handleChangeUser}>
<option value={""}>Please select</option>

{options.map((element , index) =>{
  //map are intotdeauna return
  return <option key={index} value={element.value}>{element.text}</option>
})}

</select>

{selected !== "" && <>
          <p>{selected}</p>
          <span>{selected.length} characters</span>
          </>}

<p>selected is : {selected}</p>
  </>
}

    </>
  );
}

export default TextFieldgr1;
























//
