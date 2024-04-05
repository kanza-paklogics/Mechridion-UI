import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import UseGetAllServices from 'hooks/services/useGetAllServices'
import Image from 'next/image'
import { CircularProgress, Pagination, PaginationItem } from '@mui/material'

const ServiceSection = () => {
  const [servicesData, loadingservice, refetch] = UseGetAllServices()

  if (loadingservice) {
    return (
      <div className='flex justify-center pt-12'>
        <CircularProgress color='success' />
      </div>
    )
  }

  return (
    <>
      {servicesData?.map((data: any, i: number) => (
        <Box
          key={i}
          sx={{ alignItems: 'center', display: 'flex', columnGap: '28px', marginTop: '40px' }}
        >
          <div className='bg-[#FF4B2A] rounded-full flex justify-center p-5'>
            <Image
              src={data?.imageLink}
              draggable='false'
              alt='Image'
              width={50}
              height={50}
              style={{
                borderRadius: '50%',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
              }}
            />
          </div>

          <Link
            href={`/service/${data?._id}`}
            // as={`/service/${i + 1}`}
            style={{ textDecoration: 'none' }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: '22px',
                fontWeight: '400',
                color: 'white',
                '&:hover': {
                  color: '#FF7551',
                },
              }}
            >
              {data?.name}
            </Typography>
          </Link>
        </Box>
      ))}
      <div className='flex justify-center py-5 '>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              // slots={{ previous: PaginationIcon, next: PaginationIcon }}
              // {...item}
              sx={{
                '&:hover': {
                  bgcolor: '#FF7551', // Change the color for hover
                },
                '&.Mui-selected': {
                  // border: "1px solid var(--primary-blue-original, #23638c)",
                  bgcolor: '#FF4B2A',
                  fontWeight: '700',
                },
              }}
            />
          )}
        />
      </div>
    </>
  )
}

export default ServiceSection
