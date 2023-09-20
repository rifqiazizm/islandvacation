import React from 'react'
import Villa from 'assets/images/villa2.jpg'
import Villa2 from 'assets/images/villa2a.jpg'
import Villa3 from 'assets/images/villa2b.jpg'



function Villa1() {
  return (
    <>
        <div className='absolute w-[18rem] h-[15rem] rounded-full shadow-xl bottom-0 right-8  group-hover:translate-y-10 group-hover:translate-x-10 transition duration-500 ' style={{
            backgroundImage: `url(${Villa3})`,
            backgroundSize : 'cover'
        }}>

        </div>
        <div className='absolute top-1/2 -translate-y-1/2 w-[18rem] h-[15rem] rounded-full shadow-xl' style={{
            backgroundImage: `url(${Villa})`,
            backgroundSize : 'cover'
        }}>

           
        </div>
        <div className='absolute w-[18rem] h-[15rem] rounded-full shadow-xl right-5 top-11   group-hover:translate-x-20 transition duration-500 ' style={{
            backgroundImage: `url(${Villa2})`,
            backgroundSize : 'cover'
        }}>

        </div>
        
    </>
  )
}

export default Villa1