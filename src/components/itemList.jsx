import React, { useState, useEffect } from 'react'
import firebase from './firebase'
import '../styles/global.css'
import Container from '@material-ui/core/Container'
import CustomizedDialogs from './EditModal'

const useItems = () => {
  const [items, setItems] = useState([]) //useState() hook, sets initial state to an empty array

  useEffect(() => {
    const unsubscribe = firebase
      .firestore() //access firestore
      .collection('Patient_Data') //access "Patient_Data" collection
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }))
        setItems(listItems) //items is equal to listItems
      })

    return () => unsubscribe()
  }, [])
  return items
}

const deleteItem = id => {
  firebase
    .firestore()
    .collection('Patient_Data')
    .doc(id)
    .delete()
}

const ItemList = ({ editItem }) => {
  const listItem = useItems()

  return (
    <Container>
      <table className='tg'>
        <tbody>
          <tr>
            <td className='tg-ycr8 header'>Add Vax</td>
            <td className='tg-ycr8 header'>Edit</td>
            <td className='tg-ycr8 header'>Vaccine History</td>
            <td className='tg-ycr8 header'>Date Late Administered</td>
            <td className='tg-i81m header'>Manufacturer</td>
            <td className='tg-a02x header'>First</td>
            <td className='tg-6hdc header'>Last</td>
            <td className='tg-6hdc header'>DOB</td>
            <td className='tg-6hdc header'>Sex</td>
            <td className='tg-6hdc header'>Address</td>
            <td className='tg-6hdc header'>City</td>
            <td className='tg-6hdc header'>State</td>
            <td className='tg-6hdc header'>Zip</td>
            <td className='tg-6hdc header'>Time</td>
            <td className='tg-6hdc header'>Date</td>
          </tr>
        </tbody>
        {listItem.map(item => (
          <tbody key={item.id}>
            <tr>
              <td className='tg-6hdc'>
                <button onClick={() => deleteItem(item.id)}>Add</button>
              </td>
              <td className='tg-6hdc'>
                <button onClick={() => editItem(item)}>Edit</button>
              </td>
              <td className='tg-ycr8'>{item.dose_number}</td>
              <td className='tg-ycr8'>{item.date_vaccination}</td>
              <td className='tg-i81m'>{item.vaccine_type}</td>
              <td className='tg-ycr8'>{item.first_name}</td>
              <td className='tg-ycr8'>{item.last_name}</td>
              <td className='tg-ycr8'>{item.dob}</td>
              <td className='tg-ycr8'>{item.gender}</td>
              <td className='tg-ycr8'>{item.address}</td>
              <td className='tg-ycr8'>{item.city}</td>
              <td className='tg-ycr8'>{item.state}</td>
              <td className='tg-ycr8'>{item.zip_code}</td>
              <td className='tg-ycr8'>{item.start_time}</td>
              <td className='tg-ycr8'>{item.start_date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  )
}
export default ItemList
