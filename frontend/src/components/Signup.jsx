import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Navbar from './shared/Navbar'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Button } from './ui/button'

function Signup() {
  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='text-xl font-bold mb-5'>Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type='text' placeholder='Enter your name' />
          </div>
          <div  className='mt-2'>
            <Label>Email</Label>
            <Input type='text' placeholder='Enter your email' />
          </div>
          <div  className='mt-2'>
            <Label>Phone Number</Label>
            <Input type='text' placeholder='Enter your number' />
          </div>
          <div className='mt-2'>
            <Label>Password</Label>
            <Input type='password' placeholder='Enter your password' />
          </div>
          <div className="flex items-center justify-between mt-2">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className='flex justify-center mt-2'>
          <Button className='bg-blue-300 text-black w-full hover:bg-blue-500'>
            Signup
          </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
