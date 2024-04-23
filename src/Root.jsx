import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AuthContext } from './providers/AuthProvider';

const Root = () => {

const {loading} = useContext(AuthContext)

  return (
    <>
    {
      loading ? <div className="w-full min-h-screen bg-[url('https://i.postimg.cc/kGCdkgGt/cc0b630a2dc4ad10a7be1ee3b1dd00d9.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#E3B577]"></div>
      </div>
      :
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
  </div>
    }
    </>
  )
}

export default Root