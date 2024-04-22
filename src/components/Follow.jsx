import React from 'react'

const Follow = () => {
  return (
    <div className='w-[90%] mx-auto my-20'>
        <div className="flex items-center flex-col w-full">
          <h1 className="text-center font-raleway text-[#1B1A1A] text-lg mb-3">
            --- Follow us now ---
          </h1>
          <h1 className="text-[#331A15] font-rancho text-5xl text-center mb-5">
            Follow Our Instagram
          </h1>
        </div>
        <div className='w-full grid grid-cols-4 row-auto items-center gap-5 *:w-full *:rounded-md *:h-[250px] *:object-cover my-10'>
            <img src="https://i.postimg.cc/K8sM53fy/coffee1.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/RF1h2W7h/coffee2.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/k4PDjQtL/coffee3.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/mgr9MyQw/coffee4.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/SRDsNHtp/coffee5.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/Y034Lv0Z/coffee6.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/90jT73pR/coffee7.jpg" alt="coffee.png" />
            <img src="https://i.postimg.cc/Pq91dvvM/coffee8.jpg" alt="coffee.png" />
        </div>
    </div>
  )
}

export default Follow