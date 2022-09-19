import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div className="w-ful h-16 flex items-center px-14 justify-between bg-teal-600">
            <Link to={"/"} className="text-3xl text-teal-200 font-semibold font-cursive">REACT-CRUD</Link>
            
            <Link to={"/add-user"} className="w-[15%] hover:bg-teal-600
            hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">ADD USERS</Link>
        </div>
    </div>
  )
}

export default Navbar