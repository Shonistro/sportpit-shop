import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserPlus, FaSignInAlt } from 'react-icons/fa'
import SearchBar from '../components/SearchBar'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-blue-700 transition-transform duration-300 hover:scale-110"
        >
          Fitgear
        </Link>
        <div className="flex-grow flex justify-center">
          <SearchBar placeholder="Search..." />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link 
                to="/cart" 
                className="flex items-center p-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500"
              >
                <FaShoppingCart className="transition-transform duration-300 hover:scale-125" />
                <span className="ml-2">Cart</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/register" 
                className="flex items-center p-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500"
              >
                <FaUserPlus className="transition-transform duration-300 hover:scale-125" />
                <span className="ml-2">Register</span>
              </Link>
            </li>
            <li>
              <Link 
                to="/login" 
                className="flex items-center p-2 transition-transform duration-300 hover:scale-110 hover:text-blue-500"
              >
                <FaSignInAlt className="transition-transform duration-300 hover:scale-125" />
                <span className="ml-2">Login</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
