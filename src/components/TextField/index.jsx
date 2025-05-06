import React, { useState } from 'react';
import Draggable from 'react-draggable';

function TextField() 
{
    // States
    const [value, setValue] = useState("Double tab to edit");
    const [editMode, setEditMode] = useState(false);

    return (
        <>
            <Draggable>
            {
                editMode ? <input type="text" className='form-control' placeholder='Double tab to save' 
                value={value} onChange={ (e) => setValue(e.target.value) }
                onDoubleClick={ () => setEditMode(false) }  />
                : <h5 onDoubleClick={ () => setEditMode(true) }> { value } </h5>
            }
            </Draggable>
        </>
    );
}
 
export default TextField;