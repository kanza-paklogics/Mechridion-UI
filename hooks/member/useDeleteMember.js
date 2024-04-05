import { useMutation } from '@apollo/client'

import deleteMember from './deleteMember.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useDeleteMember() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [deleteMemberFunction, { data, loading }] = useMutation(deleteMember)

  return [deleteMemberFunction, loading]
}
