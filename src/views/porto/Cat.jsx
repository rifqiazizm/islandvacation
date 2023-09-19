import React from 'react'
import Villa from 'assets/images/villa.jpg'
import Apart from 'assets/images/apart.jpg'
import Hotel from 'assets/images/hotel.jpg'


export const category = [
    {
        img: Apart,
        title: 'Apartment'
    },
    {
        img: Villa,
        title: 'Villa'
    },
    {
        img: Hotel,
        title: 'Hotel'
    }

]



function Cat({img,title}) {




  return (
            <div className='w-56 h-28  lg:w-96 lg:h-36 p-0 rounded-lg relative  shadow-2xl hover:cursor-pointer hover:scale-110 transition duration-500 ease-in-out ' style={{
                backgroundImage : `url(${img})`,
                backgroundSize: 'cover'
              }}>
                <div className='w-full h-full rounded-lg p-3 m-0 bg-teal-800 opacity-40 absolute  '>

                  
                </div>
                <h2 className='font-sans text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                    {title}
                  </h2>

            </div>
  )
}

export default Cat