import { useState } from "react";

const Contact = () => {
  return(
    <div className='flex justify-center items-center py-64'> 
          <span className='pl-2  pr- py-4 flex'> 
            <img className = "w-56 "alt = ""  src={""}  />
           </span> 
         <form action='https://getform.io/f/cadac99a-8e07-4f14-bde2-eefd78543f11' method='POST' className= "flex flex-col   w-52 md:w-1/2 items-center duration-500"> 
         <input type='text' name= 'name' placeholder='Enter your name ' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' /> 
         <input type='text' name= 'email' placeholder='Enter your email ' className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none' />
          <textarea name = "message" rows= "10" className='p-2 bg-transparent border-2 rounded-md text-black focus:outline-none   ' >  
          
          </textarea>
          
          <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let,s talk</button>
      
          </form>
         </div>
  )
}

export default Contact;