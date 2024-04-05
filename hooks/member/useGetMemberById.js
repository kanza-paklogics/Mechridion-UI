import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'
import getMemberById from './getMemberById.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetMemberById(id) {
  const { authStore } = useStores()
  const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const { loading, data, refetch } = useQuery(getMemberById, {
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
  const memberById = data?.getMemberById?.userData
  useEffect(() => {
    if (memberById) {
      return
    }
  }, [])

  // console.log(memberById)
  return [memberById, loading, refetch]
}