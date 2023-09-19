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
    <div className='w-56 h-28  lg:w-96 lg:h-36 p-3 rounded-lg  shadow-xl  flex justify-center items-center ' style={{
                backgroundImage : `url(${img})`,
                backgroundSize: 'cover'
              }}>
                  <h2 className='font-sans text-white'>
                    {title}
                  </h2>

    </div>
  )
}

export default Cat