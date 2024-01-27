import React from 'react'
import Box from './Box'
// import days from "./../consonants/month"

const SubmissonTracker = (props) => {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-md'>
      <div className='flex mb-4 items-center gap-x-1'>
      <h6 className='text-lg font-medium '>1,107 </h6>
      <span className='font-base'>submissions in the last year</span>

      </div>
      <div className='scrollbar-hide overflow-hidden overflow-x-scroll'>
<div className='flex flex-row items-center scroll-smooth w-[900px] lg:w-full  justify-evenly'>
      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border   shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
     
     

      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    



      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    








      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    








      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    




      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    







      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    










      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    










      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    














      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    














      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
    











      <div className=' w-fit flex flex-col  flex-wrap gap-[1.2px]  h-28 '>
        {
          props.days.map((d, ind)=>(
            
            <div key={ind}>

<div className={`h-3 w-3 rounded-sm border  shadow-sm ${d === 0 ? 'bg-[#F5F5F5] border-[#F5F5F5] ': 
      d === 1 ? 'bg-green-200  border-green-200': 
      d === 2 ? 'bg-green-300  border-green-200': 
      d === 3 ? 'bg-green-400 border-green-300': 
      d === 4 ? 'bg-green-500  border-green-400': 
      d === 5 ? 'bg-green-600  border-green-500': 
      'bg-[#008024]  border-green-600' 
      
      } m-[1px]`}>
  
      </div>
            </div>
            
          ))
        }
      </div>
      </div>


</div>
    





     </div>
  )
}

export default SubmissonTracker