import React from 'react'

const Form = () => {
  return (
    <div className='border border-red-600'>
      <div className="text-gray-300 mt-6 mx-auto mb-0">
        <h4 className='text-center bold'>Fill in all the fields</h4>
      </div>
      <form action="#" className='w-6/12 mt-0 mx-auto mb-3 border rounded-sm border-gray-950 p-8 bg-gray-950'>
        <div className="">
          <label className="text-gray-300 block text-center font-bold">Name</label>
          <input type="text" className="w-full block rounded-md" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold">Email</label>
          <input type="email" className="w-full block rounded-md" placeholder="someoneexample.com" />
        </div>
        <div className="form-group">
          <label className="text-gray-300 block text-center font-bold">Your Message</label>
          <textarea type="text" className="w-full block rounded-md" placeholder="Say Something..." />
        </div>
        <button type='submit' className="bg-blue-400 text-white font-semibold p-1 rounded-sm mt-2 w-2/4">Send Icon</button>
      </form>
    </div>
  )
}

export default Form