import React from 'react'
import Box from '@mui/material/Box'
import { Typography, Grid, Button } from '@mui/material'
import { useRouter } from 'next/navigation'

function Precautions() {
  const router = useRouter()
  const precaution = [
    {
      id: 1,
      title: "Don't open overheat engine",
      icon: 'tick.svg',
    },

    {
      id: 2,
      title: "Don't open overheat engine",
      icon: 'tick.svg',
    },
    {
      id: 3,
      title: "Don't open overheat engine",
      icon: 'tick.svg',
    },
    {
      id: 4,
      title: "Don't open overheat engine",
      icon: 'tick.svg',
    },
    {
      id: 5,
      title: "Don't open overheat engine",
      icon: 'tick.svg',
    },
  ]
  return (
    <>
      <Box
        sx={{
          mx: 'auto',
          marginTop: 8,
        }}
      >
        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '6px',
            width: '105%',
            marginTop: '25px',

            padding: '2px',
            position: 'relative',
            background:
              'linear-gradient(to right, #FF4B2A 0%, #FF7551 100%, #FF5528 100%, #FF7122 100%)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              borderRadius: '6px',
              background: '#222',
            }}
          >
            <Box
              sx={{
                height: { xs: '230px', sm: '210px', md: 420 },
                display: 'flex',
              }}
            >
              <Box sx={{ marginTop: { xs: '0', lg: '20px' }, px: 3, width: '100%' }}>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'Russo One',
                    fontWeight: '400',
                    fontSize: { xs: '20px', sm: '20px', smm: '20px', md: '20px', lg: '24px' },
                    textTransform: 'capitalize',
                    color: 'white',
                  }}
                >
                  Precaution
                </Typography>
                {precaution.map((data, i) => (
                  <Box key={i} sx={{ display: 'flex', gap: 2, my: { xs: 0, lg: 2 } }}>
                    <img src={data.icon} alt='' />
                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '400',
                        lineHeight: '28px',
                        fontSize: { sm: '12px', smm: '16px', md: '14px', lg: '16px' },
                        letterSpacing: '1.58px',

                        color: 'white',
                      }}
                    >
                      {/* Don&apos;t open overheat engine. */}
                      {data.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Button
        onClick={() => router.push('/search')}
        sx={{
          fontFamily: 'Russo One',
          fontWeight: '400',

          fontSize: '16px',
          borderRadius: '12px',
          my: '12px',
          float: 'right',
          marginTop: { xs: 2, sm: 2, smm: 3, md: 72 },

          color: 'white',
          width: '185px',
          height: '58px',

          textTransform: 'capitalize',

          background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
        }}
      >
        BACK
      </Button>
    </>
  )
}

export default Precautions
