import React, {useState , useEffect} from 'react';
import { nanoid } from "nanoid";

function ReadOnlyRowActivity(props){

//destructurare props

const {nContactProp , indexProp , handleEditClickActivityProp , handleDeleteClickActivityProp}=props;

//----------------

return(

<>


<tr key={indexProp}>
<td>{nContactProp.name}</td>
<td>{nContactProp.price}</td>

<td>
<button type="button" onClick={(event) => handleEditClickActivityProp(event , nContactProp)}>edit</button>
<button type="button" onClick={(event) => handleDeleteClickActivityProp(nContactProp.id)}>delete</button>
</td>
</tr>


</>

)

}

export default ReadOnlyRowActivity;
















//
