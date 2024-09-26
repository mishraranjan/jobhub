import React, { useState } from 'react'
import { Label } from '../components/ui/label'
import { Input } from '../components/ui/input'
import Navbar from '../components/shared/Navbar.jsx'
import { RadioGroup } from '../components/ui/radio-group'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'
import { setLoading, setUser } from '@/redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })
  const { loading } = useSelector(store => store.auth)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate('/');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || 'Login failed, please try again.';
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false))
    }
  }

  return (
    <div >
      <Navbar />
      <div className='flex items-center  justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border shadow-xl border-gray-200 rounded-md p-4 my-10'>
          <h1 className='text-xl font-bold mb-5 text-center'>Login</h1>
          <div className='mt-2'>
            <Label>Email</Label>
            <Input
              type='email'
              placeholder='Enter your email'
              value={input.email}
              name='email'
              onChange={changeEventHandler}
            />
          </div>
          <div className='mt-2'>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='Enter your password'
              value={input.password}
              name='password'
              onChange={changeEventHandler}
            />
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
          {
            loading ? <Button className='bg-blue-300 text-black w-full hover:bg-blue-500'>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />Loading
              </Button> :
              <Button className='bg-blue-300 text-black w-full hover:text-white hover:bg-blue-500 mb-2'>
                Login
              </Button>
          }

          <span className='text-gray-600 text-sm'>
            Don't have an account? <Link to='/signup' className='text-blue-600'>Signup</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
