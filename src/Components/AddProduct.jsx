import React, { useState } from 'react'
import axios from "axios"
import {useFormik} from 'formik';
import {signupSchema} from '../Features/schema';
import '../Styles/Addproduct.css'
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [message,setMessage] = useState("")
  const [file, setFile] = useState("")
  const [success, setShowSuccess] = useState(false)
  const navigate = useNavigate()

  //Converting images to base 64
  const [newImage, setNewImage] = useState("")
  const [uploadStatus, setUploadStatus] = useState("")
  const getFile = (e)=>{
    const myFile = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(myFile);
    reader.onload = ()=>{
      setFile(reader.result)
    }
  }
  
  //Uploading images to the cloudinary/POST request
   const upload = ()=>{
     if(file == ""){
      setUploadStatus("(🤳 select an image)")
     } else {
      setUploadStatus("(uploading)")
     }
    const url = "https://abdulmalikyinka.onrender.com/saveFile"
    const userData = {file}
    axios.post(url,userData).then((response)=>{
      setNewImage(response.data.image)
      setUploadStatus("(image added ✔)")
     })
     .catch((error)=>{
        console.log(error)
     })
   }

  const onSubmit = async (values, actions) => {
      console.log(values);
      const name = values.name;
      const newPrice = values.newPrice;
      const oldPrice = values.oldPrice;
      const category = values.category;
      setMessage("creating account...")
      const url = "http://localhost:4000/addProduct"
      try {
        await axios.post(url,{name,newImage,newPrice,oldPrice,category}).then((response)=>{
            console.log(response.data)
            setMessage(response.data.message)
            if(response.data.message == "Product Added"){
              navigate('/addproduct')
            }
            actions.resetForm();
        }).catch((error)=>{
            console.log(error)
        }) }
      catch(error){
        console.log(error)
      }
    }
  
  const {values, errors, touched, isSubmitting,  handleBlur, handleChange, handleSubmit} = 
  useFormik({
    initialValues: {
        name: "",
        newPrice: "",
        oldPrice: "",
        category: "",
    },
    validationSchema: signupSchema,
    onSubmit,
  })

  return (
   <div className="pt-3 body">
      <div>
        <div class='inputCont mt-3 col-md-8 col-lg-4 d-block m-auto mb-5'>

          <h6 className={(message == "Signup successful" || "creating account...")? "text-center text-success fs-3 fw-bold mt-2" : "text-center text-danger fs-3 fw-bold"}>{message}</h6>
          <h5 class='text-center fw-bold mt-4 px-3 fs-2'>Add a new product</h5>  
          <input type="text" name='name' placeholder="name" className="form-control name w-75 d-block m-auto mt-3 text-center py-2 " value={values.name} onChange={handleChange} onBlur={handleBlur} />
          {errors.name && touched.name && <p className='error text-center'>{errors.name}</p>}

          <input type="text" placeholder="newPrice" name="newPrice" className="form-control phoneNo w-75 d-block m-auto mt-4 text-center py-2" value={values.newPrice}  onChange={handleChange} onBlur={handleBlur} />
          {errors.newPrice && touched.newPrice && <p className='error text-center'>{errors.newPrice}</p>}

          {/*OLD PRICE*/}
          <span class="pe-lg-1 d-flex">
            <input type="text" placeholder="oldPrice" name="oldPrice" autoComplete="off"  value={values.oldPrice} onChange={handleChange} onBlur={handleBlur} className="form-control phoneNo d-block m-auto me-5 fs-5 text-center py-2" />
          </span>
          {errors.oldPrice && touched.oldPrice && <p className='error text-center'>{errors.oldPrice}</p>}

          {/* category */}
          <input type="text" placeholder="category" name="category" value={values.category} className="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={handleChange} onBlur={handleBlur} />
          {errors.category && touched.category && <p className='error text-center'>{errors.category}</p>} 

          {/* Uploading image to the cloud storage */}
          <p class="ms-5">Add product image</p>
          <input type="file" class="form-control w-75 d-block m-auto mt-4 text-center py-2" onChange={(e)=>getFile(e)}/><br />
          <button className="btn btn-info px-2 d-block m-auto upload" onClick={upload}>Upload  {uploadStatus}</button>
          {/* <img className="w-50" src={newImage} alt="" /> */}
          
          <button type='submit' disabled={isSubmitting} className="btn btn-info px-3 py-2 w-75 mt-3 fs-5 d-block m-auto border-0 userLogin text-white" onClick={handleSubmit}>Add Product</button>

        {/* <button onClick={testBtn}>TEST</button> */}

         </div>
      </div>
    </div>
  )
}

export default AddProduct
