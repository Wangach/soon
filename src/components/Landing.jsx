import React from 'react'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
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
        Check out my <a target='_blank' href="#"><FontAwesomeIcon className='text-2xl text-sky-500' icon={faGithub} /></a> or
        Shoot me a <FontAwesomeIcon className='text-2xl text-sky-500' icon={faEnvelope} />  below.
      </p>
    </div>
    <Form />
    <Footer />
    </>
  )
}

export default Landing