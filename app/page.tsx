'use client'
import { withApollo } from 'lib/apollo/withApollo'
import useGetAllVehicleModel from 'hooks/getAllVehicleModel/useGetAllVehicleModel'
import useGetVehicleModelById from 'hooks/getVehicleModelById/useGetVehicleModelById'
import Link from 'next/link'
import Dashboard from '@/components/Dashboard'
import { toast } from 'react-toastify'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import withAuth from 'hocs/withAuth'
import React, { SyntheticEvent, useState } from 'react'

const Home = () => {
  const [selectedId, setSelectedId] = useState('2EaQti4RLW5WJ7HRX')
  const [search, setSearch] = useState('2EaQti4RLW5WJ7HRX')
  const [getAllVehicleModelQuery] = useGetAllVehicleModel()
  const [getVehicleModelByIdQuery, loading] = useGetVehicleModelById(search)

  return (
    <>
      <div className='bg-[#222222] py-12'>
        <div className='hidden sm:flex justify-between items-center mx-16 md:mx-24 '>
          <Link href='/' className='no-underline text-[14px] text-[#FF6A47] font-poppins pt-[15px]'>
            Home
          </Link>

          <div className='flex items-center'>
            <button
              onClick={() => {
                window.open('https://apps.apple.com/app/id1521588286', '_blank')
              }}
              className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] lg:text-[16px] font-poppins sm:h-8 md:h-10 md:w-24 lg:w-36 rounded-md ml-6 cursor-pointer'
            >
              Our Scanner
            </button>

            <Stack sx={{ width: 300, ml: 3 }}>
              <Autocomplete
                onChange={(event: SyntheticEvent, value: any) => {
                  setSelectedId(value?.id)
                }}
                freeSolo
                disableClearable
                options={
                  getAllVehicleModelQuery?.map((option: any) => ({
                    label: option?.name,
                    id: option?._id,
                  })) || []
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#FF5B39',
                        },
                      },
                    }}
                    InputLabelProps={{
                      style: { textAlign: 'start' },
                    }}
                    label='Corolla Compact VIII (E110)'
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Stack>

            <button
              onClick={() => {
                setSearch(selectedId), toast.success('Change Vehicle Successfully')
              }}
              className='bg-[#EC4927] border-[#EC4927] hover:bg-[#EC4927] text-white sm:text-[12px] font-[600] lg:text-[16px] font-poppins sm:h-8 md:h-10 md:w-32 lg:w-36 rounded-md ml-6 cursor-pointer'
            >
              Change vehicle
            </button>
          </div>
        </div>

        <Dashboard getVehicleModelByIdQuery={getVehicleModelByIdQuery} />
      </div>
    </>
  )
}

export default withApollo()(withAuth(Home))
