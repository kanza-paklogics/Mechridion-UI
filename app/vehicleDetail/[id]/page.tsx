'use client'

import { withApollo } from 'lib/apollo/withApollo'
import useGetAllVehicleVariantsByModel from 'hooks/VehicleVariantByModel/useGetAllVehicleVariantByModel'
import { useSearchParams } from 'next/navigation'
import { CircularProgress } from '@mui/material'

function VehicleDetail({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams()
  const modelId = searchParams.get('modelId')

  const [variantModelData, loading, refetch] = useGetAllVehicleVariantsByModel(modelId)
  return (
    <div>
      {loading ? (
        <div className='text-center mt-12'>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {params.id === '1' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Engine and Powertrain</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  This category encompasses the engine, transmission, drivetrain, and related
                  components. Repairs within this group may include diagnosing and fixing engine
                  issues, addressing transmission problems, and maintaining components like belts,
                  hoses, and filters.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Engine Oil Capacity{' '}
                      {variantModelData[0]?.engineOilSpecs?.engineOilCapacity ||
                        'No engine Oil Data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Oil {variantModelData[0]?.engineOilSpecs?.oil || 'No rear suspension data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Engine Code {variantModelData[0]?.engineSpec?.engineCode || 'No engine Code'}
                    </div>

                    <div className='text-xl font-medium mt-2'>
                      Engine Position{' '}
                      {variantModelData[0]?.engineSpec?.enginePosition || 'No engine Oil Data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Engine Displacement{' '}
                      {variantModelData[0]?.engineSpec?.engineDisplacement ||
                        'No Engine Displacement'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}

          {params.id === '2' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Electrical System</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  The electrical system includes the vehicle's battery, alternator, starter, wiring,
                  fuses, and electronic components such as lights, sensors, and infotainment
                  systems. Repairs here may involve troubleshooting electrical faults, replacing
                  faulty components, or upgrading electrical accessories.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Turbine: {variantModelData[0]?.turbine || 'No turbine Data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Power Train: {variantModelData[0]?.powerSpec?.powerTrain || 'No power train'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Power Hp: {variantModelData[0]?.powerSpec?.powerHp || 'No power Hp'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '3' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Braking System</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  The braking system consists of components like brake pads, rotors, calipers, brake
                  lines, and the master cylinder. Repairs in this category typically focus on brake
                  maintenance, replacing worn brake components, bleeding the brake system, and
                  diagnosing braking issues.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Front Brakes:{' '}
                      {variantModelData[0]?.brakes?.frontBrakes || 'No fronbrakes Data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Rear Brakes:{' '}
                      {variantModelData[0]?.brakes?.rearBrakes || 'No rear brakes train'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '4' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Fuel System</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  Suspension and steering components include shock absorbers, struts, springs,
                  control arms, tie rods, ball joints, steering rack, and power steering system.
                  Repairs may involve addressing issues related to ride quality, alignment, steering
                  responsiveness, and stability.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Front Suspension{' '}
                      {variantModelData[0]?.Suspension?.frontSuspension ||
                        'No front suspension data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Rear Suspension{' '}
                      {variantModelData[0]?.Suspension?.rearSuspension || 'No rear suspension data'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '5' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Fuel System</div>
                <div className='text-xl font-medium text-left mt-6'>
                  The fuel system encompasses the fuel tank, fuel pump, fuel injectors, fuel lines,
                  and related components. Repairs here may involve diagnosing fuel delivery issues,
                  replacing fuel system components, and addressing fuel leaks or contamination.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      {variantModelData[0]?.fuelSystem || 'No fuel system data'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '6' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Cooling System</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  The cooling system is responsible for regulating the engine's temperature and
                  includes the radiator, water pump, thermostat, hoses, and coolant. Repairs may
                  include fixing coolant leaks, replacing worn components, flushing the cooling
                  system, and diagnosing overheating issues.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                    <div className='text-xl font-medium mt-2'>
                      Coolant : {variantModelData[0]?.coolant || 'No coolant Data'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '7' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Exhaust System</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  The exhaust system includes the exhaust manifold, catalytic converter, muffler,
                  exhaust pipes, and oxygen sensors. Repairs in this category may involve addressing
                  exhaust leaks, replacing worn-out components, and diagnosing emission-related
                  issues.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
          {params.id === '8' && (
            <div className='max-w-2xl mx-auto bg-[#222222] shadow-lg rounded-md overflow-hidden my-8'>
              <div className='p-6 sm:p-12'>
                <div className='text-4xl font-bold text-center'>Vehicle Data</div>
                <div className='text-2xl font-bold text-left mt-6'>Body and Interior</div>
                <div className='text-xl font-medium text-left mt-6 justify-center'>
                  The body and interior encompass the vehicle's exterior panels, doors, windows,
                  trim, upholstery, and interior components like seats, dashboard, and consoles.
                  Repairs here may involve bodywork, dent removal, paint touch-ups, interior
                  cleaning, and fixing cosmetic issues.
                </div>

                {variantModelData && variantModelData.length > 0 ? (
                  <>
                    <div className='text-xl font-medium mt-4'>
                      {variantModelData[0]?.generation || 'No generation data'}
                    </div>
                  </>
                ) : (
                  <div className='text-xl font-medium mt-4'>No vehicle data available</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default withApollo()(VehicleDetail)
