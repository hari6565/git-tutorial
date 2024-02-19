
'use client';
import next from 'next';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
 import Image from 'next/image';
import Picture from '../../assests/google.png'

function Component() {
  return (
<div className="h-screen flex items-center justify-center flex-col border-20">
    <div className="border-2 w-80 mt-3">
    <div className="my-7">
        <Image
          className="w-12 mr-4 mx-32"
          justify-center
          src={Picture}
          alt="centered image"
        />
      </div>
    <div className="px-8 gap-2 text-bold">
        <h1>Signin</h1>
      </div>
      <div className="px-6 flex flex-col gap-4">
        
        <TextInput id="email1" type="email" placeholder="Email or phone" className="mt-2 p-1 " />
      </div>
      <div className="px-6 flex flex-col gap-6">
        
        <TextInput id="password1" type="password"  placeholder="Enter your password" className="mt-2 p-1" />
      </div>
      <div className= "px-7 flex flex-col gap-2">
      <div className="mb-4  text-sm mt-4">
        <Checkbox id="remember" />
        <Label htmlFor="remember">showpassword</Label>
      </div>
      </div>
      <div className="flex items-center justify-between mb-4 my-5 text-blue-400 ">
          <a href="#" className="text-sm">
            Forgot Password?
          </a>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
            Next
          </button>
          </div>
          </div>
          </div>
      
    // </form>
  );
}
export default Component
