import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import verifyOtp from './verifyOtp.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useVerifyOtp() {
  // const authToken =
  //   typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [verifyOtpFunction, { data, loading }] = useMutation(verifyOtp)

  return [verifyOtpFunction, loading]
}
