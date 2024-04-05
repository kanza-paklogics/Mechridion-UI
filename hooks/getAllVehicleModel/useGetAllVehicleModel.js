import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import getAllVehicleModel from './getAllVehicleModel.gql'

export default function useGetAllVehicleModel(filter) {
  const { loading, data, refetch } = useQuery(getAllVehicleModel, {
    variables: {
      searchQuery: filter,
    },
  })

  const VehicleModelData = data?.getAllVehicleModel?.nodes
  useEffect(() => {
    refetch()
  }, [filter])

  return [VehicleModelData, loading, refetch]
}
