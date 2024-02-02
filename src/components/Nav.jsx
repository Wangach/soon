import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
  return (
    <header className="bg-slate-900 flex p-5 justify-center">
        <nav className='w-3/12'>
            <ul className="flex justify-between">
                <li>
                    <a className='text-gray-300' href="#">
                        <FontAwesomeIcon icon={faHouse} />
                    </a>
                </li>
                <li>
                    <a className='text-gray-300' href="#">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Nav