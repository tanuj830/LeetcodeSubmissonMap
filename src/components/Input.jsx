import React from 'react'
// import days from "./../consonants/month"

const Input = ({days, setDays}) => {

  
// {new Date().toLocaleString() + ""}
// {new Date().toLocaleString("en-US", { month: "long" })}
// {new Date().toLocaleString("en-US", { day : '2-digit'})}
// {new Date().getFullYear()}

function handleClick (){
  
  var date = new Date().toLocaleString("en-US", { day : '2-digit'})


  setDays(days => {
    return days.map((item, j) => {
      return j == date ? item + 1 : item
    })
  })


//     if(days.length > 0 )
//     {
//     var res =   days.map((day, ind) => {
        
//       if (ind+1 === date) {
// var count = day.submisson

          
//             day.submisson= count+1
//           return day

//         } 
//       });
//       setDays(res)
      console.log(days)
      // Re-render with the new array
    
  }

  return (
    <div className='mb-5 relative'> 
    <button onClick={handleClick} className='bg-green-500 text-white absolute bottom-2 right-6 px-6 py-2 rounded-full '>Submit </button>
      <iframe
 title="This is a unique title"
 height="450px"  
 src="https://onecompiler.com/embed/" 
 width="100%"
 ></iframe>
    </div>
  )
}

export default Input