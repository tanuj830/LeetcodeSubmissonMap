import React from 'react'
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";

const Sidebar = () => {
  return (
    <div className='w-full lg:w-[25vw] rounded-2xl bg-white p-4 shadow-md'>
        <div className='flex items-center justify-start gap-x-5'>
          <img className='w-20 h-20 rounded-full' src="https://assets.leetcode.com/users/avatars/avatar_1695332552.png" alt="" />
          <div className='flex justify-between gap-y-2 items-start flex-col'>
            <div className=''>
                <h1 className='text-lg font-semibold'>Tanuj Bhatt</h1>
                <span className='flex items-center gap-x-1'>
                <small className='text-gray-600'>tanujdotcpp</small>
                <img className='w-3 h-3' src="https://leetcode.com/static/images/badges/2022/lg/2022-annual-50.png" alt="" />

                </span>
            </div>
            <div>
                <h3 className='text-md font-medium text-gray-700'>Rank 198,521</h3>
            </div>
          </div>
          </div>
          <div className='w-full my-5 flex'>
            <Link className="bg-green-500/20 w-full py-2 text-center rounded-2xl text-green-600" to="https://leetcode.com/tanujdotcpp/">Profile</Link>

          </div>

          <div className=''>
                <div className=' text-gray-600'>
                    <div className='flex gap-x-3 items-center my-3'>
                        <span className='text-lg'><CiLocationOn /></span>
                        <span className='text-md'>India</span>
                    </div>
                    <div className='flex gap-x-3 items-center my-3'>
                        <span className='text-lg'><IoLogoGithub /></span>
                        <Link to="https://github.com/tanuj830" className='text-md text-gray-600'>tanuj830</Link>
                    </div>
                    <div className='flex gap-x-3 items-center my-3'>
                        <span className='text-lg'><TfiWorld /></span>
                        <Link to="https://tanujbhatt.in" className='text-md text-gray-600'>tanujbhatt.in</Link>
                    </div>
                    <div className='flex gap-x-3 items-center my-3'>
                        <span className='text-lg'><RiLinkedinFill /></span>
                        <Link to="https://www.linkedin.com/in/tanuj-bhatt-85a2511b5/" className='text-md text-gray-600'>tanuj-bhatt-85a2511b5</Link>
                    </div>
                </div>
          </div>
                  <div className='flex gap-x-3 items-center my-5'>
                        <span className='text-lg'><CiShoppingTag /></span>
            <div className='flex flex-wrap items-center gap-3'>
                <small className='bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-xs'>c++</small>
                <small className='bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-xs'>reactjs</small>
                <small className='bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-xs'>nextjs</small>
                <small className='bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-xs'>typescript</small>
                <small className='bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-xs'>nodejs</small>
            </div>
                  </div>
    </div>
  )
}

export default Sidebar