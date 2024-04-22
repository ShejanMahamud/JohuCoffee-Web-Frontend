import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Details = () => {

const {data} = useLoaderData();

const {coffee_name,coffee_chef,coffee_supplier,coffee_taste,coffee_category,coffee_details,coffee_photo,coffee_price,_id} = data;

const navigate = useNavigate();

  return (
    <div className="w-full bg-[url('https://i.postimg.cc/66FBrVVq/add-bg.png')] bg-no-repeat bg-center bg-cover py-10">
      <div onClick={()=>{
        window.scroll(0,0)
        setTimeout(()=>{
          navigate('/')
        },1000)
      }} className='flex items-center gap-2 w-[80%] mx-auto cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25" stroke="#331A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className='text-[#331A15] font-rancho text-2xl'>Back to home</span>
      </div>
      <div className='w-[70%] my-20 bg-[#F4F3F0] mx-auto rounded-lg py-5 grid grid-cols-2 row-auto items-center gap-5 px-10'>
        <img src={coffee_photo} alt="coffee.png" className='w-80'/>
        <div className='w-full flex flex-col items-center gap-3'>
        <h1 className='text-[#331A15] font-rancho text-4xl text-center'>{coffee_name}</h1>
        <p className='mb-4'>{coffee_details}</p>
        <div className="flex items-start flex-col gap-3 font-raleway">
                <h1 className="text-[#1B1A1A] font-bold">Name: <span className="text-[#5C5B5B]   font-normal">{coffee_name}</span></h1>
                <h1 className="text-[#1B1A1A] font-bold">Cheef: <span className="text-[#5C5B5B]   font-normal">{coffee_chef}</span></h1>
                <h1 className="text-[#1B1A1A] font-bold">Price: <span className="text-[#5C5B5B]   font-normal">{coffee_price}</span></h1>
                <h1 className="text-[#1B1A1A] font-bold">Supplier: <span className="text-[#5C5B5B]   font-normal">{coffee_supplier}</span></h1>
                <h1 className="text-[#1B1A1A] font-bold">Taste: <span className="text-[#5C5B5B]   font-normal">{coffee_taste}</span></h1>
                <h1 className="text-[#1B1A1A] font-bold">Category: <span className="text-[#5C5B5B]   font-normal">{coffee_category}</span></h1>
              </div>
              <div className='flex items-center gap-5 my-2'>
              <button className="bg-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md">
          Add To Cart
        </button>
        <button className="bg-transparent border border-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md">
          Buy Now
        </button>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Details