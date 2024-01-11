import React from 'react'
import Nav from './Nav'
import Form from './Form'

const Landing = () => {
  return (
    <>
    <Nav />
    <div className='text-gray-300'>
      <h2>
        This Website is under construcion.
      </h2>
      <p>
        You can contact me via the form below. Don't shy off checking out my <a target='_blank' href="#">Github profile</a>.
        I have got some cool stuff there.
      </p>
    </div>
    <Form />
    </>
  )
}

export default Landing