import React from 'react'
import './Login.css'
import { useForm } from 'react-hook-form'

const Login = () => {
    const{register,
        handleSubmit,
        watch,
        setError,
        formState:{errors,isSubmitted,isSubmitSuccessful}
    }=useForm();
     const onsubmit=(data)=>{
        console.log(data)
     }
  return (
    <div className='lgpage'>
        <div className="heading">Login Here....</div>
        <form action="" onSubmit={handleSubmit(onsubmit)} className='form'>
            <input type="text" placeholder='Enter Username' {...register("username",{required:{value:true,message:'Enter the Username'},minLength:{value:7,message:"Min 7 Characters required"}})} />
            {errors.username&&<span className='erruser'>{errors.username.message}</span>}
            <input placeholder='Enter Your PassWord' type="password" {...register("password",{required:{value:true,message:"Enter the Password"},minLength:{value:8,message:"Password should be of min 8 length"}})} />
            {errors.username&&<span className='errpass'>{errors.username.message}</span>}
            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Login