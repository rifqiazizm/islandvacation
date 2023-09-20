import React from 'react'
import Villa from 'assets/images/Villa1.jpg'
import Villa2 from 'assets/images/villa1a.jpg'
import Villa3 from 'assets/images/villa1b.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll'



function Villa1() {
  return (
    <>
    <AnimationOnScroll animateIn="animate__fadeIn"  initiallyVisible >
        <div className='absolute w-[20rem] h-[15rem] rounded-lg shadow-xl -bottom-5 right-8  group-hover:translate-y-16 group-hover:translate-x-14 transition duration-500 ' style={{
            backgroundImage: `url(${Villa3})`,
            backgroundSize : 'cover'
        }}>
        </div>
    </AnimationOnScroll>
    <AnimationOnScroll animateIn="animate__fadeIn"  initiallyVisible >
        <div className='absolute top-1/2 -translate-y-1/2 w-[20rem] h-[15rem] rounded-lg shadow-xl' style={{
            backgroundImage: `url(${Villa})`,
            backgroundSize : 'cover'
        }}>

           
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeIn" initiallyVisible >
        <div className='absolute w-[20rem] h-[15rem] rounded-lg shadow-xl right-5 top-11   group-hover:translate-x-24 transition duration-500 ' style={{
            backgroundImage: `url(${Villa2})`,
            backgroundSize : 'cover'
        }}>

        </div>
        </AnimationOnScroll>
    </>
  )
}

export default Villa1