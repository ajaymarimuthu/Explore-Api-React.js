import React from 'react'
import { useFormik } from 'formik';
// import './Form.css'

function Login() {

    const initialValues = {
        name: '',
        email: '',
        password: ''

    }

    const onSubmit = values => {
        console.log('Form data', values);
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
        <div className='container'>

            <form className='form' onSubmit={formik.handleSubmit}>


                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name' name='name'
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                      value={formik.values.name} 
                     />
                    { formik.touched.name && formik.errors.name? <div className='error'>{formik.errors.name}</div> : null }
                </div>

                <div  >

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id='email' name='email'    onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email &&  formik.errors.email? <div className='error'>{formik.errors.email}</div> : null }

                </div>


                <div  >


                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password'   onBlur={formik.handleBlur}   onChange={formik.handleChange} value={formik.values.password} />
                    {formik.touched.password && formik.errors.password? <div className='error'>{formik.errors.password}</div> : null }



                </div>



                <button type='submit'>Submit</button>



            </form>

 
 

        </div>
    )
}

export default Login