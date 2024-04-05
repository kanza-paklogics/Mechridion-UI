import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import updateAccountMutation from './updateAccount.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useUpdateAccount() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [updateAccountFunction, { data, loading }] = useMutation(updateAccountMutation)

  return [updateAccountFunction, loading]
}
