import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'
import getAllService from './getAllServices.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetAllServices() {
  const { authStore } = useStores()
  const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const { loading, data, refetch } = useQuery(getAllService)

  const viewer = data?.viewer
  useEffect(() => {
    refetch()
  }, [authToken])

  useEffect(() => {
    if (loading) {
      return
    }
    setAccount(viewer)
  }, [viewer])

  const services = data?.getAllServices

  return [services, loading, refetch]
}
