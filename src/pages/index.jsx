import React, { useState } from 'react'
import firebase from '../components/firebase'
import '../styles/global.css'
import ItemList from '../components/itemList'
import AddItemForm from '../components/addItemForm'
import UpdateItem from '../components/updateItem'
import MyAppBar from '../components/MyAppBar'

const App = () => {
  /* We don't know what is going to be edited so we set an
  empty ser from the <UpdateItem /> form */
  const initialItemState = [
    { id: null, name: '', type: '', qty: '', description: '' }
  ]
  /* Make a state for whether or not edit mode is turned on.
  It will begin as false */
  const [editing, setEditing] = useState(false)

  /* Apply the empty initialItemState from above to a
  currentItem state. currentItem will be used for editing individual items. */
  const [currentItem, setCurrentItem] = useState(initialItemState)

  const editItem = item => {
    setEditing(true)
    setCurrentItem({
      id: item.id,
      first_name: item.first_name,
      last_name: item.last_name,
      dob: item.dob,
      gender: item.gender,
      address: item.address,
      city: item.city,
      state: item.state,
      zip: item.zip_code
    })
  }

  const updateItem = ({ currentItem }, updatedItem) => {
    console.log(
      'It send the item to the updated item function:',
      updatedItem,
      currentItem.id
    )
    setEditing(false)
    firebase
      .firestore()
      .collection('Patient_Data')
      .doc(currentItem.id)
      .update(updatedItem)
  }

  return (
    <div>
      <div>
        <MyAppBar />
      </div>

      {/* Prop passed from the ItemList component */}
      <ItemList editItem={editItem} />
      <h2>Add Item</h2>
      {/* We add a ternary operator to switch
      between the UpdateItem from and the AddItemForm */}
      {editing ? (
        <UpdateItem
          setEditing={setEditing}
          currentItem={currentItem}
          updateItem={updateItem}
        />
      ) : (
        <AddItemForm />
      )}
    </div>
  )
}

export default App
