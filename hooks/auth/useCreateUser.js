import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import createUserMutation from './createUser.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useCreateUser() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [createUserFunction, { data, loading }] = useMutation(createUserMutation)

  return [createUserFunction, loading]
}
