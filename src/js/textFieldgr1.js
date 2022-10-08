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
    <article style={{padding:"1em" , margin:"1em" , border:"3px dotted yellowgreen"}}>
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
          <p>Selected  is {selected}</p>
          <span>your option has {selected.length} characters</span>
          </>}

<p>selected is : {selected}</p>
  </>
}

    </article>
  );
}

//export default TextFieldgr1;


function TextAndImageFieldgr1(props){

const {propWidth , propColor , propText}=props;

const [selected,setSelected] = useState("");
 const [options,setOptions] = useState([]);

 const [mySrc,setMySrc] = useState("");
 const [myColor,setMyColor] = useState("");
 const [loremIpsum,setLoremIpsum] = useState("");

//------------------------------------------------------------------------------

const handleChangeUserSecond=(event) =>{

const myIndex=parseInt(event.target.value);

if(options[myIndex] !== undefined){
  setSelected(event.target.value);

  console.log("event.target is " , event.target);
  console.log("options[myIndex] is " , options[myIndex]);

  setMySrc(options[myIndex].src);
  setMyColor(options[myIndex].color);
  setLoremIpsum(options[myIndex].lorem);
}

}

//------------------------------------------------------------------------------

useEffect(()=>{
    const timeSec = 5000;
    console.log("Request timeSec:",timeSec);

    setTimeout(()=>{
      const resultSec = [
        {
          text:"Apples",
          value:"apples",
          src:"https://images.unsplash.com/photo-1610397962076-02407a169a5b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
          color:"teal",
          lorem:"lorem ipsum"
        },
        {
          text:"PEARS",
          value:"Pears",
          src:"https://images.unsplash.com/photo-1631160299919-6a175aa6d189?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          color:"gray",
          lorem:"lorem ipsum lorem ipsum"
        },
        {
          text:"TOMATOES",
          value:"tomatoes",
          src:"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG9tYXRvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500",
          color:"cornflowerblue",
          lorem:"lorem ipsum lorem ipsum lorem ipsum"
        },
        {
          text:"NUTS",
          value:"nuts",
          src:"https://images.unsplash.com/photo-1543158181-1274e5362710?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
          color:"pink",
          lorem:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
        },
      ];

      setOptions(resultSec);
    },timeSec);

  },[])



  return(
<article style={{padding:"1em" , margin:"1em" , border:"3px dotted yellowgreen"}}>
<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>{propText}</h1>

{/*valabil pentru jsx in HTML functioneaza altfel, vezi SELECT pe W3SCHOOLS*/}
      {options.length == 0 ? <h2>Loading... please wait</h2> :
        <section>
          <select name="fields" id="fields" value={selected} onChange={handleChangeUserSecond}>
              <option value={""}>Please select</option>
              {options.map((el,index)=>{
                return (
                  <>
                  <option key={index} value={index}>{el.text}</option>
                  </>
                )
              })}
          </select>
          {selected !== "" && <>
          <p>selected is {selected}</p>
          <span>YOUR OPTION HAS {selected.length} characters</span>

              <div style={{border:"3px solid yellow", padding:"3em", margin:"1.5em"}}>
                   <p>{loremIpsum}</p>
                   <img src={mySrc} alt={selected}
                        style={{border:"3px solid yellowgreen",
                                width:"300px" ,
                                height:"250px",
                                padding:"1.5em",
                                backgroundColor:myColor}}/>

              </div>

                  </>}
      </section>
     }

</article>
  );
}

function TextFieldFirst(props){

const {propWidth , propColor , propText}=props;

const [selected , setSelected]=useState("");

const handleChangeFirst=(event) =>{
  setSelected(event.target.value);
}

return(
  <article style={{margin:"1em" , padding:"1em" , border:"3px solid red"}}>
<h1 style={{margin:"1em" , padding:"1em" , border:`3px solid ${propColor}` , color:propColor}}>{propText}</h1>

 {/*valabil pentru jsx in HTML functioneaza altfel, vezi SELECT pe W3SCHOOLS*/}

 <select name="fields" id="fields" value={selected} onChange={handleChangeFirst}>

<option value={""}>Please select</option>
<option value={"option 1"}>option first</option>
<option value={"option 2"}>option second</option>
<option value={"option 3"}>option third</option>
<option value={"option 4"}>option fourth</option>
<option value={"option 5"}>option fifth</option>
 </select>

{selected !== "" &&
<>
<p>selected is {selected}</p>
<p>your option has {selected.length} characters</p>
</>}

  </article>
);

}

export {TextFieldgr1 , TextAndImageFieldgr1 , TextFieldFirst};






















//
