'use client'
import Service from '@/components/Service'
import Link from 'next/link'
import { withApollo } from 'lib/apollo/withApollo'

function Services({ params }: { params: { id: string } }) {
  return (
    <>
      <div className='py-6 sm:py-12 bg-[#222222] min-h-[100vh] h-auto:'>
        <div className='hidden sm:flex justify-between items-center mx-16 lg:mx-24 '>
          <div className='flex gap-1'>
            <Link
              href={'/'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Home
            </Link>
            <div className='text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'>|</div>
            <Link
              href={'/service'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Services
            </Link>
            <div className='text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'>|</div>
            <Link
              href={'/serviceselection'}
              className='no-underline text-[14px] text-[#FF6A47] font-poppins font-[400] pt-[15px]'
            >
              Detail
            </Link>
          </div>
          <div>
            <input
              type='text'
              placeholder='2010 toyota tacoma 4 ol'
              className='text-left pl-3 sm:h-8 md:h-10 sm:w-40 md:w-56 lg:w-60 bg-[#222222] border sm:text-[10px] md:text-[12px] border-[#FB5F07] border-solid border-1 placeholder-white placeholder-font-[400] text-white font-poppins rounded-md ml-6'
            ></input>
            <button className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] md:text-[16px] font-poppins sm:h-8 md:h-10 md:w-24 lg:w-40 rounded-md ml-6'>
              Change vehicle
            </button>
          </div>
        </div>

        <div>
          <Service id={params?.id} />
        </div>
      </div>
    </>
  )
}

export default withApollo()(Services)
