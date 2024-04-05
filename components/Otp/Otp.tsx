import { Button, Box, Typography } from '@mui/material'
import { useState } from 'react'

import { toast } from 'react-toastify'
import { FormEvent } from 'react'
import Link from 'next/link'

import OtpInput from 'react-otp-input'

import useVerifyOtp from 'hooks/auth/useVerifyOtp'
import { useRouter } from 'next/navigation'
export default function Otp() {
  const [otp, setOtp] = useState('')
  const router = useRouter()
  // const searchParams = useSearchParams()

  // const emailUrl = searchParams.get('email')

  const [Otpdata, loadingOtp, refetchOtp] = useVerifyOtp()

  const handleOTPChange = (value: string) => {
    setOtp(value)
  }

  const OtpEmail = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    const emailData = localStorage.getItem('email')
    try {
      event.preventDefault()
      const result = await Otpdata({
        variables: {
          email: emailData,
          otp: otp,
        },
      })
      if (result) {
        localStorage.setItem('otp', otp ?? '')
        toast.success('Otp Code Successfully Generated')

        router.push('/resetpassword')
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div>
      <form onSubmit={OtpEmail}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '12%',
          }}
        >
          <img src='./clock.svg' alt='clock' />

          <Typography
            sx={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Roboto', marginTop: '40px' }}
          >
            Enter Otp Code
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '13px', sm: '15px', smm: '18px', md: '16px', lg: '20px', xl: '26px' },
              fontWeight: '400',
              fontFamily: 'Roboto',
              marginTop: '25px',
            }}
          >
            Enter the OTP code sent to abc@gmail.com
          </Typography>

          <OtpInput
            separator={<span className='mx-2 '></span>}
            isInputNum={true}
            containerStyle={{ marginTop: '20px', marginBottom: '20px' }}
            inputStyle={{
              border: '1px solid #FF4B2A',
              borderRadius: '6px',
              width: '55px',
              height: '51px',
              fontSize: '18px',
              backgroundColor: '#222222',
              color: 'white',
              fontWeight: '600',
            }}
            focusStyle={{
              border: '1px solid #FF4B2A',
              outline: 'none',
            }}
            value={otp}
            onChange={handleOTPChange}
            numInputs={6}
          />
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: '400',
              fontSize: '12px',
              color: '#D9D9D9',
              mt: '20px',
            }}
          >
            Don&apos;t Receive the OTP,
            <span>
              <Link
                href='/email'
                style={{
                  color: '#FF5B39',
                  textDecoration: 'none',
                  fontFamily: 'Poppins',
                  fontWeight: '600',
                  fontSize: '12px',
                  textDecorationLine: 'underline',
                }}
              >
                {' '}
                Resend OTP
              </Link>
            </span>
          </Typography>
          <Button
            type='submit'
            sx={{
              color: 'white',
              background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
              borderRadius: '12px',
              padding: '12px 56px',
              fontFamily: 'Russo One',
              fontWeight: '400',
              fontSize: '18px',
              textTransform: 'none',
              marginTop: '25px',
            }}
          >
            Next
          </Button>
        </Box>
      </form>
    </div>
  )
}
