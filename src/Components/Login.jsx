import React, { useEffect, useState } from 'react'
import '../Styles/Login.css'
import {useFormik} from 'formik';
import {basicSchema} from '../Features/loginSchema';
import { useNavigate } from 'react-router';

const Login = () => {

  const [loginStatus, setLoginStatus] = useState("")
  const navigate = useNavigate()

  const onSubmit = async (values,actions)=> {
    const email = values.email;
    const password = values.password;
    fetch("https://storeformalik.onrender.com/loginUser", {
    // fetch("http://localhost:4000/loginUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      
    })
    .then((res) => res.json())
    .then((data) => {
      setLoginStatus("logging in ...")
      console.log(data, "userRegister");
      if(data.status == "ok"){
        localStorage.setItem("token", data.data);
        navigate('/')
        actions.resetForm();
      }
      else{
        setLoginStatus("invalid login details")
      }
    });
}
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
      initialValues: {
          email: "",
          password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    })

  return (
    <div className='main'>
       <div class='mt-5'>
          <div class='inputCon col-md-8 col-lg-4 d-block m-auto mt-4'>
            <h4 className={(loginStatus == "invalid login details") ? "text-center text-danger mt-2" : "text-center text-success mt-2"}>{loginStatus}</h4>
            <h5 class='text-center mt-3 fw-bold fs-4'>Login to your account</h5>
            <p class='text-center'>Securely login to your account</p>
            <p class='ms-5 inputPurpose'><em>Email</em></p>
            <input type="text" placeholder="email" name="email" className="form-control w-75 d-block m-auto mt-2 text-center py-2" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>}

            <p class='ms-5 mt-3 inputPurpose'><i>Password</i></p>
            <input type="text" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-3 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
            {errors.password && touched.password && <p className='error text-center'>{errors.password}</p>}

            <button disabled={isSubmitting} type='submit' className="btn btn-info d-block m-auto px-3 py-2 mt-5 w-75 text-white userLogin fs-5" onClick={handleSubmit}>Login</button>
            
            <p class='text-center mt-1' onClick={()=> navigate('/signup')}>No account yet? Signup</p>
            <p class='text-center text-danger mt-1' onClick={()=> navigate('/resetpassword')}>Forgot password?</p>
          </div>
        </div>
    </div>
  )
}

export default Login
