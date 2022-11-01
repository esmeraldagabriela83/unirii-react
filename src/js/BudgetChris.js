import React, {useRef , useState , useEffect} from 'react';
import {AppProvider} from "././contextBudget/AppContext.js";

import Budget from "././budgetComponents/Budget.js";
import Remaining from "././budgetComponents/Remaining.js";
import ExpenseTotal from "././budgetComponents/ExpenseTotal.js";
import ExpenseList from "././budgetComponents/ExpenseList.js";
import AddExpenseForm from "././budgetComponents/AddExpenseForm.js";

//import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap not working for me

//-----------
//https://github.com/chrisblakely01/react-budget-app
//-----------

//john Smilga free code camp Coding Addict
//React Budget App Tutorial | Learn how to use the Context API
//https://www.youtube.com/watch?v=aeYxBd1it7I&t=303s

//chris Budget
//React Budget App Tutorial | Learn how to use the Context API
//https://www.youtube.com/watch?v=aeYxBd1it7I&t=304s


function BudgetChris(props){

  const {propWidth , propColor , propText}=props;



  //------------------------------------------------------------------------------

  return(
    <AppProvider>
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

  <h1>My Budget Planner with useContext</h1>

  <div className="threeDivs">

  <div>
  <Budget   propWidth={"750px"} propColor={"purple"} propText={"Budget"}/>
  </div>

  <div>
  <Remaining   propWidth={"750px"} propColor={"SeaGreen"} propText={"Remaining"}/>
  </div>


  <div>
  <ExpenseTotal   propWidth={"750px"} propColor={"Orchid"} propText={"ExpenseTotal"}/>
  </div>

  </div>

  <h3>Expenses</h3>
  <div>
  <ExpenseList   propWidth={"750px"} propColor={"SteelBlue"} propText={"ExpenseList"}/>
  </div>


  <h3>Add expense</h3>
  <div>
  <AddExpenseForm   propWidth={"250px"} propColor={"tomato"} propText={"AddExpenseForm"}/>
  </div>

    </section>
    </AppProvider>

  );
}


export default BudgetChris;











//
