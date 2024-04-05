'use client'

import Signup from '@/components/Signup'

import { Grid } from '@mui/material'
import { withApollo } from 'lib/apollo/withApollo'

function SignUp() {
  return (
    <>
      <div className='bg-[#222222] 2xl:h-screen'>
        <div className='flex'>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-2/5 xl:w-1/3'>
            <img
              className='lg:h-[750px] lg:w-[370px] xl:h-[940px] xl:w-[480px] xll:h-[940px] xll:w-[600px]'
              src='/Car.png'
              alt='Car'
            />
          </div>
          <div className='sm:w-full lg:3/5 xl:w-2/3'>
            <Signup />
          </div>
        </div>
      </div>
    </>
  )
}
export default withApollo()(SignUp)
