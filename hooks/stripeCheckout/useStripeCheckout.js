import { useMutation } from '@apollo/client'

import stripeCheckout from './stripeCheckout.gql'

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useCreateStripeCheckoutSession() {
  // const authToken =
  //   typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined

  const [stripeCheckoutFunction, { data, loading }] = useMutation(stripeCheckout)

  return [stripeCheckoutFunction, loading]
}
