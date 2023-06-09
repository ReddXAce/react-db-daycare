import React, { useState } from 'react'

//Set up the hook to keep track of the value
export const ListForm = ({ addList }) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); //prevents page from reloading

        addList(value); //passes the value to the wrapper

        setValue("")//sets the value of the prompt to nothing when it submits
    }

    //Returns the form so that the user can write and stuff
    return (
        <form className='ListForm' onSubmit={handleSubmit}>
            <input type="text" className='list-input' value={value} placeholder='Child to Add' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='list-btn'>
                Add Child
            </button>
        </form>
    )
}
