import { useEffect } from 'react'
import { useMutation } from '@apollo/client'

import sendContactForm from './sendContactForm.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useCreateContact() {
  // const authToken =
  //   typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [sendContactFormFunction, { data, loading }] = useMutation(sendContactForm)

  return [sendContactFormFunction, loading]
}
