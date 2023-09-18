import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
      <div className='container-fluid'>
        React Practice
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className='nav-link' to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={"/cards"}>Cards</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={"/basicform"}>Form</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to={"/Users"}>Users</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar