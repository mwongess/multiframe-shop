import React from 'react'
import Summary from './Summary'

const DeliveryDetails = () => {
  return (
    <div className='flex justify-between px-12'>
      <div>
        <h1>Delivery Details</h1>
        <p>Delivery adress</p>
        <p>Add adress for this shipment</p>
        <form action="">
          <div>
            <label htmlFor="">NAME</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">PHONE</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">POSTAL CODE</label>
            <input type="text" name="" id="" />
          </div>
        </form>
      </div>
      <Summary />
    </div>
  )
}

export default DeliveryDetails