import React from 'react'

function Hero() {
  return (
    <div className='p-4 grid grid-cols-1
     md:grid-cols-2 items-center mt-[-20px]'>
        <div>
            <h4 className='font-bold  text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>Hello, I’m Rahul</h4>
            <h1 className='font-extrabold text-[45px]'>Professional <br></br>Full 
            stack Web<br></br> 
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 '>Developer</span>
            </h1>
            <h1 className='text-orange-500 mt-3'>Welcome to my site</h1>
        
            <div className='mt-6 flex gap-7'>
                <button className='bg-gradient-to-r from-blue-600 to-purple-600  px-3 py-1
                 text-white pb-2 rounded-full
                 hover:scale-105 transition-all duration-300'>Resume</button>
                    <button className=' px-3
                 text-blue-600 pb-1 rounded-full
                 border-blue-600 border-[1px]
                 border-gradient-to-r from-blue-600 to-purple-600 
                 hover:scale-105 transition-all duration-300'>Read More</button>
            </div>
        </div>
        <div>
           
      
            <img src={require('./../Assets/Images/person.png')}
            className="w-[400px] lg:w-[500px]"/>
      
        </div>
      
    </div>
  )
}

export default Hero