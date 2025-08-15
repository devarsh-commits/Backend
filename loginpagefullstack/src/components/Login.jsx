import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'
import { useState,useEffect } from 'react'

const Login = () => {
    const[dataa,setdataa]=useState()
    const{register,
        handleSubmit,
        watch,
        setError,
        formState:{errors,isSubmitted,isSubmitSuccessful,isSubmitting}
    }=useForm();
     const onsubmit=async(data)=>{
      console.log(data);
      
       const response=await fetch("http://localhost:3000/" ,{method:"POST",headers:{ 'Content-Type': 'application/json'},body:JSON.stringify(data)})
       const res=await response.json()
       setdataa(res)
       console.log(dataa)
       console.log("Data received")
     }
  return (
    <div className='lgpage'>
        <div className="heading">Login Here....</div>
        <form action="" onSubmit={handleSubmit(onsubmit)} className='form'>
            <input type="text" placeholder='Enter Username' {...register("username",{required:{value:true,message:'Enter the Username'},minLength:{value:7,message:"Min 7 Characters required"}})} />
            {errors.username&&<span className='erruser'>{errors.username.message}</span>}
            <input placeholder='Enter Your PassWord' type="password" {...register("password",{required:{value:true,message:"Enter the Password"},minLength:{value:8,message:"Password should be of min 8 length"}})} />
            {errors.password&&<span className='errpass'>{errors.password.message}</span>}
            <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Login