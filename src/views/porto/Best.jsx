import React from 'react'
import hotel1 from 'assets/images/hotel1.jpg'
import hotel2 from 'assets/images/hotel2.jpg'
import hotel3 from 'assets/images/hotel3.jpg'
import hotel4 from 'assets/images/hotel4.jpg'
import {Card} from 'components/ui'
import { FaStar } from 'react-icons/fa'




export const terbaik = [
    {
        img: hotel1,
        title: 'Villa  Kedungu',
        des : 'Villa dengan rating tertinggi di wilayah gianyar dengan fasilitias yang lengkap seperti kolam renang, meja billiard, taman'
    },
    {
        img: hotel2,
        title: 'Villa Makuta',
        des : 'Villa paling banyak di gemari oleh kalangan anak muda karena tempatnya yang modern dan sangat nyaman , berletak di pesisir pantai sangat cocok untuk menikmati sunset'
    },
    {
        img: hotel3,
        title: 'Villa  Canggu',
        des : 'Villa terbaik di daerah ubud dikelilingi dengan pepohonan dan taman hijau dan memiliki pekarangan yang luas sehingga cocok untuk yang sedang mencari tempat yang tenang dan sejuk  '
    },
    {
        img: hotel4,
        title: 'Villa Bli Kadek',
        des : 'Villa yang paling banyak memiliki fasilitas dan terletak di lokasi yang sangat strategis '
    },
]




function Best({image,title,des}) {

    
    const CardHeader = ({gambar}) => (
        <div className=' w-full relative h-[15rem] border  rounded-tl-lg rounded-tr-lg ' style={{
            backgroundImage : `url(${gambar})`,
            backgroundSize: 'cover'
        }} >
            <span className='absolute right-0 top-0 m-3 p-[7px] bg-white rounded-lg flex flex-row justify-center items-center' >
                <FaStar style={{width: '30px'}} />
                <p>
                    3.9 / 5
                </p>
            </span>
        </div>
    )


    return (
        <>
            <Card
                header={<CardHeader gambar={image} />}
                headerClass='p-0'
                headerBorder={false}
                className='w-auto h-[30rem] overflow-clip shadow-xl'
                
            >
                <h2 className='font-sans text-xl text-left my-2'>
                    {title}
                </h2>
                <p className='font-sans'>
                    {des}
                </p>
            </Card>
        </>
    )
}

export default Best