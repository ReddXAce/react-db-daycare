import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//returns the lists, the items basically, and the icons and functions of the buttons
export const List = ({name, deleteList, editList}) => {
  return (
    <div className='List'>
        <p>
            {name.name}
        </p>
        <div /*stores icons*/>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editList(name.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteList(name.id)}/>
        </div>
    </div>
  )
}