import React, {useRef , useState , useEffect} from 'react';

//https://www.youtube.com/watch?v=JLu4aBNZ-Po&t=364s

//CRUD Operations Insert, Update and Delete in React Js || Map the Inserted Value in React js

const formInputStlFromPedro={
  padding:"1em",
  margin:"1em 0",
  border:"3px solid dimgray",
  outline:"none",
  borderRadius:"15px"
}

//------------------------------------------------------------------------------

//------------------------------------------------------------------------------

function Crud(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

  const [name,setName]=useState("");
      const [allData,setAllData]=useState([]);
      const [show,setShow]=useState(false);
      const [editIndex,setEditIndex]=useState("");

      const handleAdd=()=>{
          if(name.length!==0){
          setAllData(newData=>[...newData,name])
          setName("")
          }
      };

      const handleDelete=(index)=>{
          allData.splice(index,1)
          setAllData([...allData])
      };

      const handleEdit=(i)=>{
          setName(allData[i])
          setShow(true)
          setEditIndex(i)
      };
      const handleUpdate=()=>{
          allData.splice(editIndex,1,name)
          setAllData([...allData])
          setShow(false)
          setName("")
      };

      //------------------------------------------------------------------------

      console.log("--- allData is : " , allData);

      return(
          <div>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is : {propText}</h1>

              <h1>CRUD Insert, Update and Delete</h1>
              <input value={name} onChange={(e)=>setName(e.target.value)} style={formInputStlFromPedro}/>
              {!show?<button onClick={handleAdd} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>Add</button>:
              <button onClick={handleUpdate} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>Update</button>}

              {
                  allData.map((val,index)=>
                  <div key={index}>
                      <h1>{val}</h1>
                      <button className="edit" onClick={()=>handleEdit(index)}  style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>Edit</button>
                      <button className="delete" onClick={()=>handleDelete(index)}  style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>Delete</button>
                  </div>
                  )
              }
          </div>
      );

//-----------------------------------------------------

}


export default Crud;


//
