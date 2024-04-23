import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

const navigate = useNavigate();

const {user,logOut} = useContext(AuthContext)

const handleLogOut = () => {
  logOut()
  .then(res => {
    toast.success('Successfully Logged Out!')
  })
  .catch(error => {
    toast.error('Something went wrong!')
  })
}

  return (
  <div className="navbar bg-[url('https://i.postimg.cc/kGCdkgGt/cc0b630a2dc4ad10a7be1ee3b1dd00d9.jpg')] bg-no-repeat bg-center bg-cover lg:px-10 px-5">
  <div className="navbar-start">
    <div  onClick={()=>{
        window.scroll(0,0)
        setTimeout(()=>{
          navigate('/')
        },1000)
      }} className='flex items-center justify-center gap-1 cursor-pointer'>
          <img src="https://i.postimg.cc/g2D01RLY/e0179338c5e93a78b31ecec8e2cb6ef2.png" alt="logo.png" className='w-14'/>
          <h1 className='font-rancho text-white lg:text-3xl text-xl'>JohuCoffee</h1>
        </div>
  </div>
  <div className="navbar-end lg:gap-x-5 gap-x-2 items-center">
{
  user &&   <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-12 rounded-full border-2 border-[#E3B577]">
      <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
    </div>
  </div>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  <li className="font-bold py-2 px-4">Hi! {user?.displayName || "User"}</li>
            <button className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg">
              <FaUserCircle className="text-xl text-gray-400" />
              <span>Profile</span>
            </button>
            <button
              // onClick={() => navigate("/update-profile")}
              className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg"
            >
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </button>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg text-red-500"
            >
              <IoIosLogOut className="text-xl" />
              <span>Logout</span>
            </button>
  </ul>
</div>
}
{
  user ? <button onClick={handleLogOut} className="bg-[#E3B577] font-rancho text-[#242222] text-2xl px-5 py-2 rounded-md">
  Logout
</button> : <button onClick={()=>navigate('/login')} className="bg-[#E3B577] font-rancho text-[#242222] text-2xl lg:px-5 px-3 py-2 rounded-md">
  Login
</button>
}
  </div>
</div>
  )
}

export default Navbar