import React from 'react'
import Kolam from 'assets/images/kolam.jpg'
import Billiard from 'assets/images/billiard.jpg'
import Bathub from 'assets/images/bathub.jpg'
import Bed from 'assets/images/bed.jpg'
import Family from 'assets/images/familyroom.jpg'
import Kitchen from 'assets/images/kitchen.jpg'
import Gym from 'assets/images/minigym.jpg'


export const category = [
    {
        img: Kolam,
        title: 'Kolam'
    },
    {
        img: Bathub,
        title: 'Bathub'
    },
    {
        img: Kitchen,
        title: 'Full Set kitchen'
    },
    {
        img: Billiard,
        title: 'Billiard'
    },
    {
        img: Family,
        title: 'Family Room'
    },
    {
        img: Gym,
        title: 'Mini Gym'
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
                <h2 className='font-sans text-white absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 '>
                    {title}
                  </h2>

            </div>
  )
}

export default Cat