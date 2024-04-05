import React from 'react'
import { Typography, Button, Box, Grid } from '@mui/material'

const Detail2 = () => {
  const detail = [
    {
      id: 1,
      title: 'Lubrication system',
      descriptiom:
        "Check the machine's lubrication system to ensure it is working properly and delivering the correct amount of lubricant to the necessary areas.",
      video: './car.mp4',
    },
    {
      id: 2,
      title: 'Correct lubricant ',
      descriptiom: 'Use the correct type of lubricant for the specific machine and application.',
      video: './car.mp4',
    },
    {
      id: 3,
      title: 'lubricant level',
      descriptiom: 'Check the lubricant level and refill or replace it as necessary.',
      video: './car.mp4',
    },
  ]
  return (
    <>
      {detail.map((data, i) => (
        <Box key={i}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography sx={{ fontFamily: 'Russo One', fontSize: '44px' }}>{data?.id}.</Typography>

            <Typography
              sx={{
                marginTop: { smm: 1, md: 0 },
                fontFamily: 'Russo One',
                fontSize: { xs: '32px', md: '46px' },
                background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Lubrication System
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '16px',
              letterSpacing: '1.5px',
              lineHeight: { xs: '30px', lg: '30px' },
            }}
          >
            {/* Check the machine&apos;s lubrication system to ensure it is working properly the correct
            amount of lubricant to the necessary areas. */}
            {data.descriptiom}
          </Typography>

          <video
            style={{ objectFit: 'scale-down' }}
            width='100%'
            height='400px'
            poster='./poster.svg'
            controls
          >
            <source src={data?.video} type='video/mp4' />
          </video>
        </Box>
      ))}
    </>
  )
}

export default Detail2
