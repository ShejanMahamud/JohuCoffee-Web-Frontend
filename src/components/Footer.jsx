import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="w-full bg-[url('https://i.postimg.cc/dtKPqrbT/footer-bg.jpg')] py-5 lg:px-40 px-10 grid grid-cols-2 row-auto items-center justify-items-center gap-10">
      <div className='w-full flex flex-col items-start justify-center gap-1 py-2'>
          <img src="https://i.postimg.cc/g2D01RLY/e0179338c5e93a78b31ecec8e2cb6ef2.png" alt="logo.png" className='w-14'/>
          <h1 className='font-rancho text-[#331A15] text-3xl'>JohuCoffee</h1>
          <p className='text-[#1B1A1A] font-raleway leading-[26px]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
          <div className='flex items-center gap-3 text-3xl text-[#331A15] my-3'>
          <FaFacebookSquare/>
          <FaInstagramSquare />
          <FaSquareXTwitter />
          <FaLinkedin />
          </div>
          <h1 className='font-rancho text-[#331A15] text-4xl mt-5 mb-3'>Get in Touch</h1>
          <div className='flex items-start flex-col gap-3 *:mb-1'>
            <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H5.872C6.732 1.5 7.482 2.086 7.691 2.92L8.796 7.343C8.88554 7.701 8.86746 8.07746 8.74401 8.42522C8.62055 8.77299 8.39723 9.07659 8.102 9.298L6.809 10.268C6.674 10.369 6.645 10.517 6.683 10.62C7.24738 12.1549 8.1386 13.5487 9.29495 14.7051C10.4513 15.8614 11.8451 16.7526 13.38 17.317C13.483 17.355 13.63 17.326 13.732 17.191L14.702 15.898C14.9234 15.6028 15.227 15.3794 15.5748 15.256C15.9225 15.1325 16.299 15.1145 16.657 15.204L21.08 16.309C21.914 16.518 22.5 17.268 22.5 18.129V19.5C22.5 20.2956 22.1839 21.0587 21.6213 21.6213C21.0587 22.1839 20.2956 22.5 19.5 22.5H17.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" fill="#331A15"/>
</svg>
<span className='text-[#1B1A1A] font-raleway'>+88 01533 333 333</span>
            </div>
            <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M1.5 8.66992V17.2499C1.5 18.0456 1.81607 18.8086 2.37868 19.3712C2.94129 19.9339 3.70435 20.2499 4.5 20.2499H19.5C20.2956 20.2499 21.0587 19.9339 21.6213 19.3712C22.1839 18.8086 22.5 18.0456 22.5 17.2499V8.66992L13.572 14.1629C13.0992 14.4538 12.5551 14.6078 12 14.6078C11.4449 14.6078 10.9008 14.4538 10.428 14.1629L1.5 8.66992Z" fill="#331A15"/>
  <path d="M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z" fill="#331A15"/>
</svg>
<span className='text-[#1B1A1A] font-raleway'>info@gmail.com</span>
            </div>
            <div className='flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.54 22.351L11.61 22.391L11.638 22.407C11.749 22.467 11.8733 22.4985 11.9995 22.4985C12.1257 22.4985 12.25 22.467 12.361 22.407L12.389 22.392L12.46 22.351C12.8511 22.1191 13.2328 21.8716 13.604 21.609C14.5651 20.9305 15.463 20.1667 16.287 19.327C18.231 17.337 20.25 14.347 20.25 10.5C20.25 8.31196 19.3808 6.21354 17.8336 4.66637C16.2865 3.11919 14.188 2.25 12 2.25C9.81196 2.25 7.71354 3.11919 6.16637 4.66637C4.61919 6.21354 3.75 8.31196 3.75 10.5C3.75 14.346 5.77 17.337 7.713 19.327C8.53664 20.1667 9.43427 20.9304 10.395 21.609C10.7666 21.8716 11.1485 22.1191 11.54 22.351ZM12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 9.70435 14.6839 8.94129 14.1213 8.37868C13.5587 7.81607 12.7956 7.5 12 7.5C11.2044 7.5 10.4413 7.81607 9.87868 8.37868C9.31607 8.94129 9 9.70435 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5Z" fill="#331A15"/>
</svg>
<span className='text-[#1B1A1A] font-raleway'>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
        </div>
        <div className='w-full'>
        <h1 className='font-rancho text-[#331A15] text-3xl text-center'>Contact With Us</h1>
        <form className='w-full my-5 flex flex-col items-end gap-3'>
        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" placeholder="Your Question"></textarea>
        <button className="bg-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md mx-0">Send Message</button>
        </form>
        </div>
    </div>
    <div className="w-full bg-[url('https://i.postimg.cc/4NGGBSTm/footer-bg-2.jpg')] col-span-2 text-center text-white font-rancho py-3">
        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer