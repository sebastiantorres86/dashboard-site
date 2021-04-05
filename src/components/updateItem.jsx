import React, { useState, useEffect } from 'react'
import '../styles/global.css'

/* 
So far we have passed the setEditing prop to index.js. 
Now we are going to pass the currentItem prop
*/
const UpdateItem = ({ setEditing, currentItem, updateItem, open }) => {
  /*
  Sets the state of the item to the current item
  */
  const [item, setItem] = useState(currentItem)

  /*
  Side effect is that without UseEffect if you start editing one item, 
  then try to switch to another item, nothing will happen.
  The component is already open, and although the state 
  on the parent has changed, it's not registered down to the props.
  We want to let the UpdateItem form component know the props have changed.
  With the Effect Hook, we create a callback function that updates the item 
  state with the new prop thats being sent through.
  */
  useEffect(() => {
    setItem(currentItem)
    console.log('useEffect passes the currentItem: ', currentItem)
  }, [currentItem])

  const onSubmit = e => {
    e.preventDefault()
    console.log('onSubmit passes the id and items', item)
    updateItem({ currentItem }, item)
  }

  const onChange = e => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  return (
    <>
      <h2>Edit Patient Data</h2>
      <form onSubmit={onSubmit}>
        <table className='tg'>
          <tbody>
            <tr>
              <td className='tg-ycr8'>First Name</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='first'
                  value={item.first_name}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td className='tg-ycr8'>Last Name</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='last'
                  value={item.last_name}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td className='tg-ycr8'>DOB</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='dob'
                  value={item.dob}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td className='tg-ycr8'>Gender</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='gender'
                  value={item.gender}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td className='tg-ycr8'>Address</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='address'
                  value={item.address}
                  onChange={onChange}
                />
              </td>
            </tr>
            <tr>
              <td className='tg-ycr8'>City</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='city'
                  value={item.city}
                  onChange={onChange}
                />
              </td>
            </tr>

            <tr>
              <td className='tg-ycr8'>State</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='state'
                  value={item.state}
                  onChange={onChange}
                />
              </td>
            </tr>

            <tr>
              <td className='tg-ycr8'>Zip</td>
              <td className='tg-ycr8'>
                <input
                  type='text'
                  name='zip'
                  value={item.zip_code}
                  onChange={onChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button>Update Patient Data</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </form>
    </>
  )
}
export default UpdateItem
