import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();

  return (
    <div className="w-full bg-[url('https://i.postimg.cc/kGCdkgGt/cc0b630a2dc4ad10a7be1ee3b1dd00d9.jpg')] bg-no-repeat bg-center bg-cover">
        <div  onClick={()=>{
        window.scroll(0,0)
        setTimeout(()=>{
          navigate('/')
        },1000)
      }} className='w-full flex items-center justify-center gap-1 py-2 cursor-pointer'>
          <img src="https://i.postimg.cc/g2D01RLY/e0179338c5e93a78b31ecec8e2cb6ef2.png" alt="logo.png" className='w-14'/>
          <h1 className='font-rancho text-white text-3xl'>JohuCoffee</h1>
        </div>
    </div>
  )
}

export default Navbar