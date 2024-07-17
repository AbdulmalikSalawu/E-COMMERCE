import React, { useEffect, useState } from "react"
import {useFormik} from 'formik';
import {signupSchema} from '../Features/schema';
import axios from "axios"
import '../Styles/Signup.css'
import { useNavigate } from "react-router";

function Signup() {

  const [message,setMessage] = useState("")
  const [success, setShowSuccess] = useState(false)
  const navigate = useNavigate()
  const [cartData,setCartData] = useState("")

  const onSubmit = async (values, actions) => {
    if(success === true){
      console.log(values);
      const name = values.firstname;
      const email = values.email;
      const password = values.password;
      // new Promise((resolve) => setTimeout(resolve, 1000))
      setMessage("creating account...")
      const url = "http://localhost:4000/signup"
      try {
        await axios.post(url,{name,email,password,cartData}).then((response)=>{
            console.log(response.data)
            setMessage(response.data.message)
            if(response.data.message == "Signup successful"){
              navigate('/login')
            }
            actions.resetForm();
        }).catch((error)=>{
            console.log(error)
        }) }
      catch(error){
        console.log(error)
      }
    }}
  
  const {values, errors, touched, isSubmitting,  handleBlur, handleChange, handleSubmit} = 
  useFormik({
    initialValues: {
        name: "",
        email: "",
        password: ""
    },
    validationSchema: signupSchema,
    onSubmit,
  })

  return (
    <div className="pt-3 body">
    
        <div class='inputCont mt-3 col-md-8 col-lg-4 d-block m-auto mb-5'>
          <h6 className={(message == "Signup successful" || "creating account...")? "text-center text-success fs-3 fw-bold mt-2" : "text-center text-danger fs-3 fw-bold"}>{message}</h6>
          <h5 class='text-center fw-bold mt-4 px-3 fs-2'>Create an account with us today</h5>  

          {/* NAME */}
          <input type="text" name='name' placeholder="name" className="form-control firstname w-75 d-block m-auto mt-3 text-center py-2 " value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name && <p className='error text-center'>{errors.name}</p>}

          {/* EMAIL ADDRESS */}
          <input type="text" placeholder="email" name="email" value={values.email} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.email && touched.email && <p className='error text-center'>{errors.email}</p>} 

          {/*PASSWORD*/}
          <input type="password" placeholder="password" name="password" className="form-control w-75 d-block m-auto mt-4 text-center py-2" value={values.password} onChange={handleChange} onBlur={handleBlur} /><br></br>
          {errors.password && touched.password && <p className='error text-center'>{errors.password}</p>}
          
          <button type='submit' disabled={isSubmitting} className="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white" onClick={handleSubmit}>Create Account</button>

          <p class='text-center mb-5' onClick={()=> navigate('/login')}>Already have an account? Login</p>

         </div>
    </div>
  )
}

export default Signup