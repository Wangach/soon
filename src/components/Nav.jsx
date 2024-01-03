import React from 'react'

const Nav = () => {
  return (
    <header>
        <div className="font-bold">
            Brand
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a className='text-red-700' href="#">Github Profile</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav