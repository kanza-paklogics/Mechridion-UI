import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import useStores from 'hooks/useStores'

import StripeProduct from './retrieveStripeProduct.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */

export default function stripePlanProduct() {
  const { authStore } = useStores()
  const { account, setAccount } = authStore
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const { loading, data, refetch } = useQuery(StripeProduct)

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

  const productPlan = data?.retrieveStripeListAllProduct

  return [productPlan, loading, refetch]
}
