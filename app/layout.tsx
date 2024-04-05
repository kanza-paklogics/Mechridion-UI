'use client'
import './globals.css'

import { PropsWithChildren } from 'react'
import { lightTheme } from './theme/themes'
import ContextProvider from './context-provider'

import { ThemeProvider, CssBaseline } from '@mui/material'
import Header from '@/components/Header'
import { usePathname, useRouter } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function RootLayout({ children }: PropsWithChildren<{}>) {
  const router = usePathname()
  // const navigate = useRouter()

  const showHeader =
    router === '/signin' ||
    router === '/signup' ||
    router === '/email' ||
    router === '/password' ||
    router === '/resetpassword' ||
    router === '/otp' ||
    router === '/email'
      ? false
      : true

  // const login =
  //   typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : false
  // useEffect(() => {
  //   if (!login) {
  //     // If login is false or accessToken is not available, redirect to signin page
  //     navigate.push('/signin')
  //   }
  // }, [])

  return (
    <html lang='en'>
      <head>
        <title>Mechiridion</title>
        <meta name='description' content='Mechiridion' />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </head>
      <ThemeProvider theme={lightTheme}>
        <ContextProvider>
          <body>
            <CssBaseline />
            {showHeader && <Header />}
            {/* {<Header/>} */}
            {children}
            <ToastContainer theme='dark' />
          </body>
        </ContextProvider>
      </ThemeProvider>
    </html>
  )
}
