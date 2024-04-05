import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import updatePasswordWithOtp from './updatePasswordWithOtp.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useUpdatePasswordWithOtp() {
  // const authToken =
  //   typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [updatePasswordWithOtpFunction, { data, loading }] = useMutation(updatePasswordWithOtp)

  return [updatePasswordWithOtpFunction, loading]
}
