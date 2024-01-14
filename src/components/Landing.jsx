import React from 'react'
import Nav from './Nav'
import Form from './Form'
import Footer from './Footer'

const Landing = () => {
  return (
    <>
    <Nav />
    <div className='text-gray-300 text-center'>
      <h2 className='font-bold oswald'>
        This Website is under construction.
      </h2>
      <p className='salsa'>
        Don't shy off checking out my <a target='_blank' href="#">Github profile</a>.
        I have got some cool stuff there.
      </p>
    </div>
    <Form />
    <Footer />
    </>
  )
}

export default Landing