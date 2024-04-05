import { useMutation } from '@apollo/client'

import updateMember from './updateMember.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useUpdateMember() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [updateMemberFunction, { data, loading }] = useMutation(updateMember)

  return [updateMemberFunction, loading]
}
