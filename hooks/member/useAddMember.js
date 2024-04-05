import { useMutation } from '@apollo/client'

import addMember from './addMember.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useCreateMember() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [addMemberFunction, { data, loading }] = useMutation(addMember)

  return [addMemberFunction, loading]
}
