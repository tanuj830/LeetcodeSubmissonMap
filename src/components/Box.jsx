import React from 'react'

const Box = ({submisson}) => {
  return (
    <>
    {
       <div className={`h-3 w-3 rounded-sm border  shadow-sm ${submisson === 0 ? 'bg-neutral-200 border-neutral-200 ': 
       submisson === 1 ? 'bg-green-200  border-green-200': 
       submisson === 2 ? 'bg-green-300  border-green-200': 
       submisson === 3 ? 'bg-green-400 border-green-300': 
       submisson === 4 ? 'bg-green-500  border-green-400': 
       submisson === 5 ? 'bg-green-600  border-green-500': 
       submisson === 6 ? 'bg-green-700  border-green-600':'bg-green-800 border-green-700 ' 
       
       } m-[1px]`}>
   
       </div>
    }
</>
    )
}

export default Box