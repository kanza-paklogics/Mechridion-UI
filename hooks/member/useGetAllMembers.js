import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'
import getAllMembers from './getAllMembers.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetAllMembers() {
  const { authStore } = useStores()
  const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const { loading, data, refetch } = useQuery(getAllMembers)

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

  const memberData = data?.getAllMembers?.userData

  return [memberData, loading, refetch]
}