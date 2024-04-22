import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

const navigate = useNavigate()

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <img src="https://i.postimg.cc/BvHZ8TMg/33aed961c21346631383f919d46f47fe.gif" alt="404.gif" />
      <button onClick={()=>navigate('/')} className='bg-[#E3B577] text-white font-rancho px-5 py-2 rounded-full text-xl'>Back to home</button>
    </div>
  )
}

export default Error