import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../CSS/login.css";



const Login = () => {
  //variable, function
  const [successful, setSuccessful] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters'),
    }),
    onSubmit: (values) => {
      setSuccessful('Logged In!');
      formik.resetForm();
    },
  });

  return (
    <section className='body_login'>
      <div className='app_Signup'>
      <h2 style={{ textAlign: 'center'}} className='title'>Sign UP</h2>
      {successful && <p>{successful}</p>}
      <form className="app_form" onSubmit={formik.handleSubmit}>
      <div >
          <input
            type="text"
            placeholder="First Name"
            className = "app_fname"
            name="firstName"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
        </div>
        <div >
          <input className = "app_lname"
            type="text"
            placeholder="Last Name"
            name="lastName"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
        </div>
        <div >
          <input className = "app_email"
            type="email"
            placeholder="Email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div >
          <input className = "app_password"
            type="password"
            placeholder="Password"
            name="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button className='login_btn' type="submit">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default Login ;