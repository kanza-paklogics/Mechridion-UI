import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import getVehicleModelByID from './getVehicleModelById.gql'

export default function useGetAllVehicleModel(id) {
  const { loading, data, refetch } = useQuery(getVehicleModelByID, {
    variables: {
      id,
    },
  })

  const vehicleModelId = data?.getVehicleModelById

  useEffect(() => {
    refetch()
  }, [id])

  return [vehicleModelId, loading, refetch]
}
