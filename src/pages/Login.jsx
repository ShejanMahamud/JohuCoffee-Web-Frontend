import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import auth from "../config/firebase.config";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

const location = useLocation();
const navigate = useNavigate();
const [show, setShow] = useState(false);
const inputRef = useRef(null)

const {googleLogin,emailPasswordLogin,logOut} = useContext(AuthContext);
const from = location?.state || '/';

const handleGoogleLogin = () => {
googleLogin()
  .then(res => {
    if(res.user){
      fetch('https://johu-coffee-backend.vercel.app/users',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify({name: auth?.currentUser?.displayName,email: auth?.currentUser?.email,lastLogin: auth.currentUser.metadata.lastSignInTime,method:auth?.currentUser?.providerData[0]?.providerId})
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          toast.success('Google Login Successfully!');
          setTimeout(()=>{
            navigate(from)
          },1000);
          window.scroll(0,0);
        }
      })
    }
  })
  .catch(error => {
    console.log(error)
    toast.error('Opps! Something Went Wrong...')
  })
}

const handleEmailPasswordLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  emailPasswordLogin(email,password)
  .then(res => {
    fetch(`https://johu-coffee-backend.vercel.app/users/${email}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({lastLogin: auth?.currentUser?.metadata?.lastSignInTime,email})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Successfully Logged in!');
        e.target.reset();
        setTimeout(()=>{
          navigate(from)
        },1000);
        window.scroll(0,0);
      }
    })
  })
  .catch(error => {
    toast.error('Something Went Wrong!')
  })
}
useEffect(()=>{
  inputRef.current.focus();
},[])

  return (
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-10 border-t border-b border-[#CDD6E1]">
    <div className="w-full bg-[#E3B577] min-h-screen bg-[url('https://i.postimg.cc/bYMQWCTr/pngwing-com-4.png')] bg-no-repeat bg-cover bg-center pt-10 lg:flex md:flex items-center justify-center hidden">
      {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="loginSwiper"
      >
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full mb-3"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl mb-5">
              Find Your Perfect Cottage With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full h-full mb-3"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl">
              Find Your Perfect Place With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full mb-3 h-full"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl">
              Find Your Apartments With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center lg:pt-20 py-10 md:pt-20">
      <div className="bg-[#E3B57766] rounded-full w-20 h-20 mx-auto flex items-center justify-center p-3 border border-[#E3B57780] mb-5">
        <img src="https://i.postimg.cc/g2D01RLY/e0179338c5e93a78b31ecec8e2cb6ef2.png" alt="logo.png" />
      </div>
      <h1 className="text-4xl font-bold mb-3 font-rancho">Login to JohuCoffee</h1>
<form onSubmit={handleEmailPasswordLogin} className="flex flex-col items-center justify-center w-full  gap-5" >

<label className="input input-bordered flex items-center gap-2 lg:w-[60%] md:w-[70%] w-[80%] mx-auto">
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
<input ref={inputRef} type="text" className="grow w-full" name="email" placeholder="Enter your email" required/>
</label>
<label className="input input-bordered flex items-center gap-2 lg:w-[60%] md:w-[70%] w-[80%] mx-auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
<div className='flex items-center justify-between w-full'>
<input  type={show ? 'text' : 'password'} name='password' className="grow focus:outline-none focus:border-none" placeholder='Password' required/>
<button type='button' onClick={()=>setShow(!show)}>
{show ? <IoEyeOff/> : <IoEye />}
</button>
</div>
</label>
<button type="submit" className="lg:w-[60%] md:w-[70%] w-[80%] mx-auto bg-[#E3B577] px-10 py-2 rounded-md text-white font-bold">LOGIN</button>
</form>
<div className="w-full">
  <div className="w-[60%] mx-auto flex items-center gap-5">
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  <h1 className="text-[#737D8C] font-medium">Or</h1>
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  </div>
<div className="w-[60%] mx-auto flex flex-col items-center gap-2 my-3">
<div className="flex items-center gap-5">
<button  className="bg-[#E3B577] rounded-md px-3 py-3 flex items-center gap-3">
      <FaGoogle onClick={handleGoogleLogin} className="lg:text-xl text-3xl text-white"/>
      </button>
      <button  className="bg-[#E3B577] rounded-md px-3 py-3 flex items-center gap-3">
      <FaTwitter className="lg:text-xl text-3xl text-white"/>
      </button>
</div>
      <p className="font-medium text-[#737D8C] mb-3 font-raleway">Not Registered? <span className="text-gray-800 hover:underline" onClick={()=>navigate('/register')}> Register Here</span></p>
</div>
</div>

    </div>

  </div>
  )
}

export default Login