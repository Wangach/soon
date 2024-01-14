import React from 'react'

const Form = () => {
  return (
    <div className='absolute w-full translate-y-1/4'>
      <div className="text-gray-300 mt-0 mx-auto mb-0 bg-selection p-4 w-6/12 rounded-md">
        <h2 className="text-center font-bold uppercase salsa">Contact Form</h2>
        <p className='text-center salsa'>Fill in all the fields</p>
      </div>
      <form action="#" className='w-6/12 mt-0 mx-auto mb-3 border rounded-sm border-gray-950 p-8 bg-selection text-center'>
        <div className="">
          <label className="text-gray-300 block text-center font-bold salsa">Name</label>
          <input type="text" className="w-full block rounded-md p-1" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold salsa">Email</label>
          <input type="email" className="w-full block rounded-md p-1" placeholder="someoneexample.com" />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold salsa">Your Message</label>
          <textarea type="text" className="w-full block rounded-md p-2" placeholder="Say Something..." />
        </div>
        <button type='submit' className="bg-slate-900 text-white font-semibold p-1 rounded-sm mt-2 w-2/4">Send Icon</button>
      </form>
    </div>
  )
}

export default Form