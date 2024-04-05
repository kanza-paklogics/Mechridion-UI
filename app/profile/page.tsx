'use client'

import ProfileContent from '@/components/Profile'
import BasicPlanDetail from '@/components/BasicPlanDetails'
import { useRouter } from 'next/navigation'
import { withApollo } from 'lib/apollo/withApollo'

function Profile() {
  const router = useRouter()
  return (
    <>
      <div className='bg-[#222222] py-1 '>
        <div className=''>
          <p className='text-[60px] text-center font-russoone'>Profile</p>
          {/* <div className='text-right px-10'>
            <button
              onClick={() => router.push('/allmember')}
              className='bg-[black] border text-[20px] border-[#FB5F07] border-solid border-2 hover:bg-[#EC4927] text-white font-bold py-3 px-6 rounded-full ml-6'
            >
              View Members
            </button>
            <button
              onClick={() => router.push('/addmember')}
              className='bg-[#EC4927] text-[20px] border-[#EC4927] hover:bg-[#EC4927] text-white font-bold py-3 px-6 rounded-full ml-6'
            >
              Add Member
            </button>
          </div> */}
        </div>

        <div className='flex mt-6'>
          <div className='w-full sm:w-full lg:3/5 lgg:2/3 xl:w-2/3'>
            <ProfileContent />
          </div>
          <div className='hidden sm:hidden md:hidden lg:block lg:w-2/5 lgg:1/3 xl:w-1/3'>
            <BasicPlanDetail />
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo()(Profile)
