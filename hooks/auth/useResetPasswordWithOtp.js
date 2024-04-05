import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import resetPasswordWithOtp from './resetPasswordWithOtp.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useResetPasswordWithOtp() {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [resetPasswordWithOtpFunction, { data, loading }] = useMutation(resetPasswordWithOtp)

  return [resetPasswordWithOtpFunction, loading]
}
