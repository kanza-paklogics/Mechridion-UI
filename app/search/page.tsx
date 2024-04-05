'use client'

import Searchh from '@/components/Search'
export default function Search() {
  return (
    <>
      <div className='py-6 sm:py-12 bg-[#222222] h-[1020px] lg:h-[900px]'>
        <div className='hidden sm:flex justify-end items-center mx-16 lg:mx-24 '>
          <div>
            <input
              type='text'
              placeholder='2010 toyota tacoma 4 ol'
              className='text-left pl-3 sm:h-8 md:h-10 sm:w-40 md:w-56 lg:w-60 bg-[#222222] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-poppins sm:h-8 md:h-10 md:w-24 lg:w-30  md:w-36 rounded-md ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
          Search Result
        </div>
        <div>
          <Searchh />
        </div>
      </div>
    </>
  )
}
