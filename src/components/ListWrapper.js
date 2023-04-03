import React, {useState} from 'react'
import { ListForm } from './ListForm'
import { v4 as uuidv4} from 'uuid'
import { List } from './List';
import { EditListForm } from './EditList';
uuidv4();

export const ListWrapper = () => {
    const [lists, setLists] = useState([])

    const addList = list => {
        setLists([...lists, {id: uuidv4(), name: list, completed: false, isEditing: false}]) //makes a copy of the current lists. Should have named it kids, tbh.
        console.log(lists)
    }

    const editList = id => {
        setLists(lists.map(list => list.id === id ? {list, isEditing: !list.isEditing} : list ))
    }

/*    const toggleComplete = id => {
        setLists(lists.map(list => list.id === id ? {list, completed : !list.completed} : list))
    }*/

    const deleteList = id => {
        setLists(lists.filter(list => list.id !== id))
    }

    const editName = (name, id) => {
        setLists(lists.map(list => list.id === id ? {
            list, name, isEditing: !list.isEditing} : list))
    }
  return (
    <div className='ListWrapper'>
        <h1> Daycare System </h1>
        <ListForm addList={addList}/>
        {lists.map((list, index) => ( 
            list.isEditing ? (
            <EditListForm editList={editName} name={list}/>
        ) : (
            <List name={list} key={index} /* toggleComplete={toggleComplete} placeholder */ deleteList={deleteList} editList={editList}/>
        )
            
        ))}
    </div>
  )
}
