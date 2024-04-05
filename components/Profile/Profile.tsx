import {
  Button,
  Box,
  Typography,
  TextField,
  styled,

} from '@mui/material'
import { CircularProgress } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

import useViewer from 'hooks/viewer/useViewer'
import updateAccount from 'hooks/auth/useUpdateAccount'
import Image from 'next/image'
import { toast } from 'react-toastify'

interface IProfile {
  name: string
  email: string
  phone: string
}

export default function Profile() {
  const [viewer, loading, refetch] = useViewer()
  const [updateContactForm, loadingUpdateAccount] = updateAccount()

  // const [isBool, setIsBool] = useState(false)
  // const [isBool1, setIsBool1] = useState(false)
  // const [isBool2, setIsBool2] = useState(false)
  // const onClickHandler1 = () => {
  //   setIsBool(!isBool)
  // }

  // const onClickHandler2 = () => {
  //   setIsBool1(!isBool1)
  // }

  // const onClickHandler3 = () => {
  //   setIsBool2(!isBool2)
  // }

  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 1,
      },
    },
    '& .Mui-error': {
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderColor: '#A9A9A9',
        borderRadius: '10px',
      },
    },

    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '6px',
  })

  if (loading) {
    return (
      <div className='flex justify-center bg-[#222222] h-[100vh]'>
        <CircularProgress color='success' />
      </div>
    )
  }

  const updateUser = async (data: IProfile) => {
    try {
      const result = await updateContactForm({
        variables: { accountId: viewer?._id, firstName: data?.name },
      })
      // API call integration will be here. Handle success / error response accordingly.
      if (result) {
        toast.success('Update User successfully')
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
          marginLeft: { xs: '20px', sm: '50px', smm: '40px', md: '30px', lg: '80px' },
          marginRight: { xs: '20px', sm: '50px', smm: '40px', md: '20px', lg: '30px' },
          borderRadius: '20px',
          backgroundColor: '#282828',
          height: '830px',
        }}
      >
        <Box
          sx={{ marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* <img src='./imagee.svg' alt='profile'></img> */}

          <Image
            src='/profileImg.svg'
            draggable='false'
            alt='Image'
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
            }}
          />
        </Box>

        <Formik
          initialValues={{
            name: viewer?.firstName,
            email: viewer?.primaryEmailAddress,
            phone: viewer?.phone,
          }}
          onSubmit={(values: IProfile, actions) => {
            updateUser(values)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Enter your name'),
            email: Yup.string().email().required('Enter your email'),
            phone: Yup.string()
              .required('Enter your phone number')
              .matches(/^[+\d]+$/, 'Phone Number is Invalid'),
          })}
        >
          {(props: FormikProps<IProfile>) => {
            const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
            return (
              <Form>
                {/* <form onSubmit={props.handleSubmit(props.onSubmit)}> */}

                <Typography
                  sx={{
                    marginLeft: '102px',
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    fontSize: '22px',
                    marginTop: '35px',
                  }}
                >
                  Username{' '}
                </Typography>
                <StyleTextField
                  name='name'
                  fullWidth
                  // disabled={!isBool}
                  placeholder='yANCHUI'
                  type='text'
                  

                  value={values.name}
                  helperText={errors.name && touched.name ? errors.name : ''}
                  error={errors.name && touched.name ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Typography
                  sx={{
                    marginLeft: '102px',
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    fontSize: '22px',
                    marginTop: '35px',
                  }}
                >
                  Email I&apos;d{' '}
                </Typography>

                <StyleTextField
                  name='email'
                  fullWidth
                  // disabled={!isBool1}
                  placeholder='yanchui@gmail.com'
                  type='text'
               
                  // value={values.email}
                  value={values.email}
                  helperText={errors.email && touched.email ? errors.email : ''}
                  error={errors.email && touched.email ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Typography
                  sx={{
                    marginLeft: '102px',
                    fontFamily: 'Roboto',
                    fontWeight: '500',
                    fontSize: '22px',
                    marginTop: '35px',
                  }}
                >
                  Phone Number{' '}
                </Typography>

                <StyleTextField
                  name='phone'
                  fullWidth
                  // disabled={!isBool2}
                  placeholder='+14987889999'
                  type='text'
                  value={values.phone}
                 
                  helperText={errors.phone && touched.phone ? errors.phone : ''}
                  error={errors.phone && touched.phone ? true : false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '50px',
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
                    Submit
                  </Button>
                </Box>
              </Form>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}
