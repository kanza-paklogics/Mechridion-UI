import React from 'react'

import { useRouter } from 'next/navigation'

import { Typography, Button, Grid, Box } from '@mui/material'
const Search = () => {
  const router = useRouter()
  return (
    <>
      <Box
        sx={{
          mx: { xs: '10px', sm: '30px ', md: '40px', lg: '80px' },
          // gap: '30px',
        }}
      >
        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '10px',
            width: '100%',
            marginTop: '25px',

            padding: '1px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              borderRadius: '10px',
              background: '#222',
            }}
          >
            <Box
              sx={{
                height: { xs: '230px', sm: '210px', md: '140px' },
                display: 'flex',
              }}
            >
              <Box sx={{ marginTop: '20px', px: 3, width: '100%' }}>
                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    fontWeight: '600',
                    fontSize: { sm: '18px', smm: '20px', md: '20px', lg: '24px' },
                    textTransform: 'capitalize',
                    color: 'white',
                    backgroundcolor: 'primary',
                    backgroundImage: `linear-gradient(45deg, #FF4B2A, #FF7551)`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'repeat',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Poor lubrication
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                  <Grid item md={11}>
                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '400',
                        lineHeight: '24px',

                        fontSize: { xs: '14px', sm: '14px', smm: '14px', md: '16px' },
                        textTransform: 'lowercase',

                        color: 'white',
                      }}
                    >
                      It&apos;s absolutely vital that your engine receives enough oil between its
                      moving parts. A lack of lubrication will cause unnecessary friction inside the
                      engine, leading to overheating and worse still, the engine seizing up.
                    </Typography>
                  </Grid>
                  <Grid item md={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      onClick={() => router.push('/detail')}
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '600',
                        fontSize: '16px',

                        marginTop: { xs: 2, sm: 2, smm: 3, md: 3 },

                        color: 'white',
                        width: '116px',
                        height: '39px',

                        textTransform: 'capitalize',
                        background: 'linear-gradient(to right bottom, #ff4b2A, #FF7551)',
                      }}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mx: { xs: '10px', sm: '30px ', smm: '30px', md: '40px', lg: '80px', xl: '80px' },
          // gap: '30px',
        }}
      >
        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '10px',
            width: '100%',
            marginTop: '25px',

            padding: '1px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              borderRadius: '10px',
              background: '#222',
            }}
          >
            <Box
              sx={{
                height: { xs: '230px', sm: '210px', md: '140px' },
                display: 'flex',
              }}
            >
              <Box sx={{ marginTop: '20px', px: 3, width: '100%' }}>
                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    fontWeight: '600',
                    fontSize: { sm: '18px', smm: '20px', md: '20px', lg: '24px' },
                    textTransform: 'capitalize',
                    color: 'white',
                    backgroundcolor: 'primary',
                    backgroundImage: `linear-gradient(45deg, #FF4B2A, #FF7551)`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'repeat',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Failing oil pump
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                  <Grid item md={11}>
                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '400',
                        lineHeight: '24px',

                        fontSize: { xs: '14px', sm: '14px', smm: '14px', md: '16px' },
                        textTransform: 'lowercase',

                        color: 'white',
                      }}
                    >
                      The failure of an oil pump is extremely serious for the lifespan of any
                      engine. If an oil pump fails it will almost certainly starve the engine of
                      necessary lubrication.
                    </Typography>
                  </Grid>
                  <Grid item md={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '600',
                        fontSize: '16px',

                        marginTop: { xs: 2, sm: 2, smm: 3, md: 3 },

                        color: 'white',
                        width: '116px',
                        height: '39px',

                        textTransform: 'capitalize',
                        background: 'linear-gradient(to right bottom, #ff4b2A, #FF7551)',
                      }}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mx: { xs: '10px', sm: '30px ', smm: '30px', md: '40px', lg: '80px', xl: '80px' },
        }}
      >
        <Box
          sx={{
            // borderColor: '#FF6744',

            borderRadius: '10px',
            width: '100%',
            marginTop: '25px',

            padding: '1px',
            position: 'relative',
            background: 'linear-gradient(to right , #FF4B2A ,#FF7551)',
          }}
        >
          <Box
            sx={{
              width: '100%',
              borderRadius: '10px',
              background: '#222',
            }}
          >
            <Box
              sx={{
                height: { xs: '230px', sm: '210px', md: '140px' },
                display: 'flex',
              }}
            >
              <Box sx={{ marginTop: '20px', px: 3, width: '100%' }}>
                <Typography
                  sx={{
                    fontFamily: 'poppins',
                    fontWeight: '600',
                    fontSize: { sm: '18px', smm: '20px', md: '20px', lg: '24px' },
                    textTransform: 'capitalize',
                    color: 'white',
                    backgroundcolor: 'primary',
                    backgroundImage: `linear-gradient(45deg, #FF4B2A, #FF7551)`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'repeat',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Oil deposits and debris
                </Typography>
                <Grid container sx={{ display: 'flex' }}>
                  <Grid item md={11}>
                    <Typography
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '400',
                        lineHeight: '24px',

                        fontSize: { xs: '14px', sm: '14px', smm: '14px', md: '16px' },
                        textTransform: 'lowercase',

                        color: 'white',
                      }}
                    >
                      Older, dirty oil has the propensity to leave deposits and debris on engine
                      fittings such as intake valves and spark plugs, not to mention combustion
                      chambers.
                    </Typography>
                  </Grid>
                  <Grid item md={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Button
                      sx={{
                        fontFamily: 'poppins',
                        fontWeight: '600',
                        fontSize: '16px',

                        marginTop: { xs: 2, sm: 2, smm: 3, md: 3 },

                        color: 'white',
                        width: '116px',
                        height: '39px',

                        textTransform: 'capitalize',
                        background: 'linear-gradient(to right bottom, #ff4b2A, #FF7551)',
                      }}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
        <Button
          onClick={() => router.push('/')}
          sx={{
            fontFamily: 'Russo One',
            fontWeight: '400',
            fontSize: '16px',
            borderRadius: '12px',
            my: '12px',
            float: 'right',
            marginTop: { xs: 2, sm: 2, smm: 3, md: 8 },

            color: 'white',
            width: '185px',
            height: '58px',

            textTransform: 'capitalize',

            background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
          }}
        >
          BACK
        </Button>
      </Box>
    </>
  )
}

export default Search
