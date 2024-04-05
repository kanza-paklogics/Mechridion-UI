'use client'

import Addmember from '@/components/Member'
import { withApollo } from 'lib/apollo/withApollo'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
function Member() {
  const [userid, setUserId] = useState<string | null>(null)
  const [id, setId] = useState<string | null>(null)
  const searchParams = useSearchParams()
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let userId = localStorage.getItem('userId')
      setUserId(userId)
    }
  })

  useEffect(() => {
    const idValue = searchParams.get('id')
    setId(idValue)
  }, [id])

  return (
    <>
      <div className='bg-[#222222] py-2'>
        <div className=''>
          <p className='text-[60px] text-center font-russoone'>
            {id ? 'Edit Member' : 'Add Member'}
          </p>
        </div>

        <div className=''>
          <div className='flex items-center justify-center mb-12'>
            <Addmember userid={userid} id={id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default withApollo()(Member)
