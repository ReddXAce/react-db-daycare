import React, {useState} from 'react'

export const EditListForm = ({editList, name}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault(); //prevents page from reloading

        editList(value, name.id); //passes the value to the wrapper

        setValue("")//sets the value of the prompt to nothing when it submits
    }
  return (
    <form className='ListForm' onSubmit={handleSubmit}>
        <input type="text" className='list-input' value={value} placeholder='update Kid' onChange={(e) => setValue(e.target.value)}/>
         <button type='submit' className='list-btn'>
            Update
         </button>
        </form>
  )
}
