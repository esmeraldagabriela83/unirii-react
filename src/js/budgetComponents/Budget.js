import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";

import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

const Budget =(props) =>{

  const {propWidth , propColor , propText}=props;

//------------------------------------------------------------------------------

//const {budget}=useContext(AppContext);


const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};


  //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

// <div>
// <span>Budget: $ {budget}</span>
// </div>

<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>

    </section>
  );
}


export default Budget;
