import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const List = ({kid, toggleComplete, deleteList, editList}) => {
  return (
    <div className='List'>
        <p /* I'll do something with this... onClick={() => toggleComplete(kid.id)} className={`${kid.completed ? 'completed':""}`}*/>
            {kid.kid}
        </p>
        <div /*stores icons*/>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editList(kid.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteList(kid.id)}/>
        </div>
    </div>
  )
}
