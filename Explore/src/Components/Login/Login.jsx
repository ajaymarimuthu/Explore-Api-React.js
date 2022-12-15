import React, { useRef,useState } from 'react'
import { useFormik } from 'formik';
 
import './Login.css'
import Button from '@mui/material/Button';

function Login() {

    const [isLoggedIN, setIsLoggedIN] = useState(false)

    const nameRef =useRef();
        const emailRef =useRef();
        const pwdRef =useRef();

    const initialValues = {
        name: '',
        email: '',
        password: ''

    }

    const onSubmit = values => {
        // console.log('Form data', values);
      
        setIsLoggedIN(true);
        nameRef.current.value="";
        emailRef.current.value="";
        pwdRef.current.value="";

        
        // setIsLoggedIN(!islo);
    }

    const validate = values => {

        // 1.)this function must return an object: here errors is the object
        // 2.)keys of this errors obj should be similar as of that values object 
        // 2.)keys are=>  errors.name , errors.email, errors.password  
        // 3.) values of these keys should be a string inducating what a err msg
        // should be for the particular field


        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }

        if (!values.password) {
            errors.password = 'Required'
        }

        return errors
    }

    const formik = useFormik({ initialValues, onSubmit, validate })

    console.log('visited:', formik.touched);

    return (
        <div className='container-fluid'>
           {isLoggedIN? <h1 style={{color:"green"}}>You are in  Buddy</h1> :  <h1>Login Form</h1>   }

           



            <form className='form' onSubmit={formik.handleSubmit}>

                <div className='form-field'>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder='Name' id='name' name='name'
                    ref={nameRef}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div  className='form-field'>

                    <label htmlFor="email"></label>
                    <input type="email" placeholder='E-mail:'  ref={emailRef}  id='email'
                     name='email' 
                     onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                     
                    {formik.touched.email && formik.errors.mail ? <div className='error'>{formik.errors.email}</div> : null}

                </div>

                <div className='form-field' >

                    <label htmlFor="password"></label>
                    <input type="password" placeholder='Password'  ref={pwdRef} id='password' name='password' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
                    {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
 
                </div>
  
                {/* <button type='submit'>Submit</button> */}
                <Button className='login-btn' type='submit' variant="contained" onClick={()=>{setIsLoggedIN(true)}}> LogIn </Button>
 
            </form>
 
        </div>
    )
}

export default Login