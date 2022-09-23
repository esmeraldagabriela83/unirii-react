import React , {useState , useEffect} from "react" ;

//general discord 14 mai 2022

function UserInfoAndrei(props){

const {propWidth , propColor , propText}=props;

//in pagina apare direct Niko Popescu
const [myName , setMyName] = useState(
  {
    name:"Andreea",
    surname:"Ionescu",
    age:45,
    photo:"https://images.unsplash.com/photo-1663757776973-4009cd89d969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  }
);

useEffect(() =>{
  console.log("did mount");

  setMyName(
  {  name:"Niko",
    surname:"Popescu",
    age:67,
    photo:"https://images.unsplash.com/photo-1663757776942-e14af9c11019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
  );
} , []);

useEffect(() =>{
  console.log("!!!   Name changed");
} , [myName] );


//------------------------------------------------------------------------------
//persoana se schimba numai la click on button
const [pagePerson , setPagePerson]=useState(
  {
    name:"Elena",
    surname:"Gavrila",
    age:27,
    photo:"https://images.unsplash.com/photo-1663699916826-7af23b0ea6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
  }
);

const handleChangePerson=(event) =>{

const pagePersonCopy={...pagePerson ,
  name:"Lenuta",
  surname:"Mihaila",
  age:56,
  photo:"https://images.unsplash.com/photo-1658632302262-957f74b1fdd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
};

  setPagePerson(pagePersonCopy);
}

const handleResetPerson=(event) =>{

const pagePersonReset={...pagePerson ,
  name:"Elena",
  surname:"Gavrila",
  age:27,
  photo:"https://images.unsplash.com/photo-1663699916826-7af23b0ea6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
};

  setPagePerson(pagePersonReset);
}

//------------------------------------------------------------------------------
const [timePerson , setTimePerson]=useState(
  {
    name:"Didina",
    surname:"Postolache",
    age:17,
    photo:"https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  }
);

useEffect(() =>{

const tmid=setTimeout(() =>{
const timePersonCopy={...timePerson ,
  name:"Angela",
  surname:"Iordache",
  age:95,
  photo:"https://images.unsplash.com/photo-1592621385645-e41659e8aabe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
}

  setTimePerson(timePersonCopy);
} , 5000)
console.log("what now? ");
} , []);

useEffect(() =>{
  console.log("timePerson changed");
} , [timePerson]);

//------------------------------------------------------------------------------
const [discordPerson , setDiscordPerson]=useState([
  {
    name:"Teodora",
    surname:"Sihla",
    age:25,
    photo:"https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  }
]);

//echivalent componentDidMount
  //useEffect(functie, []) - array gol ca al doilea parametru

useEffect(() =>{
  console.log("did mount");

setTimeout(() =>{
let discordPersonCopy=[...discordPerson];
discordPersonCopy[0].name="Paraschiva";
discordPersonCopy[0].surname="Iasi";
discordPersonCopy[0].age=40,
discordPersonCopy[0].photo="https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

setDiscordPerson(discordPersonCopy);
} , 5000);

} , []);

//echivalent componentDidUpdate
  //useEffect(functie, [stateVar]) - array care contine variabilele de state monitorizate

  useEffect(() =>{
console.log("did update");
//nu am voie sa-l modific pe clicks aici
    //nu am voie sa apelez setClicks!!!
  } , [discordPerson]);
//------------------------------------------------------------------------------

const [discordTree , setDiscordTree]=useState([
  {name:"treeFirst",
  surname:"alive",
  age:15,
  photo:"https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}
]);

const handleChangeTree=(event) =>{
  let discordTreeCopy=[...discordTree];
discordTree[0].name="treeSecond";
discordTree[0].surname="dead";
discordTree[0].age=157;
discordTree[0].photo="https://images.unsplash.com/photo-1520262454473-a1a82276a574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyZWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"

setDiscordTree(discordTreeCopy);
};
//------------------------------------------------------------------------------
const handleChangeResetTree=(event) =>{
  let discordTreeReset=[...discordTree];
  discordTree[0].name="treeFirst";
  discordTree[0].surname="alive";
  discordTree[0].age=15;
  discordTree[0].photo="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
  setDiscordTree(discordTreeReset);
}

  return(
    <section>
<h1 style={{width:propWidth , border:`3px dotted ${propColor}` , color:propColor , padding:"1em" , margin:"1em"}}>{propText}</h1>

<h3>Name of person is : {myName.name} {myName.surname} and {myName.age} years old.</h3>
<img src={myName.photo} alt="photo-person" style={{width:propWidth , height:"600px" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} />

<article style={{border:"3px solid olive" , padding:"1em" , margin:"1em"}}>
<h3>Name of person is : {pagePerson.name} {pagePerson.surname} and {pagePerson.age} years old.</h3>
<img src={pagePerson.photo} alt="photo-person" style={{width:propWidth , height:"600px" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} /><br></br>
<button onClick={handleChangePerson} style={{margin:"1em" , padding:"1em"}}>change the person</button><br></br>
<button onClick={handleResetPerson} style={{margin:"1em" , padding:"1em"}}>reset the first person</button>
</article>

<article style={{border:"3px solid magenta" , padding:"1em" , margin:"1em"}}>
<h3>Name of person is : {timePerson.name} {timePerson.surname} and {timePerson.age} years old.</h3>
<img src={timePerson.photo} alt="photo-person" style={{width:propWidth , height:"600px" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} /><br></br>
</article>

<article style={{border:"3px solid magenta" , padding:"1em" , margin:"1em"}}>
<h3>Name of person is : {discordPerson[0].name} {discordPerson[0].surname} and {discordPerson[0].age} years old.</h3>
<img src={discordPerson[0].photo} alt="photo-person" style={{width:propWidth , height:"600px" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} /><br></br>
</article>

<article style={{border:"3px solid magenta" , padding:"1em" , margin:"1em"}}>
<h3>Name of tree is : {discordTree[0].name} {discordTree[0].surname} and {discordTree[0].age} years old.</h3>
<img src={discordTree[0].photo} alt="photo-tree" style={{width:"750px" , height:"600px" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} /><br></br>
<button onClick={handleChangeTree}>change tree</button>
<button onClick={handleChangeResetTree}>reset tree</button>
</article>
    </section>
  );
}

export default UserInfoAndrei;
