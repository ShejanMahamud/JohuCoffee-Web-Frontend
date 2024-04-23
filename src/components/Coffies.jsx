import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Coffee from "../Utils/Coffee";
import { CoffeeContext } from "../pages/Home";

const Coffies = () => {

const {coffees} = useContext(CoffeeContext);

const navigate = useNavigate();

  return (
    <div className="relative w-full my-20 py-10 h-auto">
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/qvBVvt4J/cup-bg.png')] bg-left-top bg-no-repeat z-10"></div>
      <div className="absolute inset-0 bg-[url('https://i.postimg.cc/htCFzSt9/table-bg.png')] bg-right-bottom bg-no-repeat bg-contain z-10"></div>

      <div className="z-50 relative w-full">
        <div className="flex items-center flex-col w-full">
          <h1 className="text-center font-raleway text-[#1B1A1A] text-lg mb-3">
            --- Sip & Savor ---
          </h1>
          <h1 className="text-[#331A15] font-rancho text-5xl text-center mb-5">
            Our Popular Products
          </h1>
          <button onClick={()=>navigate('/add')} className="bg-[#E3B577] font-rancho text-[#242222] text-xl px-4 py-2 rounded-md flex items-center gap-2">
            <span>Add Coffee</span>
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
        <div className="w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 row-auto items-center gap-10 my-20">
          {
           coffees.length > 0 ? coffees.map(coffee => <Coffee key={coffee._id} coffee={coffee} />) : <h1 className="text-[#331A15] font-rancho text-3xl my-20 text-center mb-5 col-span-2">
           No Coffee Found!
         </h1>
          }
        </div>
      </div>
    </div>
  );
};

export default Coffies;
