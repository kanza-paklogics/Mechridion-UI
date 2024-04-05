'use client'
import { withApollo } from 'lib/apollo/withApollo'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import useGetAllMember from 'hooks/member/useGetAllMembers'
import useDeleteMember from 'hooks/member/useDeleteMember'
import { useState } from 'react'
import { toast } from 'react-toastify'

import ClickAwayListener from '@mui/base/ClickAwayListener'
import { CircularProgress } from '@mui/material'

const AllMember: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [memberId, setMemberId] = useState(null)
  const [getMemberData, loadingMember, refetch] = useGetAllMember()
  const [deleteMemberData, loadingDeleteMember] = useDeleteMember()

  const router = useRouter()

  const openModal = (id: any) => {
    setModalOpen((oldState) => !oldState)
    setMemberId(id)
  }

  const handleDelete = async () => {
    try {
      const result = await deleteMemberData({
        variables: { id: memberId },
      })
      if (result) {
        refetch()
        toast.success('Deleted Successfully')
        closeModal()
      }
    } catch (err: any) {
      toast.error(err)
    }
  }
  const closeModal = () => {
    setModalOpen(false)
  }

  if (loadingMember) {
    return <div className='bg-[#222222] h-[100vh] flex pt-5 justify-center'><CircularProgress color='success' /></div>
  }

  return (
    <>
      <div className='bg-[#222222] py-1 h-[950px] 2xl:h-screen'>
        <p className='mt-12 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-center font-russoone font-normal'>
          Added Members
        </p>

        <div className='relative'>
          {modalOpen && (
            <ClickAwayListener onClickAway={closeModal}>
              <div className='absolute p-4 top-[5%] left-[35%]  w-[500px] h-[auto] bg-white rounded-lg shadow dark:bg-gray-900'>
                <div className='flex p-4 border-b rounded-t dark:border-gray-600 gap-4'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    Are you sure you want to delete?
                  </h3>
                  <button
                    type='button'
                    className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline my-auto dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer'
                    onClick={closeModal}
                  >
                    <svg
                      className='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'
                    >
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        strokeWidth='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>

                <div className='flex justify-end items-center py-2 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600'>
                  <button
                    // data-modal-hide="defaultModal"
                    type='button'
                    className='text-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    // data-modal-hide="defaultModal"
                    type='button'
                    className='text-white bg-red-600 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10 cursor-pointer'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </ClickAwayListener>
          )}
        </div>

        <div className='flex sm:mx-6 md:mx-8 lg:mx-16 xl:mx-24 gap-6 sm:gap-8 md:gap-8 lg:gap-12 xl:gap-24'>
          <p className='text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-russoone'>
            Profile
          </p>
          <p className='text-[20px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-russoone'>
            Name
          </p>
        </div>

        {getMemberData?.map((data: any, i: number) => (
          <div key={i}>
            <div className='flex sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 gap-[1%] sm:gap-[12%] md:gap-[12%] lg:gap-[18%]  xl:gap-[23%] xlm:gap-[30%] xll:gap-[46%]'>
              <div className='flex gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-36'>
                <Image
                  src={data?.profileImage}
                  draggable='false'
                  alt='Image'
                  width={100}
                  height={100}
                  style={{
                    borderRadius: '50%',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                  }}
                />
                <div className='w-28  sm:w-32 md:w-40 lg:w-56 xl:w-64'>
                  <p className='sm:text-[16px] md:text-[20px] font-[400] lg:text-[32px] font-roboto'>
                    {/* Junaid afzal */}
                    {data?.profile?.firstName}
                  </p>
                </div>
              </div>
              <div className='flex justify-items-center place-items-center'>
                <button
                  onClick={() => router.push(`/addmember?id=${data?._id}`)}
                  style={{
                    background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                  }}
                  className='cursor-pointer text-[12px] sm:text-[14px]  lg:text-[20px] font-[700] border-[#EC4927] hover:bg-[#EC4927] text-white font-mulish py-1 px-4 sm:py-2 sm:px-5 md:py-3 md:px-8 lg:py-[16px] lg:px-10 rounded-xl'
                >
                  <div className='flex justify-items-center place-items-center gap-2'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M20.8229 2.37515H14.2323C13.8527 2.37515 13.5447 2.06716 13.5447 1.68758C13.5447 1.308 13.8527 1 14.2323 1H22.4823C22.8619 1 23.1699 1.308 23.1699 1.68758V9.93756C23.1699 10.3171 22.8619 10.6251 22.4823 10.6251C22.1028 10.6251 21.7948 10.3171 21.7948 9.93756V3.347L9.21877 15.9235C8.95013 16.1921 8.51486 16.1921 8.24644 15.9235C7.97781 15.6551 7.97781 15.2199 8.24644 14.9512L20.8229 2.37515ZM17.67 21.6247V11.3122C17.67 10.9327 17.978 10.6249 18.3576 10.6249C18.7371 10.6249 19.0451 10.9327 19.0451 11.3122V22.3124C19.0451 22.692 18.7371 23 18.3576 23H1.8575C1.47792 23 1.16992 22.692 1.16992 22.3124V5.81245C1.16992 5.43287 1.47792 5.12488 1.8575 5.12488H12.8577C13.2373 5.12488 13.5451 5.43287 13.5451 5.81245C13.5451 6.19203 13.2373 6.50003 12.8577 6.50003H2.5452V21.6246L17.67 21.6247Z'
                        fill='white'
                        stroke='white'
                        strokeWidth='0.5'
                      />
                    </svg>
                    Edit
                  </div>
                </button>

                <button
                  onClick={() => openModal(data?._id)}
                  className='bg-[#222222] font-mulish border cursor-pointer text-[12px] sm:text-[14px]  lg:text-[20px] border-[#FB5F07] border-solid hover:bg-[#EC4927] text-white font-bold py-1 px-3 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-4 lg:px-9 rounded-xl ml-6'
                >
                  <div className='flex justify-items-center place-items-center gap-2'>
                    <svg
                      width='25'
                      height='26'
                      viewBox='0 0 25 26'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18.1965 3.08861V2.34V2.08C18.1965 1.80843 17.9774 1.59139 17.7083 1.59139H17.4479H16.6993H7.55208H7.29167C7.02258 1.59139 6.80348 1.80843 6.80348 2.08V2.34V3.93139H5.95694V2.08C5.95694 1.34732 6.55489 0.748605 7.29167 0.748605H17.7083C18.4451 0.748605 19.0431 1.34732 19.0431 2.08V3.93139H18.1965V3.08861ZM7.55208 5.42861H8.30069H16.6993H17.4479H19.7917H20.5403H23.9583C24.1222 5.42861 24.2514 5.55932 24.2514 5.72V6.27139H22.7734H22.0594L22.0257 6.98463L21.2216 23.9821L21.2216 23.9825C21.1883 24.6936 20.6038 25.2514 19.8893 25.2514H5.11068C4.39954 25.2514 3.81165 24.6904 3.77838 23.9824L3.77837 23.9821L2.97433 6.98463L2.94059 6.27139H2.22656H0.748605V5.72C0.748605 5.55932 0.877807 5.42861 1.04167 5.42861H4.45973H5.20833H7.55208ZM19.6387 24.4086H20.3527L20.3864 23.6954L21.1742 7.0554L21.2113 6.27139H20.4264H4.57357H3.78868L3.8258 7.0554L4.61356 23.6954L4.64732 24.4086H5.36133H19.6387Z'
                        stroke='white'
                        strokeWidth='1.49721'
                      />
                    </svg>
                    Delete
                  </div>
                </button>
              </div>
            </div>

            <svg
              className='sm:mx-6 md:mx-12 lg:mx-16 xl:mx-32'
              viewBox='0 0 1230 1'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                x1='-4.37114e-08'
                y1='0.5'
                x2='1230'
                y2='0.499892'
                stroke='#EBEBEB'
                strokeOpacity='0.2'
              />
            </svg>
          </div>
        ))}
      </div>
    </>
  )
}

export default withApollo()(AllMember)
