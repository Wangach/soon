import React from 'react'

const Nav = () => {
  return (
    <header className="bg-slate-500">
        <div className="font-bold">
            Brand
        </div>
        <nav>
            <ul>
                <li>
                    <a className='text-white' href="#">Home</a>
                </li>
                <li>
                    <a className='text-white' href="#">Github Profile</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav