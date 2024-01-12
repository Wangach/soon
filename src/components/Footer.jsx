import React from 'react'

const Footer = () => {
    let getYear = () =>{
        return new Date().getFullYear();
    }
  return (
    <div className='text-white bg-slate-900 bottom-0 fixed w-full text-center p-2 '>
        <p>
            &copy; Wangaruro {getYear()}
        </p>
    </div>
  )
}

export default Footer