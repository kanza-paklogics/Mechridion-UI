'use client'

import { withApollo } from 'lib/apollo/withApollo'

function Success() {
  return (
    <>
      <div className='bg-[#222222] h-screen '>
        <div className='text-center font-russoone text-4xl pt-8'>Subscription Successfully </div>
      </div>
    </>
  )
}
export default withApollo()(Success)
