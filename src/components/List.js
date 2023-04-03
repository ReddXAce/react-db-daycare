import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const List = ({name, toggleComplete, deleteList, editList}) => {
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