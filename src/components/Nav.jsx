import React from 'react'

const Nav = () => {
  return (
    <header className="bg-slate-900 flex p-5 justify-between">
        <div className="font-bold text-gray-300">
            Brand
        </div>
        <nav className='w-3/12'>
            <ul className="flex justify-between">
                <li>
                    <a className='text-gray-300' href="#">Home</a>
                </li>
                <li>
                    <a className='text-gray-300' href="#">Github Profile</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav