import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { AppBar, Box, Menu, MenuItem, styled, Grid, Toolbar, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { usePathname, useRouter } from 'next/navigation'
import useViewer from 'hooks/viewer/useViewer'
import Link from 'next/link'
import Image from 'next/image'
import { withApollo } from 'lib/apollo/withApollo'

const Navbar = () => {
  const [viewer, loading, refetchViewer] = useViewer()
  const [username, setUsername] = useState<string | null>(null)
  const [open, SetOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const [openn, setOpenn] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let firstname = localStorage.getItem('firstName')
      setUsername(firstname)
    }
  })

  const handleClick = () => {
    setOpenn((prev) => !prev)
  }
  const handleClickAway = () => {
    setOpenn(false)
  }

  // if (loading) {
  //   return <>...</>
  // }

  const StyledToolbar = styled(Toolbar)({
    // display: "flex",
  })
  const SocialBox = styled(Box)({
    display: 'flex',
    // gap: 12,
  })
  const SearchBox = styled(Box)({
    display: 'flex',
    gap: 4,
  })

  const handleLogout = () => {
    localStorage.clear()
  }

  const styles = {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 999,

    backgroundColor: '#242424',
    py: 1,
    width: '130px',
  }
  const MenuItems = [
    { name: 'HOME', path: '/' },

    { name: 'SERVICES', path: '/services' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'PRICING PLAN', path: '/pricingplan' },
  ]

  return (
    <>
      <AppBar
        sx={{
          background: '#242424',
          px: 4,
        }}
        position={'static'}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            height: '88px',
          }}
        >
          <SocialBox>
            <Grid sx={{ marginTop: '5px' }}>
              <Image
                className='cursor-pointer'
                onClick={() => router.push('/')}
                src='/logo.svg'
                draggable='false'
                width={80}
                height={30}
                alt=''
              />
              <Typography
                sx={{
                  fontWeight: '950',
                  fontStyle: 'italic',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                }}
              >
                Mechiridion
              </Typography>
            </Grid>
          </SocialBox>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'flex', marginTop: '5px' },
              gap: { md: '18px', lg: '40px' },
            }}
          >
            {MenuItems.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '400',
                  textTransform: 'uppercase',
                  fontFamily: 'Poppins',
                  lineHeight: '18px',
                }}
              >
                <Link
                  style={
                    pathname === `${item.path}`
                      ? {
                          color: 'white',
                          fontWeight: '500',
                          textDecoration: 'none',
                          borderRadius: '12px',
                          padding: '9px',
                          width: '2px',

                          border: '1px solid #FF6744',
                        }
                      : { color: 'white', textDecoration: 'none' }
                  }
                  href={item.path}
                >
                  {item.name}
                </Link>
              </Typography>
            ))}
          </Box>

          <SearchBox>
            <Grid>
              <Box sx={{ marginTop: '15px', marginRight: '12px' }}>
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                  }}
                >
                  {/* Ryan Azhari */}
                  {username || ''}
                </Typography>
                <Typography
                  align='right'
                  sx={{
                    fontSize: '12px',
                    color: '#A6ACBE',
                    fontWeight: '400',
                    fontFamily: 'Rubik',
                  }}
                >
                  user
                </Typography>
              </Box>
            </Grid>
            <Box sx={{ marginTop: '10px' }}>
              <Image
                src='/profile.svg'
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
            </Box>
            <Box sx={{ marginTop: '20px' }}>
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: 'relative' }}>
                  <Button onClick={handleClick}>
                    <ExpandMoreIcon style={{ fill: 'white' }} />
                  </Button>
                  {openn ? (
                    <Box sx={styles}>
                      <Box
                        sx={{ width: '100%', my: '4px', '&:hover': { backgroundColor: '#FF704D' } }}
                      >
                        <Link
                          style={{
                            color: '#fff',
                            paddingLeft: '10px',
                            fontSize: '14px',
                            textDecoration: 'none',

                            fontWeight: '400',
                          }}
                          href='/profile'
                        >
                          Profile
                        </Link>
                      </Box>
                      <Box
                        sx={{
                          width: '100%',
                          my: '4px',

                          '&:hover': { backgroundColor: '#FF704D' },
                        }}
                      >
                        <Link
                          style={{
                            color: '#fff',
                            paddingLeft: '10px',
                            fontSize: '14px',
                            textDecoration: 'none',

                            fontWeight: '400',
                          }}
                          href='/addmember'
                        >
                          Add Member
                        </Link>
                      </Box>
                      <Box
                        sx={{ width: '100%', my: '4px', '&:hover': { backgroundColor: '#FF704D' } }}
                      >
                        <Link
                          style={{
                            color: '#fff',
                            paddingLeft: '10px',
                            fontSize: '14px',
                            textDecoration: 'none',

                            fontWeight: '400',
                          }}
                          href='/allmember'
                        >
                          Members
                        </Link>
                      </Box>
                      <Box
                        sx={{ width: '100%', my: '4px', '&:hover': { backgroundColor: '#FF704D' } }}
                      >
                        <Link href='/signin' passHref legacyBehavior>
                          <a
                            onClick={handleLogout}
                            style={{
                              color: '#fff',
                              paddingLeft: '10px',
                              fontSize: '14px',
                              textDecoration: 'none',
                              fontWeight: '400',
                            }}
                          >
                            Logout
                          </a>
                        </Link>
                      </Box>
                    </Box>
                  ) : null}
                </Box>
              </ClickAwayListener>
            </Box>
            <MenuIcon
              sx={{
                color: 'white',
                display: { xs: 'block', md: 'none', marginLeft: '20px', marginTop: '20px' },
              }}
              onClick={() => SetOpen(!open)}
            />
          </SearchBox>
        </Toolbar>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={open}
          onClose={() => SetOpen(!open)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ width: 350, height: '90vh' }}>
            {MenuItems.map((item, i) => (
              <MenuItem
                key={i}
                sx={{
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  fontFamily: 'Poppins',
                  lineHeight: '18px',
                  fontStyle: 'normal',
                  textAlign: 'center',
                }}
              >
                <Link
                  style={
                    pathname === `${item.path}`
                      ? {
                          color: 'white',
                          textAlign: 'center',

                          textDecoration: 'none',
                          fontFamily: 'Poppins',
                          borderRadius: '25px',
                          fontWeight: '500',
                          padding: '7px',
                          paddingLeft: '20px',
                          paddingRight: '20px',
                          border: '2px solid #FF6744',
                        }
                      : {
                          color: 'white',

                          textDecoration: 'none',
                        }
                  }
                  href={item.path}
                >
                  {item.name}
                </Link>
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </AppBar>
    </>
  )
}

export default withApollo()(Navbar)
