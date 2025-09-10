import { Box, Button, TextField } from '@mui/material';
import { loginSchema } from './helper';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/userSlice';


export function LogInForm({ setShowLoginPage}) {
    const dispatch = useDispatch();

        const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    } = useFormik({
      initialValues: {
            login: '',
            password:''
        },
        
         onSubmit: (values, action) => {
             setShowLoginPage(false);
             dispatch(loginUser(values.login));
             localStorage.setItem('user', values.login)
             action.resetForm();
        },
        validationSchema: loginSchema
  })



    return (
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}}>
            <TextField placeholder="Введить логін" fullWidth required autoFocus sx={{ my: 3 }} value={values.login} name='login' onChange={handleChange} onBlur={handleBlur} />
             {errors.login && touched.login && (<span style={{ color: "red" }}> {errors.login}</span>)}

            <TextField placeholder="Введить пароль" fullWidth required type='password' sx={{ mb: 1 }} name='password' onChange={handleChange} onBlur={handleBlur}/>
            {errors.password && touched.password && (<span style={{ color: "red" }}> {errors.password}</span>)}
            <Button type='submit' variant='contained' fullWidth sx={{ mt: 5, height: '3.5rem' }} disabled={errors.login} >Увійти</Button>
        </Box>
    )
}