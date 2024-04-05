import {
  Button,
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  styled,
  FormControl,
} from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'

import useResetPasswordWithOtp from 'hooks/auth/useResetPasswordWithOtp'
interface IEmailForm {
  email: string
}

export default function Email() {
  const router = useRouter()
  const [resetPassword, loadingResetPasswordWithOtp] = useResetPasswordWithOtp()

  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 1,
      },
    },
  })

  const createResetPassword = async (data: IEmailForm, resetForm: Function) => {
    // Creating reset password
    try {
      const result = await resetPassword({
        variables: {
          email: data?.email,
        },
      })
      if (result) {
        localStorage.setItem('email', data?.email ?? '')
        toast.success('Verification Email sent')

        router.push('/otp')

        // router.push('/some/route', { query: { param: 'value' } })
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '12%',
        }}
      >
        <svg
          width='241'
          height='259'
          viewBox='0 0 241 259'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M145.922 10.4483H230.306C235.788 10.4483 240.27 14.9278 240.27 20.4121V67.9231C240.27 73.4052 235.79 77.887 230.306 77.887H145.922C140.44 77.887 135.958 73.4075 135.958 67.9231V54.6675C136.004 52.6819 136.186 52.813 134.381 52.1279L122.446 47.3685C121.682 47.0647 120.864 46.755 120.181 46.4968C117.967 45.6609 116.863 45.244 116.865 43.9573C116.867 42.6826 117.959 42.2576 120.137 41.4118C120.775 41.1636 121.541 40.8677 122.435 40.5004L134.066 35.7192C136.248 34.8733 135.988 35.3141 135.958 32.433V20.4106C135.958 14.9285 140.438 10.4467 145.922 10.4467L145.922 10.4483ZM151.436 44.5705C150.312 44.5705 150.312 42.8629 151.436 42.8629H224.342C225.466 42.8629 225.466 44.5705 224.342 44.5705H151.436ZM29.6761 185.021C35.2852 191.468 38.391 196.839 41.3631 201.979C46.6088 211.055 50.9355 219.022 61.5545 222.202C65.4999 223.384 69.8064 223.745 74.0757 223.146C75.9262 222.89 76.3154 225.703 74.4648 225.959C70.8392 226.47 67.1935 226.346 63.7269 225.665C60.0039 224.933 59.0548 224.162 63.3536 226.557C66.4888 228.302 70.4678 230.518 73.0292 232.901C73.9803 233.784 74.9016 234.652 75.8407 235.569C76.216 235.935 76.5873 236.304 76.9586 236.679C78.1857 237.92 77.725 237.849 79.2937 237.015C79.8397 236.725 80.4115 236.419 81.0092 236.101C95.2438 228.49 113.227 216.569 125.78 206.423C126.489 205.849 127.158 205.307 127.781 204.801C128.838 203.941 128.744 204.284 128.19 203.059C126.153 198.548 124.716 193.908 123.733 189.152C123.133 192.548 122.162 195.625 120.592 198.173C120.181 198.84 119.307 199.047 118.64 198.634C117.973 198.223 117.766 197.349 118.179 196.682C121.846 190.737 121.864 180.93 121.884 171.274C121.92 153.69 123.691 139.058 119.404 121.323C117.393 113.004 112.125 100.558 113.638 92.5758C115.352 83.5295 108.948 76.3994 102.35 84.0754C100.559 86.1583 99.1354 89.1605 98.3392 92.9311C97.7197 95.8678 97.4834 99.2651 97.7495 103.054C97.819 104.038 98.7105 109.61 99.6398 111.075C99.9436 111.554 100.329 111.903 100.817 112.018C102.38 112.382 102.126 114.474 100.871 114.79C99.8304 115.052 99.8661 113.99 100.249 116.146C100.968 120.193 101.57 124.484 101.607 128.085C101.796 146.52 99.5782 150.973 96.7845 156.584C95.3926 159.382 93.8478 162.483 92.4202 167.932C91.9516 169.739 89.2056 169.026 89.6742 167.221C89.7596 166.893 89.8469 166.572 89.9343 166.26C90.3632 164.713 90.6114 164.949 88.9951 164.949H28.171C26.2371 165.009 27.1783 165.384 26.5786 167.967C25.6514 171.958 22.7326 174.689 18.7553 175.326C16.587 175.674 16.2534 175.155 18.5527 176.539C20.5482 177.739 22.6351 179.077 24.5533 180.487C26.5686 181.968 25.7069 181.612 25.9611 179.546C26.112 178.318 26.5031 177.141 27.0015 176.085C27.48 175.072 29.0209 175.799 28.5423 176.811C28.0062 177.947 27.617 179.228 27.5952 180.518C27.5535 183.092 28.2822 183.411 29.682 185.02L29.6761 185.021ZM83.1703 256.296C83.621 256.937 83.4681 257.823 82.8248 258.275C82.1835 258.726 81.2979 258.573 80.8452 257.93L70.3177 242.968C69.9265 242.414 69.4738 241.928 69.4738 241.205C69.4738 240.526 69.8272 239.746 70.5083 238.88C70.8816 238.405 71.382 237.853 71.9995 237.232C72.7758 236.454 72.9128 236.686 72.1523 235.971C71.8049 235.645 71.4514 235.316 71.094 234.982C65.4529 229.739 58.6802 227.934 52.0168 221.3C45.5003 214.813 42.2893 209.259 38.906 203.404C36.0071 198.39 32.9791 193.15 27.5306 186.89C22.7672 181.417 14.7477 177.909 8.57632 174.138C2.18486 170.235 -0.678432 158.043 6.15591 153.296C8.18716 151.884 8.55848 152.835 6.74361 151.211C4.89505 149.555 3.38005 147.345 2.4806 144.897C0.451332 139.365 1.93854 133.744 5.9474 129.494C7.21222 128.154 8.6458 127.022 10.0993 126.083C13.2742 124.028 13.3258 125.102 10.2164 123.194C-1.35775 116.094 2.71074 102.149 13.1511 101.577C15.502 101.448 15.7423 102.016 13.3079 100.475C12.0213 99.6594 10.6274 98.7004 9.24345 97.6321C6.3187 95.3725 3.43756 92.6106 1.67831 89.638C-2.69593 82.2538 1.90269 73.8388 10.5839 75.4948C12.5138 75.8622 14.3843 76.6723 15.8575 77.6313V9.51302C15.8575 6.88411 16.9893 4.49745 18.8101 2.77185C20.615 1.06226 23.097 0 25.8191 0H94.0543C96.7766 0 99.2584 1.06226 101.063 2.77185C102.886 4.4973 104.016 6.88395 104.016 9.51302V79.1308C113.388 74.2741 117.992 84.8177 116.424 93.1011C115.068 100.263 120.29 112.939 122.156 120.659C126.697 139.44 124.398 153.294 124.753 171.541C124.856 176.81 125.273 181.947 126.185 186.927C126.931 191.013 128.011 195.008 129.52 198.906C130.71 198.395 131.714 198.028 132.503 197.82C134.544 197.28 135.177 197.605 136.208 199.055L176.861 256.194C177.315 256.833 177.166 257.718 176.527 258.173C175.888 258.628 175.002 258.479 174.548 257.84L135.249 202.607C134.568 201.65 134.824 201.676 134.121 202.514C132.108 204.91 129.987 206.677 127.553 208.643C114.843 218.915 96.7471 230.906 82.3377 238.609C79.0932 240.345 76.3213 241.59 74.1966 242.251C73.2237 242.555 73.3607 242.368 74.0179 243.303L83.1634 256.301L83.1703 256.296ZM74.5489 238.704C74.1101 239.127 73.7249 239.518 73.3973 239.875C73.0161 240.288 72.9982 240.272 73.4986 240.026C73.9116 239.822 74.4159 239.567 74.9996 239.268C75.3491 239.089 75.4107 239.156 75.1605 238.9C75.091 238.829 75.0195 238.757 74.95 238.686C74.7217 238.454 74.7931 238.469 74.5489 238.704ZM131.113 202.06C131.536 201.706 131.906 201.393 132.215 201.127C132.706 200.706 132.829 200.664 132.14 200.914C131.749 201.055 131.32 201.226 130.851 201.424C130.593 201.534 130.593 201.474 130.702 201.714C130.75 201.82 130.798 201.927 130.845 202.032C130.951 202.262 130.909 202.231 131.113 202.06ZM14.9601 80.4676C13.7131 79.5027 11.9241 78.6409 10.0636 78.2855C3.74944 77.0802 1.02135 82.9516 4.1266 88.1934C5.68131 90.8183 8.30224 93.3141 10.9806 95.3849C12.0846 96.2387 13.1985 97.019 14.2528 97.7061C16.2464 99.0046 15.8612 98.9768 15.8612 96.6478V82.9713C15.8612 81.484 16.159 81.3947 14.9617 80.4694L14.9601 80.4676ZM13.5384 104.418C5.46289 104.759 1.71819 116.135 13.5999 121.807C16.1077 123.005 15.8595 123.167 15.8595 120.719V106.409C15.8595 104.36 16.0124 104.313 13.5384 104.418L13.5384 104.418ZM13.9752 127.134C11.9519 128.153 9.77968 129.571 8.01428 131.441C4.74205 134.91 3.48917 139.394 5.1491 143.918C5.8897 145.94 7.1287 147.753 8.6338 149.099C12.6764 152.72 19.0876 152.327 19.5705 146.077C19.7393 143.883 19.1953 141.325 18.2918 138.865C18.1131 138.376 17.9205 137.894 17.716 137.419C17.0628 135.896 15.8576 135.988 15.8576 134.788V128.7C15.8576 126.115 16.3678 125.926 13.9733 127.134L13.9752 127.134ZM18.7048 133.024C19.5487 134.515 20.333 136.177 20.9605 137.888C21.989 140.696 22.6085 143.662 22.406 146.289C22.2332 148.527 21.4608 150.55 19.9359 151.999C18.8121 153.068 18.4626 153.618 18.7048 155.426C18.7048 157.251 19.4911 158.915 20.7599 160.124C22.1141 161.415 23.9329 162.108 25.7914 162.108H90.1075C91.5212 162.108 91.1677 162.273 91.684 160.946C92.5557 158.703 93.4234 156.961 94.2395 155.321C96.8684 150.042 98.9532 145.85 98.7725 128.111C98.7447 125.395 98.3695 122.214 97.8631 119.045C97.1423 114.534 97.188 114.351 97.188 119.017V144.629C97.188 147.568 94.6564 149.811 91.7791 149.811H28.1035C25.2264 149.811 22.6946 147.568 22.6946 144.629V14.9245C22.6946 13.4909 23.3101 12.1904 24.2989 11.2492C25.2778 10.318 26.624 9.74014 28.1033 9.74014H91.7789C93.2562 9.74014 94.6044 10.3179 95.5833 11.2492C96.5741 12.1904 97.1876 13.4909 97.1876 14.9245V87.1499C98.1367 84.9519 99.4413 82.8551 101.177 81.189V9.50748C101.177 7.68871 100.386 6.02873 99.1137 4.82353C97.823 3.60044 96.034 2.84195 94.0604 2.84195H25.8252C23.8516 2.84195 22.0626 3.60044 20.7719 4.82353C19.4992 6.02878 18.7089 7.68871 18.7089 9.50748V133.016L18.7048 133.024ZM95.4796 106.657C94.5523 102.001 94.5543 97.4339 95.4796 92.7539V14.927C95.4796 13.9779 95.0686 13.1142 94.4093 12.4867C93.7382 11.8474 92.807 11.4522 91.7804 11.4522H28.1048C27.0782 11.4522 26.147 11.8493 25.4759 12.4867C24.8146 13.1142 24.4056 13.9799 24.4056 14.927V144.632C24.4056 146.633 26.1668 148.106 28.1067 148.106H91.7823C93.7223 148.106 95.4834 146.633 95.4834 144.632V106.66L95.4796 106.657ZM14.1962 172.437C18.5505 173.214 22.7184 172 23.8022 167.336C24.1715 164.995 24.0345 164.995 22.1839 164.298C20.9072 163.818 19.7595 163.091 18.8025 162.18C17.2398 160.691 16.1875 158.715 15.9234 156.519C15.703 154.684 16.4694 154.724 14.3548 154.472C11.3943 154.116 9.2458 154.611 7.7768 155.633C2.04258 159.618 5.04861 170.807 14.1962 172.439L14.1962 172.437ZM70.5674 7.20174C70.0949 7.20174 69.7136 6.81852 69.7136 6.34794C69.7136 5.87537 70.0968 5.49414 70.5674 5.49414H72.4061C72.8786 5.49414 73.2599 5.87735 73.2599 6.34794C73.2599 6.82051 72.8767 7.20174 72.4061 7.20174H70.5674ZM53.4319 7.20174C52.9593 7.20174 52.5781 6.81852 52.5781 6.34794C52.5781 5.87537 52.9613 5.49414 53.4319 5.49414H66.4456C66.9181 5.49414 67.2994 5.87735 67.2994 6.34794C67.2994 6.82051 66.9162 7.20174 66.4456 7.20174H53.4319ZM151.434 34.1263C150.31 34.1263 150.31 32.4187 151.434 32.4187H224.34C225.464 32.4187 225.464 34.1263 224.34 34.1263H151.434ZM168.907 23.6821C167.783 23.6821 167.783 21.9745 168.907 21.9745H206.865C207.989 21.9745 207.989 23.6821 206.865 23.6821H168.907ZM150.715 61.1164L151.447 58.8528C153.141 59.4485 154.366 59.9628 155.137 60.3996C154.934 58.4756 154.825 57.1473 154.815 56.4265H157.144C157.11 57.4808 156.991 58.7993 156.773 60.3838C157.871 59.8318 159.128 59.3175 160.543 58.8529L161.276 61.1164C159.926 61.5652 158.603 61.865 157.303 62.0119C157.954 62.5758 158.866 63.5865 160.047 65.034L158.135 66.3941C157.517 65.5522 156.785 64.4045 155.943 62.9571C155.151 64.4601 154.456 65.6078 153.86 66.3941L151.98 65.034C153.209 63.509 154.094 62.5023 154.624 62.0119C153.252 61.7439 151.952 61.444 150.717 61.1164L150.715 61.1164ZM163.478 61.1164L164.211 58.8528C165.904 59.4485 167.129 59.9628 167.9 60.3996C167.697 58.4756 167.588 57.1473 167.578 56.4265H169.907C169.873 57.4808 169.754 58.7993 169.536 60.3838C170.634 59.8318 171.891 59.3175 173.306 58.8529L174.039 61.1164C172.689 61.5652 171.367 61.865 170.066 62.0119C170.717 62.5758 171.629 63.5865 172.81 65.034L170.898 66.3941C170.28 65.5522 169.548 64.4045 168.706 62.9571C167.914 64.4601 167.219 65.6078 166.623 66.3941L164.743 65.034C165.972 63.509 166.857 62.5023 167.387 62.0119C166.015 61.7439 164.715 61.444 163.48 61.1164L163.478 61.1164ZM176.241 61.1164L176.974 58.8528C178.667 59.4485 179.892 59.9628 180.663 60.3996C180.46 58.4756 180.351 57.1473 180.341 56.4265H182.67C182.636 57.4808 182.517 58.7993 182.299 60.3838C183.397 59.8318 184.654 59.3175 186.07 58.8529L186.802 61.1164C185.452 61.5652 184.13 61.865 182.829 62.0119C183.48 62.5758 184.392 63.5865 185.573 65.034L183.661 66.3941C183.044 65.5522 182.311 64.4045 181.469 62.9571C180.677 64.4601 179.982 65.6078 179.386 66.3941L177.506 65.034C178.735 63.509 179.62 62.5023 180.15 62.0119C178.778 61.7439 177.478 61.444 176.243 61.1164L176.241 61.1164ZM189.004 61.1164L189.737 58.8528C191.43 59.4485 192.656 59.9628 193.426 60.3996C193.223 58.4756 193.114 57.1473 193.104 56.4265H195.433C195.4 57.4808 195.28 58.7993 195.062 60.3838C196.16 59.8318 197.417 59.3175 198.833 58.8529L199.565 61.1164C198.215 61.5652 196.893 61.865 195.592 62.0119C196.243 62.5758 197.155 63.5865 198.336 65.034L196.424 66.3941C195.807 65.5522 195.074 64.4045 194.232 62.9571C193.44 64.4601 192.745 65.6078 192.149 66.3941L190.269 65.034C191.498 63.509 192.383 62.5023 192.914 62.0119C191.542 61.7439 190.241 61.444 189.006 61.1164L189.004 61.1164ZM201.767 61.1164L202.5 58.8528C204.193 59.4485 205.419 59.9628 206.189 60.3996C205.986 58.4756 205.877 57.1473 205.867 56.4265H208.196C208.163 57.4808 208.044 58.7993 207.825 60.3838C208.923 59.8318 210.18 59.3175 211.596 58.8529L212.328 61.1164C210.978 61.5652 209.656 61.865 208.355 62.0119C209.007 62.5758 209.918 63.5865 211.099 65.034L209.187 66.3941C208.57 65.5522 207.837 64.4045 206.995 62.9571C206.203 64.4601 205.508 65.6078 204.912 66.3941L203.032 65.034C204.261 63.509 205.147 62.5023 205.677 62.0119C204.305 61.7439 203.004 61.444 201.769 61.1164L201.767 61.1164ZM214.53 61.1164L215.263 58.8528C216.957 59.4485 218.182 59.9628 218.952 60.3996C218.75 58.4756 218.64 57.1473 218.63 56.4265H220.959C220.926 57.4808 220.807 58.7993 220.588 60.3838C221.686 59.8318 222.943 59.3175 224.359 58.8529L225.091 61.1164C223.741 61.5652 222.419 61.865 221.118 62.0119C221.77 62.5758 222.681 63.5865 223.862 65.034L221.95 66.3941C221.333 65.5522 220.6 64.4045 219.758 62.9571C218.966 64.4601 218.271 65.6078 217.675 66.3941L215.795 65.034C217.024 63.509 217.91 62.5023 218.44 62.0119C217.068 61.7439 215.767 61.444 214.532 61.1164L214.53 61.1164ZM230.308 13.2938H145.923C142.012 13.2938 138.807 16.4985 138.807 20.4101V32.4326C138.807 36.7076 139.377 36.6023 135.148 38.3417L123.516 43.1229C121.048 44.1375 121.014 43.7404 123.496 44.7293L135.431 49.4887C139.321 51.0394 138.809 51.0255 138.809 54.6633V67.9189C138.809 71.8305 142.014 75.0352 145.925 75.0352H230.309C234.221 75.0352 237.426 71.8305 237.426 67.9189V20.4079C237.426 16.4963 234.221 13.2916 230.309 13.2916L230.308 13.2938Z'
            fill='#FF5E3C'
          />
        </svg>

        <Typography
          sx={{ fontSize: '32px', fontWeight: '700', fontFamily: 'Roboto', marginTop: '40px' }}
        >
          Enter Your Email
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '13px', sm: '15px', smm: '18px', md: '16px', lg: '20px', xl: '26px' },
            fontWeight: '400',
            fontFamily: 'Roboto',
            marginTop: '60px',
          }}
        >
          Enter your email to get the verification code
        </Typography>
      </Box>

      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values: IEmailForm, actions) => {
          createResetPassword(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Enter your email'),
        })}
      >
        {(props: FormikProps<IEmailForm>) => {
          const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
          return (
            <>
              <Form className='mx-12 md:mx-48 xl:mx-60 2xl:mx-72'>
                {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}

                <FormControl
                  fullWidth
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    marginTop: '20px',
                  }}
                >
                  <StyleTextField
                    name='email'
                    placeholder='Abc@gmail.com'
                    type='text'
                    autoComplete='off'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#FF5B39',
                        },
                      },
                    }}
                    // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                    value={values.email}
                    helperText={errors.email && touched.email ? errors.email : ''}
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControl>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '25px',
                  }}
                >
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
                    }}
                  >
                    Next
                  </Button>
                </Box>
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
