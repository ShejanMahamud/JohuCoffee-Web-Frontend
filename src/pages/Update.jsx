import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

  const navigate = useNavigate()

  const {data} = useLoaderData();

  const {coffee_name,coffee_chef,coffee_supplier,coffee_taste,coffee_category,coffee_details,coffee_photo,coffee_price,_id} = data;

  const handleUpdateCoffee = (e,id) => {
    e.preventDefault();

const coffee_name = e.target.name.value;
const coffee_chef = e.target.chef.value;
const coffee_supplier = e.target.supplier.value;
const coffee_taste = e.target.taste.value;
const coffee_category = e.target.category.value;
const coffee_details = e.target.details.value;
const coffee_photo = e.target.photo.value;
const coffee_price = e.target.price.value;

const coffee = {coffee_name,coffee_chef,coffee_supplier,coffee_taste,coffee_category,coffee_details,coffee_photo,coffee_price};

fetch(`https://johu-coffee-backend.vercel.app/coffees/${id}`,{
  method: 'PUT',
  headers:{
    'content-type' : 'application/json'
  },
  body: JSON.stringify(coffee)
})
.then(res => res.json())
.then(data => {
  if(data.modifiedCount > 0){
    Swal.fire({
      title: 'Success!',
      text: 'Successfully Coffee Added',
      icon: 'success',
      confirmButtonColor: "#E3B577",
      confirmButtonText: 'Okay!'
    })
  }
})
  }

  return (
    <div className="w-full h-auto bg-[url('https://i.postimg.cc/66FBrVVq/add-bg.png')] bg-no-repeat bg-cover bg-center py-10">
      <div onClick={()=>{
        window.scroll(0,0)
        setTimeout(()=>{
          navigate('/')
        },1000)
      }} className='flex items-center gap-2 w-[80%] mx-auto py-10 cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25" stroke="#331A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className='text-[#331A15] font-rancho text-2xl'>Back to home</span>
      </div>
      <form onSubmit={(e)=>handleUpdateCoffee(e,_id)} className='w-[80%] mx-auto bg-[#F4F3F0] rounded-md px-5 py-10'>
        <h1 className='text-[#331A15] font-rancho text-3xl text-center mb-3'>Update {coffee_name}</h1>
        <p className='text-center w-[70%] mx-auto text-[#331A15] font-raleway leading-[26px]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
        <div className='w-[90%] mx-auto my-10 grid grid-cols-2 row-auto items-center gap-x-10 gap-y-5 justify-items-center font-raleway'>
        <label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Name</span>
  </div>
  <input type="text" name='name' placeholder="Enter Coffee Name" className="input input-bordered w-full" required defaultValue={coffee_name}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Chef</span>
  </div>
  <input type="text" name='chef' placeholder="Enter Coffee Chef" className="input input-bordered w-full" defaultValue={coffee_chef}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Supplier</span>
  </div>
  <input type="text" name='supplier' placeholder="Enter Coffee Supplier" className="input input-bordered w-full" defaultValue={coffee_supplier}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Taste</span>
  </div>
  <input type="text" name='taste' placeholder="Enter Coffee Taste" className="input input-bordered w-full" defaultValue={coffee_taste}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Category</span>
  </div>
  <input type="text" name='category' placeholder="Enter Coffee Category" className="input input-bordered w-full" required defaultValue={coffee_category}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Details</span>
  </div>
  <input type="text" name='details' placeholder="Enter Coffee Details" className="input input-bordered w-full" defaultValue={coffee_details}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Coffee Price</span>
  </div>
  <input type="text" name='price' placeholder="Enter Coffee Price" className="input input-bordered w-full" required defaultValue={coffee_price}/>
</label>
<label className="form-control w-full lg:col-span-1 col-span-2">
  <div className="label">
    <span className="label-text font-bold text-sm">Photo URL</span>
  </div>
  <input type="text" name='photo' placeholder="Enter Coffee Photo" className="input input-bordered w-full" required defaultValue={coffee_photo}/>
</label>
<button className="bg-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md flex items-center gap-2 col-span-2 w-full justify-center mt-5">
            <span>Update Coffee</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
            >
              <path
                d="M13.7143 11.4286V2.28571H2.28571V11.4286C2.28571 12.0348 2.52653 12.6162 2.95518 13.0448C3.38384 13.4735 3.96522 13.7143 4.57143 13.7143H11.4286C12.0348 13.7143 12.6162 13.4735 13.0448 13.0448C13.4735 12.6162 13.7143 12.0348 13.7143 11.4286ZM1.14286 0H18.2857C18.8919 0 19.4733 0.240816 19.902 0.66947C20.3306 1.09812 20.5714 1.67951 20.5714 2.28571V5.71429C20.5714 6.3205 20.3306 6.90188 19.902 7.33053C19.4733 7.75918 18.8919 8 18.2857 8H16V11.4286C16 12.641 15.5184 13.8038 14.6611 14.6611C13.8037 15.5184 12.641 16 11.4286 16H4.57143C3.35901 16 2.19625 15.5184 1.33894 14.6611C0.481631 13.8038 0 12.641 0 11.4286V1.14286C0 0.839753 0.120408 0.549062 0.334735 0.334735C0.549063 0.120408 0.839752 0 1.14286 0ZM16 2.28571V5.71429H18.2857V2.28571H16Z"
                fill="#331A15"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Update