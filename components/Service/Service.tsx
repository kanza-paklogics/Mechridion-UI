import React from 'react'
import { Typography, Button, Grid, Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import useGetServiceById from 'hooks/servicesByID/useGetServicesByID'
import { CircularProgress } from '@mui/material'
interface ParentProps {
  id: string
}
const Service: React.FC<ParentProps> = ({ id }) => {
  const router = useRouter()
  const [serviceById, loading, refetch] = useGetServiceById(id)
  if (loading) {
    return (
      <div className='flex h-[100vh] justify-center'>
        <CircularProgress color='success' />
      </div>
    )
  }
  return (
    <>
      <Box
        sx={{
          mx: { xs: '10px', sm: '30px ', md: '40px', lg: '80px' },
          // gap: '30px',
        }}
      >
        <div className='mt-12 text-[28px] sm:text-[28px] md:text-[48px] lg:text-[60px] text-left font-russoone'>
          {serviceById?.name}
        </div>
        {serviceById?.options?.map((data: any, i: number) => (
          <Box
            key={i}
            sx={{
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
                  minHeight: { xs: '230px', sm: '210px', md: '160px' },
                  height: 'auto',
                  display: 'flex',
                }}
              >
                <Box sx={{ py: '20px', px: 3, width: '100%' }}>
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
                    {/* Poor lubrication */}
                    {data?.name}
                  </Typography>
                  <Grid container sx={{ display: 'flex' }}>
                    <Grid item md={11}>
                      <Typography
                        sx={{
                          marginTop: '12px',
                          fontFamily: 'poppins',
                          fontWeight: '400',
                          lineHeight: '24px',

                          fontSize: { xs: '14px', sm: '14px', smm: '14px', md: '16px' },

                          color: 'white',
                        }}
                      >
                        {data?.description}
                      </Typography>
                    </Grid>

                    <Grid item md={11}>
                      <Typography
                        sx={{
                          marginTop: '12px',
                          fontFamily: 'poppins',
                          fontWeight: '400',
                          lineHeight: '24px',
                          fontSize: { xs: '14px', sm: '14px', smm: '14px', md: '16px' },
                          color: 'white',
                        }}
                      >
                        {data?.price}$
                      </Typography>
                    </Grid>
                    <Grid item md={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                      <Button
                        onClick={() => router.push('/detail1')}
                        sx={{
                          fontFamily: 'poppins',
                          fontWeight: '600',
                          fontSize: '16px',
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
        ))}
      </Box>
    </>
  )
}

export default Service
