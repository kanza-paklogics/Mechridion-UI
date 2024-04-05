import { Button, Box, Typography, TextField, styled } from '@mui/material'
import { useState, ChangeEvent } from 'react'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import Image from 'next/image'
import useAddMember from 'hooks/member/useAddMember'
import useGetMemberById from 'hooks/member/useGetMemberById'
import useUpdateMember from 'hooks/member/useUpdateMember'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { CircularProgress } from '@mui/material'

interface IMemberForm {
  name: string
  email: string
  phone: string
}

type Props = {
  userid: string | null
  id: string | null
}

const AddMember = ({ userid, id }: Props) => {
  const [selectedFile, setSelectedFile] = useState<string>('')
  const [addMember, loadingMember] = useAddMember()
  const [updateMember, loadingUpdate] = useUpdateMember()
  const [data, loadingMemberId, refetchMember] = useGetMemberById(id)
  const router = useRouter()
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0]

      // Check if the selected file is an image
      if (file && file.type.startsWith('image/')) {
        const formData = new FormData()
        formData.append('isMulti', 'false')
        formData.append('uploadPath', '/testupload')
        formData.append('photos', file)

        const requestOptions: RequestInit = {
          method: 'POST',
          body: formData,
          redirect: 'follow',
        }
        let result: any = await fetch(`${process.env.NEXT_PUBLIC_IMAGE_URL}`, requestOptions)
        result = await result.json()

        if (result) {
          setSelectedFile(result?.data[0]?.url[3].Location)
          toast('Image Uploaded Successfully')
        }
      } else {
        setSelectedFile('')
        toast('Please choose an image file')
      }
    } catch (error: any) {
      toast(error)
    }
  }

  // const classes = useStyles()
  const StyleTextField = styled(TextField)({
    input: {
      '&::placeholder': {
        color: '#fff',
        opacity: 1,
      },
    },

    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '6px',
  })

  const createMemberSubmit = async (data: IMemberForm, resetForm: Function) => {
    try {
      const result = await addMember({
        variables: {
          input: {
            userName: data?.name,
            firstName: data?.name,
            email: data?.email,
            phone: data?.phone,
            profileImage: selectedFile,
            memberRole: 'shopMember',
            parentId: userid,
          },
        },
      })
      // API call integration will be here. Handle success / error response accordingly.
      if (result) {
        toast.success('Member Added successfully')
        resetForm({})
        router.push('/allmember')
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  const updateMemberSubmit = async (dataMember: IMemberForm, resetForm: Function) => {
    try {
      const result = await updateMember({
        variables: {
          input: {
            accountId: id,
            firstName: dataMember?.name,
            profileImage: selectedFile || data?.profileImage,
          },
        },
      })
      // API call integration will be here. Handle success / error response accordingly.
      if (result) {
        toast('Member Updated successfully')
        // resetForm({})
        refetchMember()
        router.push('/allmember')
      }
    } catch (err: any) {
      toast(err.message)
    }
  }

  if ((id && !data) || loadingMemberId) {
    return   <div className='text-center bg-[#222222] h-[100vh]'><CircularProgress color='success' /></div>
  }
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '20px',
          backgroundColor: '#282828',
          height: '840px',
          width: {
            xs: '400px',
            sm: '530px',
            smm: '650px',
            md: '700px',
            lg: '870px',
            xl: '980px',
          },
        }}
      >
        <div>
          <label htmlFor='upload-button'>
            {selectedFile ? (
              <Box
                sx={{
                  marginTop: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image
                  className='object-cover rounded-full cursor-pointer'
                  src={selectedFile}
                  draggable='false'
                  // fill
                  width={200}
                  height={200}
                  alt='member'
                />
              </Box>
            ) : (
              <Box
                sx={{
                  marginTop: '60px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image
                  className='object-cover rounded-full cursor-pointer'
                  src={id ? data?.profileImage : '/profileImg.svg'}
                  draggable='false'
                  width={200}
                  height={200}
                  alt='member'
                />
              </Box>
            )}
          </label>

          <input
            id='upload-button'
            accept='.png, .jpeg, .jpg, .gif, .svg'
            onChange={handleFileChange}
            className='hidden'
            type='file'
          />
        </div>

        <Formik
          initialValues={{
            name: id ? data?.profile?.firstName : '',
            email: id ? data?.emails[0]?.address : '',
            phone: id ? data?.profile?.phone : '',
          }}
          onSubmit={(values: IMemberForm, actions) => {
            id
              ? updateMemberSubmit(values, actions.resetForm)
              : createMemberSubmit(values, actions.resetForm)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required('Enter Your Name')
              .matches(
                /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                'User Name can only contain letters.',
              ),
            email: Yup.string().email().required('Enter Your email'),
            phone: Yup.string()
              .required('Enter Your Phone Number')
              .matches(/^[+\d]+$/, 'Invalid phone number'),
          })}
        >
          {(props: FormikProps<IMemberForm>) => {
            const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
            return (
              <>
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
                    placeholder='yANCHUI'
                    type='text'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#A9A9A9',
                          borderRadius: '10px',
                        },
                      },
                    }}
                    // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                    value={values.name}
                    helperText={errors.name && touched.name ? errors.name : ''}
                    error={errors.name && touched.name ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='off'
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
                    placeholder='yanchui@gmail.com'
                    type='text'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#A9A9A9',
                          borderRadius: '10px',
                        },
                      },
                    }}
                    // sx={{border:"1px solid #FF5B39",borderRadius:"5px",width:"57%"}}

                    value={values.email}
                    helperText={errors.email && touched.email ? errors.email : ''}
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='off'
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
                    placeholder='+14987889999'
                    type='text'
                    sx={{
                      '& .Mui-error': {
                        fontSize: '14px',
                      },
                      '& .MuiOutlinedInput-root': {
                        '& > fieldset': {
                          borderColor: '#A9A9A9',
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
                    autoComplete='off'
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
                        padding: '14px 56px',
                        fontFamily: 'Poppins',
                        fontWeight: '500',
                        fontSize: '20px',
                        textTransform: 'none',
                      }}
                    >
                      {id ? 'Update Member' : 'Add Member'}
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
export default AddMember
