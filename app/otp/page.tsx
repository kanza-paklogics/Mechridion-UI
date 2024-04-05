'use client'

import Otpform from '@/components/Otp'
import { withApollo } from 'lib/apollo/withApollo'

function Otp() {
  return (
    <>
      <div className='bg-[#222222]  2xl:h-screen'>
        <div className='flex'>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-1/3 xl:w-2/5'>
            <div>
              <img
                className='lg:h-[750px] lg:w-[370px] xl:h-[940px] xl:w-[580px] xll:w-[730px]'
                src='/Car.png'
                alt='Car'
              ></img>
            </div>
          </div>
          <div className='w-full sm:w-full lg:2/3 xl:w-3/5'>
            <Otpform />
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo()(Otp)
