import React from 'react'
import Summary from './Summary'

const DeliveryDetails = () => {
  return (
    <div className='sm:flex justify-between px-4 sm:px-20 mb-4'>
      <div className='w-full sm:w-1/2'>
        <h1 className='font-bold text-lg'>Delivery Details</h1>
        <p className='font-bold'>Delivery adress</p>
        <p>Add adress for this shipment</p>
        <form action="">
          <label htmlFor="">NAME</label>
          <div>
            <input className='w-full border border-slate-300  rounded p-2 bg-transparent ' type="text" name="" id="" />
          </div>
          <label htmlFor="">PHONE</label>
          <div>
            <input className='w-full border border-slate-300  rounded p-2 bg-transparent ' type="text" name="" id="" />
          </div>
          <label htmlFor="">POSTAL CODE</label>
          <div>
            <input className='w-full border border-slate-300 rounded p-2 bg-transparent ' type="text" name="" id="" />
          </div>
          <label htmlFor="">ADRESS</label>
          <div>
            <textarea className='w-full border border-slate-300  rounded p-2 bg-transparent ' name="" id="" cols={30} rows={4}></textarea>
          </div>
        </form>
      </div>
      <Summary />
    </div>
  )
}

export default DeliveryDetails