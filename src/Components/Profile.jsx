import React, { useEffect, useState } from 'react'
import { FaBars} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { navNotNeeded } from '../Features/navSlice'
import axios from 'axios';

function Profile() {
  const navigate = useNavigate();
  const location = useLocation()
  const [firstname, setFirstName] = useState(location.state?.name || "error");
  const [userData, setUserData] = useState({})
    
  useEffect(() => {
      if(localStorage.getItem('token')){
        localStorage.removeItem("addnavbar")
        fetch("http://localhost:4000/userData", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          token:localStorage.getItem("token"), 
        }),
      })
      .then((res)=>res.json())
      .then((data)=> {
          console.log(data, "userData")
          setUserData(data.data)
          if (data.data=="token expired") {
            alert("session expired, login again");
            localStorage.clear();
            navigate('/login')
          }
        })}
    }, [])

  // useEffect(()=> {
  //       console.log(location)
  //       setFirstName(location.state.name)
  // }, [])

    const updateData = () => {
        fetch("http://localhost:4000/updatedetails", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              id:location.state._id,
              username:firstname,
            }),
          })
          .then((res)=>res.json())
          .then((data)=> {
              // console.log(firstname)
              console.log(data)
              setFirstName(location.state.name)
              navigate('/heropage')
            })
    }

  return (
    <div>
        <h4 className='text-center mt-3'>{firstname}, Welcome to your Profile</h4>
        <i className='text-center d-block m-auto text-white fs-3'>Click each detail to edit it 🖍</i>
        <input type="text" className="form-control w-75 d-block m-auto mt-5 text-center py-2 editDetail"
        defaultValue={firstname}
        onChange={(e)=>setFirstName(e.target.value)} />
        <button onClick={updateData} className='btn btn-info px-2 d-block m-auto mt-3 update py-2 fw-bold'>Update details 🖍</button>
    </div>
  )
}

export default Profile
