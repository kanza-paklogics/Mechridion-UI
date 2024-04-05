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
import useSendContactForm from 'hooks/contact/useSendContactForm'
import { toast } from 'react-toastify'

interface IContactForm {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const [sendContactForm, loadingCreateContact] = useSendContactForm()

  const StyleTextField = styled(TextField)({
    paddingTop: '6px',
  })

  const submitContact = async (data: IContactForm, resetForm: Function) => {
    try {
      const result = await sendContactForm({
        variables: {
          name: data?.name,
          email: data?.email,
          phoneNumber: data?.phone,
          message: data?.message,
        },
      })
      // API call integration will be here. Handle success / error response accordingly.
      if (result) {
        toast.success('Contact successfully')
        resetForm({})
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  return (
    <div>
      <Box sx={{ marginBottom: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Box sx={{ my: '20px', display: 'flex', justifyContent: 'center' }}>
              <img src='./location.svg' alt='location'></img>
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins',
                fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              Louisville KY
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                background: '#282828',
                mx: { smm: '16px', md: '16px', xl: '60px' },
                py: '16px',
                borderRadius: '10px',
              }}
            >
              <Box
                sx={{
                  marginBottom: '16px',
                  display: 'flex',
                  justifyItems: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}
              >
                <img height='45px' src='./phone.svg' alt='phone'></img>
              </Box>
              <Typography
                sx={{
                  fontFamily: 'poppins',
                  fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                  fontWeight: '700',
                  color: '#FF5231',
                  textAlign: 'center',
                }}
              >
                502-341-5395
              </Typography>
            </Box>
            {/* </Box> */}
          </Grid>
          <Grid item xs={4} md={4}>
            <Box
              sx={{
                my: '24px',
                display: 'flex',
                justifyItems: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <img src='./mail.svg' alt='mail'></img>
            </Box>
            <Typography
              sx={{
                fontFamily: 'poppins',
                fontSize: { xs: '8px', sm: '13px', md: '16px', xl: '20px' },
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              support@mechiridion.com
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          backgroundColor: '#282828',
          height: '590px',
          width: { xs: '400px', sm: '530px', smm: '650px', md: '700px', lg: '870px', xl: '980px' },
          marginBottom: '60px',
          px: '60px',
        }}
      >
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          onSubmit={(values: IContactForm, actions) => {
            submitContact(values, actions.resetForm)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required('Enter your name')
              .matches(
                /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'Name can only contain letters',
              ),
            email: Yup.string().email().required('Enter your email'),
            phone: Yup.string()
              .required('Enter phone number')
              .matches(/^[+\d]+$/, 'Phone Number is Invalid'),
            message: Yup.string().required('Enter your Message'),
          })}
        >
          {(props: FormikProps<IContactForm>) => {
            const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
            return (
              <>
                <Form>
                  <Grid container spacing={6}>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontFamily: 'Russo One',
                          fontWeight: '400',
                          fontSize: '20px',
                          marginTop: '35px',
                        }}
                      >
                        Name{' '}
                      </Typography>
                      <StyleTextField
                        name='name'
                        fullWidth
                        placeholder='Enter your name'
                        type='text'
                        sx={{
                          '& .Mui-error': {
                            fontSize: '14px',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& > fieldset': {
                              borderColor: '#FF4B2A',

                              borderRadius: '10px',
                            },
                          },
                        }}
                        value={values.name}
                        helperText={errors.name && touched.name ? errors.name : ''}
                        error={errors.name && touched.name ? true : false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{
                          fontFamily: 'Russo One',
                          fontWeight: '400',
                          fontSize: '20px',
                          marginTop: '35px',
                        }}
                      >
                        Email{' '}
                      </Typography>
                      <StyleTextField
                        name='email'
                        fullWidth
                        placeholder='Enter your email'
                        type='text'
                        sx={{
                          '& .Mui-error': {
                            fontSize: '14px',
                          },
                          '& .MuiOutlinedInput-root': {
                            '& > fieldset': {
                              borderColor: '#FF4B2A',

                              borderRadius: '10px',
                            },
                          },
                        }}
                        value={values.email}
                        helperText={errors.email && touched.email ? errors.email : ''}
                        error={errors.email && touched.email ? true : false}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{
                      fontFamily: 'Russo One',
                      fontWeight: '400',
                      fontSize: '20px',
                      marginTop: '35px',
                    }}
                  >
                    Phone Number
                  </Typography>

                  <StyleTextField
                    name='phone'
                    fullWidth
                    placeholder='Enter phone number'
                    type='text'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#FF4B2A',
                          borderRadius: '10px',
                        },
                      },
                    }}
                    // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                    value={values.phone}
                    helperText={errors.phone && touched.phone ? errors.phone : ''}
                    error={errors.phone && touched.phone ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Russo One',
                      fontWeight: '400',
                      fontSize: '20px',
                      marginTop: '35px',
                    }}
                  >
                    Message{' '}
                  </Typography>

                  <StyleTextField
                    name='message'
                    fullWidth
                    placeholder='Enter your message'
                    type='text'
                    multiline
                    rows={6}
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#FF4B2A',
                          borderRadius: '10px',
                        },
                      },
                    }}
                    // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                    value={values.message}
                    helperText={errors.message && touched.message ? errors.message : ''}
                    error={errors.message && touched.message ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: '20px',
                    }}
                  >
                    <Button
                      type='submit'
                      sx={{
                        color: 'white',
                        background: 'linear-gradient(93.04deg, #FF4B2A 3.62%, #FF7551 101.83%)',
                        borderRadius: '40px',
                        padding: '12px 56px',
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        fontSize: '14px',
                        textTransform: 'none',
                      }}
                    >
                      Send
                    </Button>
                  </Box>
                </Form>
              </>
            )
          }}
        </Formik>
      </Box>
    </div>
  )
}
