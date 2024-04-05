import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import getAllVehicleVariantByModelData from './getAllVehicleVariantByModel.gql'

export default function useGetAllVehicleVariantByModel(modelId) {
  const authToken =
    typeof window !== 'undefined' ? window.localStorage.getItem('accounts:accessToken') : undefined
  const { loading, data, refetch } = useQuery(getAllVehicleVariantByModelData, {
    variables: {
      vehicleModelId: modelId,
    },
  })
  const variantByModel = data?.getAllVehicleVariantsByModel?.nodes

  useEffect(() => {
    refetch()
  }, [authToken, modelId])

  return [variantByModel, loading, refetch]
}
