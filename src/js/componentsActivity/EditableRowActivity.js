import React, {useState , useEffect} from 'react';
import { nanoid } from "nanoid";

function EditableRowActivity(props){

//destructurare props

const {editFormDataActivityProp , handleEditFormChangeActivityProp , handleCancelClickActivityProp}=props;

//----------------

return(

<>

<tr>



<td><input type="text" name="name" required="required" placeholder="write an activity" value={editFormDataActivityProp.name} onChange={handleEditFormChangeActivityProp}/></td>
<td><input type="number" name="price" required="required" placeholder="write price correct"  value={editFormDataActivityProp.price}  onChange={handleEditFormChangeActivityProp}/></td>

<td>

<button type="submit">save</button>
<button type="button" onClick={handleCancelClickActivityProp}>cancel</button>

</td>
</tr>

</>

)

}

export default EditableRowActivity;
















//
