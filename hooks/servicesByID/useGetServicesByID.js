import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'
import getServiceByID from './getServiceByID.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */

export default function useGetServiceByID(id) {
  const { authStore } = useStores()
  const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const { loading, data, refetch } = useQuery(getServiceByID, {
    variables: {
      id,
    },
  })

  const viewer = data?.viewer
  useEffect(() => {
    refetch()
  }, [authToken, id])

  useEffect(() => {
    if (loading) {
      return
    }
    setAccount(viewer)
  }, [viewer])

  const services = data?.getServiceByID

  return [services, loading, refetch]
}
