import React from "react";
import { IoBagCheck } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { ImArrowDown } from "react-icons/im";
import { FaBowlFood } from "react-icons/fa6";
import { BsFillBasket2Fill } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import TableComponent from './TableComponent'; 
import CustomerReview from '../Pages/CustomerReview';
import Barchart from "./Barchart";
import { MdMyLocation } from "react-icons/md";
import { TbBurger } from "react-icons/tb";
import Imagefeed1 from "../assets/images2 (1).jpeg"
import Imagefeed2 from "../assets/images2 (4).jpeg"
import Imagefeed3 from "../assets/images4.jpeg"
const Dashboard = () => {
  const percentage = 70;
  const reviews = [
    {
      name: 'Arun clenten',
      image: Imagefeed1,
      rating: 4,
      feedback: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders',
    },
    {
      name: 'Saravanan',
      image: Imagefeed2,
      rating: 5,
      feedback: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders.',
    },
    {
      name: 'Abdullha',
      image: Imagefeed3,
      rating: 4,
      feedback: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders.',
    },
    {
      name: 'Srisha',
      image: Imagefeed2,
      rating: 5,
      feedback: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders!',
    },
    {
      name: 'Pavithra',
      image: Imagefeed3,
      rating: 4,
      feedback: 'Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders.',
    },
  
  ];
  return  (
    <section className="bg-black overflow-auto h-screen">
      <h2 className="text-white ml-3 pt-3 font-bold dash">DASHBOARD</h2>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-2 bg-gray-800 shadow-md rounded-md p-4  items-center justify-between">
            <div className="items-center">
              <div className="bg-blue-900 w-14  text-white p-2 flex items-center justify-center rounded">
                <BsFillBasket2Fill size={30} className="text-blue-300" />
              </div>
              <div className="">
                <p className="text-md font-bold text-white">Total orders</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-white font-bold text-2xl">75</p>
              <p className="text-green-500 mr-2 flex"><span className="mt-1"><IoMdArrowDropup /></span><span>3%</span></p> 
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-800 shadow-md rounded-md p-4  items-center justify-between">
            <div className="items-center">
              <div className="bg-green-900 w-14  text-white p-2 flex items-center justify-center rounded">
                <IoBagCheck size={30} className="text-green-400" />
              </div>
              <div className="">
                <p className="text-md font-bold text-white">Total Delivered</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-white font-bold text-2xl">70</p>
              <p className="text-orange-500 mr-2 flex"><span className="mt-1"><IoMdArrowDropdown /></span><span>3%</span></p>
            </div>
          </div>
          <div className="md:col-span-2 bg-gray-800 shadow-md rounded-md p-4  items-center justify-between">
            <div className="items-center">
              <div className="bg-red-900 w-14  text-white p-2 flex items-center justify-center rounded">
                <IoBagRemove size={30} className="text-red-300" />
              </div>
              <div className="">
                <p className="text-md font-bold text-white">Total Cancelled</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-white font-bold text-2xl">05</p>
              <p className="text-green-500 mr-2 flex"><span className="mt-1"><IoMdArrowDropup /></span><span>3%</span></p>
            </div>
          </div>
          <div className="md:col-span-2 bg-gray-800 shadow-md rounded-md p-4  items-center justify-between">
            <div className="items-center">
              <div className="bg-pink-900 w-14  text-white p-2 flex items-center justify-center rounded">
                <ImArrowDown size={30} className="text-pink-300" />
              </div>
              <div className="">
                <p className="text-md font-bold text-white">Total Revenue</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <p className="text-white font-bold text-2xl">$12k</p>
              <p className="text-orange-500 mr-2 flex"><span className="mt-1"><IoMdArrowDropdown /></span><span>3%</span></p>
            </div>
          </div>
          <div className="md:col-span-4 bg-gray-800 shadow-md rounded-md p-4 flex justify-between ">
            
            <div>
              <h3 className="text-lg font-bold text-white">Net profit</h3>
              <p className="text-2xl font-bold text-white mt-5">$6759.29</p>
              <p className="text-green-500 mr-2 flex mt-2"><span className="mt-1"><IoMdArrowDropup /></span><span>3%</span></p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 relative">
                <CircularProgressbar
                  value={percentage}
                  strokeWidth={12}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: "#42A5F5",
                    trailColor: "lightgray",
                  })}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <p className="text-xs text-white font-bold text-center">{`${percentage}%`}</p>
                    <p className="text-xs text-white text-center">Goal</p>
                    <p className="text-xs text-white">Completed</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white">*The value here has been rounded off.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-12 md:col-span-8 p-4 bg-gray-800 text-white rounded">
            <Barchart />
          </div>

          <div className="col-span-12 md:col-span-4 bg-gray-800 p-4 text-white rounded">
            <div className="menuitem">
           <div className="flex items-center justify-between mt-10">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500  p-2 rounded-full">
                <MdMyLocation className="text-4xl text-orange-800" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Goals</h3>
              
              </div>
            </div>

            <div className="bg-gray-500 text-white p-2 rounded-full">
              <FaAngleRight  className="text-sm"/>
            </div>
            </div>
            <div className="flex items-center justify-between mt-10">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500  p-2 rounded-full">
                <TbBurger className="text-4xl text-blue-800" />
              </div>

              <div>
                <h3 className="text-lg font-semibold">Popular Dishes</h3>
             
              </div>
            </div>

            <div className="bg-gray-500 text-white p-2 rounded-full">
              <FaAngleRight className="text-sm"/>
            </div>
            </div>
            <div className="flex items-center justify-between mt-10">
            <div className="flex items-center space-x-4">
              <div className="bg-green-400  p-2 rounded-full">
                <FaBowlFood className="text-4xl text-green-800"/>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Menus</h3>
       
              </div>
            </div>

            <div className="bg-gray-500 text-white p-2 rounded-full">
              <FaAngleRight className="text-sm"/>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
        <div className="md:col-span-8 bg-gray-800 p-4 rounded">
        <TableComponent />
        </div>
        <div className="md:col-span-4 bg-gray-800 p-4 rounded pt-10">
          <h2 className="text-xl font-semibold mb-4 text-white">Customer's Feedback</h2>
          <CustomerReview reviews={reviews} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Dashboard;
