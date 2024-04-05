import { useEffect } from 'react'
import { redirect } from 'next/navigation'
import useViewer from '../hooks/viewer/useViewer'
import { CircularProgress } from '@mui/material'

const withAuth = (WrappedComponent) => {
  const AuthRedirect = (props) => {
    const [viewer, loading] = useViewer()


    // const user = JSON.parse(localStorage.getItem('accounts:accessToken'))

    const user =
      typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : false
    const userIsAuthenticated = user !== null

    useEffect(() => {
      if (!userIsAuthenticated) {
        redirect('/signin')
      }
      if (loading) {
        return
      }
    }, [userIsAuthenticated, loading])

    if (loading) {
      return (
        <div className='flex bg-[#222222] h-[100vh] pt-12 justify-center'>
          <CircularProgress color='success' />
        </div>
      )
    }

    return <WrappedComponent {...props} />
  }

  return AuthRedirect
}

export default withAuth
