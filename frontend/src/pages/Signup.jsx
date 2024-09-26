import React, { useState } from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import Navbar from '../components/shared/Navbar.jsx'
import { RadioGroup } from '../components/ui/radio-group'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '../utils/constant.js'
import { toast } from 'sonner'
import axios from 'axios'
import { setLoading } from '@/redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const { loading } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('password', input.password);
    formData.append('role', input.role);
    if (input.file) {
      formData.append('file', input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true
      });
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border shadow-xl border-gray-200 rounded-md p-4 my-10'>
          <h1 className='text-xl font-bold mb-5 text-center'>Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type='text' placeholder='Enter your name' value={input.fullname} name='fullname' onChange={changeEventHandler} />
          </div>
          <div className='mt-2'>
            <Label>Email</Label>
            <Input type='email' value={input.email} name='email' onChange={changeEventHandler} placeholder='Enter your email' />
          </div>
          <div className='mt-2'>
            <Label>Phone Number</Label>
            <Input type='text' value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} placeholder='Enter your number' />
          </div>
          <div className='mt-2'>
            <Label>Password</Label>
            <Input type='password' value={input.password} name='password' onChange={changeEventHandler} placeholder='Enter your password' />
          </div>
          <div className="flex items-center justify-between ">
            <RadioGroup className='flex items-center gap-4 my-2'>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='recruiter'
                  onChange={changeEventHandler}
                  checked={input.role === 'recruiter'}
                  className='cursor-pointer'
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label >Profile Photo</Label>
            <Input className='cursor-pointer ' onChange={changeFileHandler} accept='image/*' type="file" />
          </div>
          {
            loading ? <Button className='bg-blue-300 text-black w-full hover:bg-blue-500 mt-2'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />Loading
              </Button> :
              <Button className='bg-blue-300 text-black w-full hover:bg-blue-500 mt-2  hover:text-white mb-2'>
               Signup
              </Button>
          }

          <span className='text-gray-600 text-sm'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link> </span>

        </form>
      </div>
    </div>
  )
}

export default Signup
