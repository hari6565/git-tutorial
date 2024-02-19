"use client"

import React from 'react'
import { Button,  TextInput } from 'flowbite-react';
import GitHub from "../../assests/gitHub.png";
import Image from "next/image";
const GithubLoginForm = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <Image  className="  w-6" src={GitHub} alt="" ></Image> 
      <h5 className=' my-2'>Sign in To GitHub</h5> 
<form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block font-semibold">
          <h1>Username</h1>
        </div>
        <TextInput id="email1" type="email"  required />
      </div>
      <div>
        <div className="mb-2 block  flex justify-between font-semibold" >
        
          <h1>Password</h1>
          <a className=' text-blue-500' href="">Forget Password?</a> 
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
       
        
      </div>
      <Button className="bg-green-400" type="submit">Sign in</Button>
      <div className='flex border-2 p-3 rounded-sm '>
      <h1>New to GitHub?</h1>
        <a className=' text-blue-500' href="">Create an account.</a>
      </div>
        
    

    </form>
    </div>
  );


 
};

export default GithubLoginForm;