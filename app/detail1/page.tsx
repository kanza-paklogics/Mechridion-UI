'use client'

import Detail2 from '@/components/Detail2'
import Precaution from '@/components/Precautions'

import { useRouter } from 'next/navigation'

export default function Detail_1() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] py-3 xll:py-12 sm:py-12 h-full lg:h-full'>
        <div className='hidden sm:flex justify-end items-center sm:mx-12 lg:mx-12 xl:mx-24 '>
         
          <input
              type='text'
              placeholder='2010 toyota tacoma 4 ol'
              className='text-left pl-3 sm:h-8 md:h-10 sm:w-40 md:w-56 lg:w-60 bg-[#222222] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            />
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-poppins sm:h-8 md:h-10 md:w-24 lg:w-36 rounded-md ml-6 cursor-pointer'>
            Change vehicle
            </button>
       
        </div>

        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
          Poor lubrication
        </div>

        {/* <div className="px-7 sm:ml-[5%] md:ml-[11%] lg:ml-[31%] xl:ml-[47%] xll:ml-[59%]"> */}
        <div className='hidden text-right md:block mt-4 mx-6 md:mx-12 lg:mx-12 xl:mx-24'>
          <button
            onClick={() => router.push('/priceestimation')}
            className='bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] sm:text-[14px] md:text-[16px] border-[#EC4927] hover:bg-[#EC4927] text-white font-poppins font-[500] h-[50px] w-[185px] rounded-md cursor-pointer'
          >
            Price Estimation
          </button>
        </div>

        {/* <div>
          <Detail2 />
        </div> */}

        <div className='  md:my-2 lg:my-6 mx-12 md:mx-12 lg:flex lg:mx-10  xlm:mx-20 gap-6 md:gap-4 lg:gap-8 xlm:gap-16'>
          <div className='w-full lg:w-3/4'>
            <Detail2 />
          </div>
          <div className='w-full xlm:px-4 lg:w-1/4'>
            <Precaution />
          </div>
        </div>

        {/* <div className='mt-20 ml-6 md:mx-20 '>
          <div className='flex gap-6'>
            <div className='font-russoone text-[44px]'>1.</div>

            <span className='font-russoone text-[32px] sm:text-[40px] md:text-[46px] bg-clip-text text-transparent bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] '>
              Lubrication System
            </span>
          </div>
          <span className='font-[Poppins] font-[400] lowercase text-[16px] leading-[28px] tracking-widest'>
            Check the machine's lubrication system to ensure it is working properly the correct
            amount of lubricant to the necessary areas.
          </span>
        </div> */}

        {/* <div className='mt-12 pb-12 mx-6 sm:mx-6 md:mx-12 lg:mx-12 lg:mx-12 xl:mx-28 xll:mx-28'>
          <button
            onClick={() => router.push('/')}
            className='float-right bg-gradient-to-r from-[#FF4B2A] to-[#FF7551] sm:text-[14px] md:text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] md:text-[18px] font-russoone h-10 w-40 sm:h-12 sm:w-44 lg:h-16 lg:w-48 rounded-full ml-6'
          >
            BACK
          </button>
        </div> */}
      </div>
    </>
  )
}
