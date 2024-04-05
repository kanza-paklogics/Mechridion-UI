import React, { useState } from 'react'
import { Typography, Button, Box, Tabs, Tab, Grid } from '@mui/material'

import { TabContext, TabList, TabPanel } from '@mui/lab'

const Detail1 = () => {
  const [value, setValue] = useState('1')
  const [valuee, setValuee] = useState('4')
  const [valueee, setValueee] = useState('7')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  const handleChangee = (event: React.SyntheticEvent, newValuee: string) => {
    setValuee(newValuee)
  }

  const handleChangeee = (event: React.SyntheticEvent, newValueee: string) => {
    setValueee(newValueee)
  }

  return (
    <>
      <Box sx={{ marginTop: 8, mx: 12 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Russo One', fontSize: '44px' }}>1.</Typography>

          <Typography
            sx={{
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
            lineHeight: { xs: '30px', lg: '55px' },
          }}
        >
          Check the machine&apos;s lubrication system to ensure it is working properly the correct
          amount of lubricant to the necessary areas.
        </Typography>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 2, borderColor: '#FF5231' }}>
            <TabList
              sx={{
                '& .MuiTabs-indicator': {
                  height: 0,
                  color: 'white',
                },
                '&.MuiTab-textColorPrimary.Mui-active': {
                  borderColor: '#FF5231',
                },

                '& button': {
                  color: 'white',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                },

                '& button:focus': {
                  color: 'white',

                  borderBottom: 'none',
                  borderRadius: '12px 12px 0px 0px',
                  backgroundColor: '#FF5231',
                },
                '& .Mui-selected': {
                  backgroundColor: '#FF5231 !important',
                  borderRadius: '12px 12px 0px 0px',

                  color: 'white',
                },
              }}
              onChange={handleChange}
              aria-label='basic tabLiTabList example'
            >
              <Tab style={{ color: 'white' }} label='Image' value='1' />
              <Tab style={{ color: 'white' }} label='Video' value='2' />
              <Tab style={{ color: 'white' }} label='Precautions' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='2'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='3'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

      <Box sx={{ marginTop: 8, mx: 12 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Russo One', fontSize: '44px' }}>2.</Typography>

          <Typography
            sx={{
              fontFamily: 'Russo One',
              fontSize: { xs: '32px', md: '46px' },
              background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Correct lubricant
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '1.5px',
            lineHeight: { xs: '30px', lg: '55px' },
          }}
        >
          Use the correct type of lubricant for the specific machine and application.
        </Typography>

        <TabContext value={valuee}>
          <Box sx={{ borderBottom: 2, borderColor: '#FF5231' }}>
            <TabList
              sx={{
                '& .MuiTabs-indicator': {
                  height: 0,
                  color: 'white',
                },
                '&.MuiTab-textColorPrimary.Mui-active': {
                  borderColor: '#FF5231',
                },

                '& button': {
                  color: 'white',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                },

                '& button:focus': {
                  color: 'white',

                  borderBottom: 'none',
                  borderRadius: '12px 12px 0px 0px',
                  backgroundColor: '#FF5231',
                },
                '& .Mui-selected': {
                  backgroundColor: '#FF5231 !important',
                  borderRadius: '12px 12px 0px 0px',

                  color: 'white',
                },
              }}
              onChange={handleChangee}
              aria-label='basic tabLiTabList example'
            >
              <Tab style={{ color: 'white' }} label='Image' value='4' />
              <Tab style={{ color: 'white' }} label='Video' value='5' />
              <Tab style={{ color: 'white' }} label='Precautions' value='6' />
            </TabList>
          </Box>
          <TabPanel value='4'>
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='5'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='6'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>

      <Box sx={{ marginTop: 8, mx: 12 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography sx={{ fontFamily: 'Russo One', fontSize: '44px' }}>3.</Typography>

          <Typography
            sx={{
              fontFamily: 'Russo One',
              fontSize: { xs: '32px', md: '46px' },
              background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            lubricant level
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '1.5px',
            lineHeight: { xs: '30px', lg: '55px' },
          }}
        >
          Check the lubricant level and refill or replace it as necessary.
        </Typography>

        <TabContext value={valueee}>
          <Box sx={{ borderBottom: 2, borderColor: '#FF5231' }}>
            <TabList
              sx={{
                '& .MuiTabs-indicator': {
                  height: 0,
                  color: 'white',
                },
                '&.MuiTab-textColorPrimary.Mui-active': {
                  borderColor: '#FF5231',
                },

                '& button': {
                  color: 'white',
                  textTransform: 'capitalize',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins',
                },

                '& button:focus': {
                  color: 'white',

                  borderBottom: 'none',
                  borderRadius: '12px 12px 0px 0px',
                  backgroundColor: '#FF5231',
                },
                '& .Mui-selected': {
                  backgroundColor: '#FF5231 !important',
                  borderRadius: '12px 12px 0px 0px',

                  color: 'white',
                },
              }}
              onChange={handleChangeee}
              aria-label='basic tabLiTabList example'
            >
              <Tab style={{ color: 'white' }} label='Image' value='7' />
              <Tab style={{ color: 'white' }} label='Video' value='8' />
              <Tab style={{ color: 'white' }} label='Precautions' value='9' />
            </TabList>
          </Box>
          <TabPanel value='7'>
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='8'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value='9'>
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12} smm={8}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
              <Grid item xs={12} smm={4}>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
                <img src='./Images/carradiator.svg' width='100%' alt=''></img>
              </Grid>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}

export default Detail1
