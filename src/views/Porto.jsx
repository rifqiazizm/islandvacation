import React from 'react'
import Header from '../assets/images/header.jpg'
import {Card} from 'components/ui'







function Porto() {
  return (
    <>
      <div className='landing__header p-10 w-full h-[100vh] relative mb-56'>
          <div className="imageHeader absolute left-0 top-0 w-screen h-[100vh] -z-10" style={{
            backgroundImage: `url(${Header})`,
            backgroundSize : 'cover',
            // clipPath : 'circle(95.4% at 9% 9%)'
            clipPath : 'circle(100% at 25% -70%)'

          }}>
              <div className="transparent w-full h-[100vh] opacity-[0.8]  
                 bg-gradient-to-r from-[#100d18dd] from-80% to-[#1519209f] to-90% z-[5]  ">

              </div>
          
        
          </div>

          <div className="textHeader z-[6] absolute top-1/2 -translate-y-1/2 left-10 w-1/2 md:w-5/12">
                {/* <AnimationOnScroll animateIn="animate__fadeIn" initiallyVisible > */}
                    <h2 className="font-sans font-bold text-5xl text-white text-left lg:text-7xl ">
                    Temukan Penginapan Terbaikmu
                    </h2>
                    <p className=' text-lg lg:text-2xl font-sans mt-5 text-teal-300' >
                      island vacation menyediakan penginapan yang sesuai dengan kebutuhanmu  
                    </p>
                {/* </AnimationOnScroll> */}
          </div>

          <Card className='absolute right-20 bottom-10  ' >

          </Card>

          

      </div>
      <div className="w-full h-[100vh] p-10 ">
          <h2 className='text-4xl font-sans'>
            HALOOOOO
          </h2>
      </div>
    </>
  )
}

export default Porto