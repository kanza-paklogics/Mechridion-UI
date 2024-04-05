import { Box, Typography, Button } from '@mui/material'

const helpSection = () => {
  return (
    <>
      {/* <Box sx={{background:"white",height:"95%"}}> */}
      <Box sx={{ paddingTop: '35px' }}>
        <Typography
          sx={{
            fontFamily: 'Russo One',
            fontSize: '27px',
            fontWeight: '400',
            color: 'black',
            marginLeft: '25px',
          }}
        >
          How we can help you?
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Russo One',
            fontSize: '21px',
            fontWeight: '400',
            color: 'black',
            marginTop: '40px',
            marginLeft: '20px',
          }}
        >
          Table of content
        </Typography>

        <ul>
          <li
            style={{ color: 'black', fontFamily: 'poppins', fontWeight: '500', fontSize: '16px' }}
          >
            Automotive Engine Repair or Replacement
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Diesel Service and Repair
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Steering and Suspension Service
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Power Steering
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Exhaust System
          </li>
          <Box
            sx={{
              display: 'flex',
              gap: { lg: '94px', xl: '170px' },
              marginBottom: { xs: '20px', sm: '20px', xl: '20px' },
            }}
          >
            <li
              style={{
                color: 'black',
                fontFamily: 'poppins',
                fontWeight: '500',
                fontSize: '16px',
                marginTop: '30px',
              }}
            >
              Transmission Service, Repair or Replacement
            </li>
            <Box>
              <Button>
                <img src='./Arrow.svg'></img>
              </Button>
            </Box>
          </Box>

          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '-5px',
            }}
          >
            Cooling System Service (Water Pumps, Radiators, etc.)
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Air Intake Cleaning and Filter Changing
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Power Steering
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Exhaust System
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Transmission Service, Repair or Replacement
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Cooling System Service (Water Pumps, Radiators, etc.)
          </li>
          <li
            style={{
              color: 'black',
              fontFamily: 'poppins',
              fontWeight: '500',
              fontSize: '16px',
              marginTop: '30px',
            }}
          >
            Air Intake Cleaning and Filter Changing
          </li>
        </ul>
      </Box>

      {/* </Box> */}
    </>
  )
}

export default helpSection
