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
import { useRouter } from 'next/navigation'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { toast } from 'react-toastify'

import getAccountsHandler from 'lib/accountsServer'
import hashPassword from 'lib/utils/hashPassword'

interface ISignInForm {
  email: string
  password: string
}

export default function Signin() {
  const router = useRouter()

  const { passwordClient } = getAccountsHandler()

  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 1,
      },
    },
  })

  const loginUser = async (data: ISignInForm, resetForm: Function) => {
    try {
      //GRAPHQL Login

      let result = await passwordClient.login({
        user: {
          email: data?.email,
        },

        password: hashPassword(data?.password),
      })

      // API call integration will be here. Handle success / error response accordingly.

      if (result) {
        localStorage.setItem('accounts:accessToken', result?.tokens?.accessToken ?? '')

        localStorage.setItem('accounts:refreshToken', result.tokens.refreshToken ?? '')
        toast.success('Sign In Successfully')

        router.push('/')
        resetForm({})
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
          marginTop: '18%',
        }}
      >
        <Typography
          sx={{
            fontSize: '44px',
            fontWeight: '400',
            marginBottom: '60px',
            fontFamily: 'Russo One',
          }}
        >
          Signin
        </Typography>
      </Box>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values: ISignInForm, actions) => {
          loginUser(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Enter Your Email'),
          password: Yup.string()
            // .matches(
            //     /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            // )
            .required('Enter Your Password'),
        })}
      >
        {(props: FormikProps<ISignInForm>) => {
          const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
          return (
            <>
              <Form className='mx-40 xl:mx-56'>
                {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}

                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column' }}>
                  <StyleTextField
                    name='email'
                    placeholder='  Email'
                    type='text'
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
                    autoComplete='off'
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <svg
                            width='25'
                            height='20'
                            viewBox='0 0 25 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M21.25 0H3.75C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75V16.25C0 17.2446 0.395088 18.1984 1.09835 18.9017C1.80161 19.6049 2.75544 20 3.75 20H21.25C22.2446 20 23.1984 19.6049 23.9017 18.9017C24.6049 18.1984 25 17.2446 25 16.25V3.75C25 2.75544 24.6049 1.80161 23.9017 1.09835C23.1984 0.395088 22.2446 0 21.25 0ZM20.4125 2.5L12.5 8.4375L4.5875 2.5H20.4125ZM21.25 17.5H3.75C3.41848 17.5 3.10054 17.3683 2.86612 17.1339C2.6317 16.8995 2.5 16.5815 2.5 16.25V4.0625L11.75 11C11.9664 11.1623 12.2295 11.25 12.5 11.25C12.7705 11.25 13.0336 11.1623 13.25 11L22.5 4.0625V16.25C22.5 16.5815 22.3683 16.8995 22.1339 17.1339C21.8995 17.3683 21.5815 17.5 21.25 17.5Z'
                              fill='white'
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column' }}>
                  <StyleTextField
                    margin='normal'
                    name='password'
                    type='password'
                    placeholder=' Password'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#FF5B39',
                        },
                        '& > placeholder': {
                          borderColor: '#FF5B39',
                        },
                      },
                      marginTop: '30px',
                    }}
                    value={values.password}
                    helperText={errors.password && touched.password ? errors.password : ''}
                    error={errors.password && touched.password ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <svg
                            width='23'
                            height='30'
                            viewBox='0 0 23 30'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M2.875 30C2.08437 30 1.40779 29.7205 0.84525 29.1614C0.28175 28.6014 0 27.9286 0 27.1429V12.8571C0 12.0714 0.28175 11.3986 0.84525 10.8386C1.40779 10.2795 2.08437 10 2.875 10H4.3125V7.14286C4.3125 5.16667 5.01352 3.4819 6.41556 2.08857C7.81665 0.69619 9.51146 0 11.5 0C13.4885 0 15.1838 0.69619 16.5859 2.08857C17.987 3.4819 18.6875 5.16667 18.6875 7.14286V10H20.125C20.9156 10 21.5927 10.2795 22.1562 10.8386C22.7187 11.3986 23 12.0714 23 12.8571V27.1429C23 27.9286 22.7187 28.6014 22.1562 29.1614C21.5927 29.7205 20.9156 30 20.125 30H2.875ZM11.5 22.8571C12.2906 22.8571 12.9677 22.5776 13.5312 22.0186C14.0937 21.4586 14.375 20.7857 14.375 20C14.375 19.2143 14.0937 18.5414 13.5312 17.9814C12.9677 17.4224 12.2906 17.1429 11.5 17.1429C10.7094 17.1429 10.0328 17.4224 9.47025 17.9814C8.90675 18.5414 8.625 19.2143 8.625 20C8.625 20.7857 8.90675 21.4586 9.47025 22.0186C10.0328 22.5776 10.7094 22.8571 11.5 22.8571ZM7.1875 10H15.8125V7.14286C15.8125 5.95238 15.3932 4.94048 14.5547 4.10714C13.7161 3.27381 12.6979 2.85714 11.5 2.85714C10.3021 2.85714 9.28385 3.27381 8.44531 4.10714C7.60677 4.94048 7.1875 5.95238 7.1875 7.14286V10Z'
                              fill='white'
                            />
                          </svg>
                        </InputAdornment>
                      ),
                    }}

                    // className={classes.textField}
                  />
                </FormControl>

                <Link
                  className='text-[#D9D9D9] text-[18px] font-Poppins no-underline flex justify-end'
                  href='/email'
                >
                  Forget Password?
                </Link>

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '40px',
                  }}
                >
                  <Button
                    type='submit'
                    sx={{
                      color: 'white',
                      background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                      borderRadius: '12px',
                      width: '185px',
                      height: '58px',
                      fontFamily: 'Russo One',
                      fontWeight: '400',
                      fontSize: '18px',
                      textTransform: 'none',
                    }}
                  >
                    Sign In
                  </Button>

                  {/* <Grid container > */}

                  <Typography
                    sx={{
                      fontFamily: 'Poppins',
                      fontWeight: '400',
                      fontSize: '16px',
                      color: '#D9D9D9',
                      marginTop: '20px',
                    }}
                  >
                    Don&apos;t You have account,
                    <span>
                      <Link
                        href='/signup'
                        style={{
                          color: '#FF5B39',
                          textDecoration: 'none',
                          fontFamily: 'poppins',
                          fontWeight: '800',
                          fontSize: '16px',
                        }}
                      >
                        {' '}
                        Click here.
                      </Link>
                    </span>
                  </Typography>

                  {/*           
           </Grid> */}
                </Box>
                {/* </form> */}
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
  )
}
