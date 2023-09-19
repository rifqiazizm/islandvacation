import React,{useState} from 'react'
import Header from '../assets/images/header.jpg'
import {Card} from 'components/ui'
import CardHeader from './porto/HeaderCard'
import { useEffect } from 'react'
import useResponsive from 'utils/hooks/useResponsive' 
import Cat,{category} from './porto/Cat'
import _ from 'lodash'
import Best, {terbaik} from './porto/Best'
import Video from 'assets/images/Header.mp4'




function Porto() {

  const [style,setStyle] = useState({
    width : '100'
  })


  const { smaller } = useResponsive()


  // const clipResponsive = (e) => {

  //   let status = e

  //   return {
      
  //     // clipPath : 'circle(95.4% at 9% 9%)'
  //     clipPath : `circle(${width}% at 25% -70%)`
  //   }
  // }


  useEffect(() => {
    console.log(smaller)
    console.log(window.innerWidth)
    switch (true) {
      case smaller.xl:
        setStyle({width : '120'});
        console.log(smaller.xl)
        break;
      case smaller.lg:
        setStyle({width : '190'});
        break;
      case smaller.md:
        setStyle({width : '250'});
        break;
      case smaller.sm:
        setStyle({width : '320'});
        break;
    }
  },[smaller])


  return (
    <>
      <div className='landing__header p-0 w-full h-[70vh] lg:h-[100vh] relative mb-20  overflow-hidden'>
          <div className="imageHeader absolute relative left-0 top-0 w-screen h-[100vh] -z-10  " style={
            {
              backgroundImage: `url(${Header})`,
              backgroundSize : 'cover',
              clipPath : `circle(${style.width}% at 25% -70%)`
            }
          }>
           
            <div className="transparent absolute top-0 left-0  w-full h-[100vh] opacity-[0.8]  
                 bg-gradient-to-r from-[#100d18dd] from-80% to-[#1519209f] to-90% z-[8]   ">
              </div>
               <video autoPlay loop muted className='m-0 top-0 left-0 p-0  w-[96%] h-auto z-[7] ' src={Video}>

            </video>
              

          </div>
          
          

          <div className="textHeader z-[10] absolute top-44 md:top-1/2 -translate-y-1/2 left-10 w-1/2 md:w-5/12">
                {/* <AnimationOnScroll animateIn="animate__fadeIn" initiallyVisible > */}
                    <h2 className="font-sans  text-5xl text-white text-left lg:text-7xl ">
                    Temukan Penginapan Terbaikmu
                    </h2>
                    <p className=' text-lg lg:text-2xl font-sans mt-5 text-teal-300' >
                      island vacation menyediakan penginapan yang sesuai dengan kebutuhanmu  
                    </p>
                {/* </AnimationOnScroll> */}
          </div>

          <Card className='absolute right-20 top-44  md:top-1/2 md:-translate-y-1/2 w-1/4  md:w-1/3 shadow-xl ' >
            <CardHeader />
          </Card>

          

      </div>
      <div className="w-full h-[50vh]   p-16 flex flex-col justify-start items-stretch">
          <h4 className='text-2xl my-2 font-semibold  font-sans '>
            Cari Kategori
          </h4>
          <p className='font-sans text-xl'>
            Cari kebutuhanmu sesuai kategori pilihanmu
          </p>
          
          <div className='w-full h-1/4 py-10 flex gap-10  flex-row justify-between items-stretch' >
              
          {
            _.map(category,(e) => (
              <Cat img={e.img} title={e.title} />
            ))
          }

          
          </div>


      </div>
      <div className='rating w-full h-[40rem] my-12 p-16 flex flex-col justify-start items-stretch '>
        <h4 className='text-2xl my-2 font-semibold  font-sans '>
            Penginapan Terbaik
          </h4>
          <p className='font-sans text-xl'>
            lihat penginapan terbaik di sekitarmu 
          </p>
        <div className='my-20 h-[50vh] flex justify-start items-stretch gap-6  ' > 
          {
            _.map(terbaik,(e) => (
              <Best image={e.img} title={e.title} des={e.des} />
            ))
          }

        </div>

      </div>

      <div className=' w-full h-[30rem] my-10 p-16 flex flex-col justify-start items-stretch '>
      <h4 className='text-2xl my-2 font-semibold  font-sans '>
            Villa Terdekat
          </h4>
          <p className='font-sans text-xl'>
            lihat penginapan terdekat di sekitarmu 
          </p>
        <div className='my-20 h-[30rem] flex justify-start items-stretch gap-6  ' > 
          {
            _.map(terbaik,(e) => (
              <Best image={e.img} title={e.title} des={e.des} />
            ))
          }

        </div>

      </div>
    </>
  )
}

export default Porto