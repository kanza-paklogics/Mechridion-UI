import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Typography, TextField, InputAdornment, Button, Box } from '@mui/material'
// import ModelView from '../../app/hello/page'
interface VehicleInterface {
  id: number
  title: string
  detailPath?: string
}

const Dashboard = ({ getVehicleModelByIdQuery }: any) => {
  const router = useRouter()

  const vehicleDetails: VehicleInterface[] = [
    { id: 1, title: 'Engine and Powertrain' },
    { id: 2, title: 'Electrical System' },
    { id: 3, title: 'Braking System' },
    { id: 4, title: 'Suspension and Steering' },
  ]

  const vehicleDetails1: VehicleInterface[] = [
    { id: 5, title: 'Fuel System' },
    { id: 6, title: 'Cooling System' },
    { id: 7, title: 'Exhaust System' },
    { id: 8, title: 'Body And Interior' },
  ]

  return (
    <>
      <div>
        <Typography
          sx={{ fontFamily: 'Russo One', fontWeight: '400', fontSize: '35px', marginTop: '60px' }}
          align='center'
        >
          Search here
        </Typography>

        <TextField
          name='name'
          fullWidth
          type='text'
          sx={{
            '& .MuiInputBase-root': {
              height: 80,
            },
            px: { sm: '15%', md: '16%', lg: '18%', xl: '20%' },
            marginTop: '40px',
            '& .Mui-error': {
              fontSize: '14px',
            },
            '& .MuiOutlinedInput-root': {
              '& > fieldset': {
                borderColor: '#FF6744',
                borderRadius: '10px',
                borderWidth: '2px',
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Button>
                  <img src='./search.svg' style={{ height: '60px' }}></img>
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className='flex justify-between items-center xl:mx-24  2xl:mx-56'>
        <div className='flex flex-col'>
          {vehicleDetails.map((detail: VehicleInterface) => (
            <Box
              key={detail.id}
              sx={{
                borderRadius: '5px',
                width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
                marginTop: '25px',
                padding: '2px',
                position: 'relative',
                background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
              }}
            >
              <Box
                sx={{
                  width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                  background: '#222',
                }}
              >
                <Button
                  onClick={() =>
                    router.push(
                      `vehicleDetail/${detail?.id}?modelId=${getVehicleModelByIdQuery?._id}`,
                    )
                  }
                  sx={{
                    height: { sm: '120px', smm: '130px', md: '200px' },
                    width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                  }}
                >
                  <Box sx={{ marginTop: '20px' }}>
                    <img className='w-64 sm:w-20 md:w-28 lg:w-32' src='./gear.svg' alt='gear' />

                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        marginTop: { sm: '1px', smm: '5px', md: '20px' },
                        fontSize: { sm: '12px', smm: '16px', md: '20px' },
                        textTransform: 'capitalize',
                        color: 'white',
                      }}
                    >
                      {detail?.title}
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          ))}
        </div>
        <div>
          {/* <img className='h-64 xl:h-full' draggable='false' src='./car.svg' alt='car' /> */}
          {/* <ModelView/> */}
        </div>

        <div className='flex flex-col'>
          {vehicleDetails1.map((detail: VehicleInterface) => (
            <Box
              key={detail.id}
              sx={{
                borderRadius: '5px',
                width: { sm: '139px', smm: '169px', md: '249px', lg: '279px' },
                marginTop: '25px',
                padding: '2px',
                position: 'relative',
                background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
              }}
            >
              <Box
                sx={{
                  width: { sm: '135px', smm: '165px', md: '245px', lg: '275px' },
                  background: '#222',
                }}
              >
                <Button
                  onClick={() =>
                    router.push(
                      `vehicleDetail/${detail?.id}?modelId=${getVehicleModelByIdQuery?._id}`,
                    )
                  }
                  sx={{
                    height: { sm: '120px', smm: '130px', md: '200px' },
                    width: { sm: '130px', smm: '170px', md: '250px', lg: '280px' },
                  }}
                >
                  <Box sx={{ marginTop: '20px' }}>
                    <img className='w-64 sm:w-20 md:w-28 lg:w-32' src='./gear.svg' alt='gear' />
                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        marginTop: { sm: '1px', smm: '5px', md: '20px' },
                        fontSize: { sm: '12px', smm: '16px', md: '20px' },
                        textTransform: 'capitalize',
                        color: 'white',
                      }}
                    >
                      {detail?.title}
                    </Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          ))}
        </div>
      </div>
    </>
  )
}

export default Dashboard
