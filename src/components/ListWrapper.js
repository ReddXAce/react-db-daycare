import React, { useState , useEffect } from 'react'
import { ListForm } from './ListForm'
import { v4 as uuidv4} from 'uuid'
import { List } from './List';
import { EditListForm } from './EditList';
import { db } from './Firebase';
import { query, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
uuidv4();


export const ListWrapper = () => {
    const [lists, setLists] = useState([])

    useEffect(() => { //THIS READ THE THINGS IN THE DATABASE HOLYYY SHEEETETTTTTT IT WORKS
        const q = query(collection(db, "kiddos"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let listsArr = [];
          querySnapshot.forEach((doc) => {
            listsArr.push({ ...doc.data(), id: doc.id, isEditing: false });
          });
          setLists(listsArr);
        });
        return () => unsubscribe();
      }, []);
      

const addList = async (list) => { //THIS PUSHES THE THINGS TO FIREBASE HOLY SHIT IT ACTUALLY WORKS
    try {
      const docRef = await addDoc(collection(db, "kiddos"), {
        name: list,
        isEditing: false,
      });
      const newList = { id: docRef.id, name: list, isEditing: false };
      setLists([...lists, newList]);
      console.log(lists);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const editList = id => {
    setLists(lists.map(list => list.id === id ? {
        ...list,
        isEditing: !list.isEditing
    } : list))
}

    const deleteList = async (id) => { //deletes things from the database. istg the fact that this is working is OUTSTANDING
        try {
          await deleteDoc(doc(db, "kiddos", id));
          setLists(lists.filter(list => list.id !== id));
        } catch (error) {
          console.error("Error deleting document: ", error);
        }
      }

      const editName = async (name, id) => {
        try {
            const docRef = doc(db, "kiddos", id);
            await updateDoc(docRef, {
                name: name
            });
            setLists(lists.map(list => list.id === id ? {
                ...list,
                name: name,
                isEditing: !list.isEditing
            } : list));
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

  return (
    <div className='ListWrapper'>
        <h1> Daycare System </h1>
        <ListForm addList={addList}/>
        {lists.map((list, index) => ( 
            list.isEditing ? (
            <EditListForm editList={editName} name={list}/>
        ) : (
            <List name={list} key={index} deleteList={deleteList} editList={editList}/>
        )
            
        ))}
    </div>
  )
}
