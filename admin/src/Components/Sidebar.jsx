import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosLogOut, IoMdAddCircleOutline } from 'react-icons/io'
import { MdFormatListBulleted } from 'react-icons/md'
import { PiListBulletsFill } from 'react-icons/pi'

const Sidebar = ({ setToken }) => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-6">
      {/* Brand */}
      <div className="mb-10 text-3xl font-bold tracking-wide text-center text-amber-400">
        ResyGo
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4 text-lg">
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
            ${isActive ? 'bg-amber-500 text-black font-semibold' : 'hover:bg-gray-800'}`
          }
        >
          <IoMdAddCircleOutline className="text-2xl" />
          <span>Add Menu</span>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
            ${isActive ? 'bg-amber-500 text-black font-semibold' : 'hover:bg-gray-800'}`
          }
        >
          <MdFormatListBulleted className="text-2xl" />
          <span>Menu List</span>
        </NavLink>

        <NavLink
          to="/table"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-md transition 
            ${isActive ? 'bg-amber-500 text-black font-semibold' : 'hover:bg-gray-800'}`
          }
        >
          <PiListBulletsFill className="text-2xl" />
          <span>Reservations</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center gap-3 px-3 py-2 rounded-md hover:bg-red-600 transition text-lg"
      >
        <IoIosLogOut className="text-2xl" />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default Sidebar
