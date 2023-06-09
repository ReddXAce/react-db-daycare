import React, { useState } from 'react'

//Set up the hook to keep track of the input value
export const EditListForm = ({ editList, name }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); //prevents page from reloading

        editList(value, name.id, name.isEditing) //passes the value to the wrapper

        setValue("")//sets the value of the prompt to nothing when it submits
    }

    //Shows the actual form when the edit button is pressed
    return (
        <form className='ListForm' onSubmit={handleSubmit}>
            <input type="text" className='list-input' value={value} placeholder='Update Kid' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='list-btn'>
                Update
            </button>
        </form>
    )
}
