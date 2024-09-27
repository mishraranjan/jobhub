import {
    Popover, PopoverContent,
    PopoverTrigger,
} from '../ui/popover'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { setUser } from '@/redux/authSlice'

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {
            const res = await axios.post(`${USER_API_END_POINT}/logout`,
                {
                    withCredentials: true
                }
            );
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/')
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }

    }
    const { user } = useSelector(store => store.auth);
    return (
        <div className='bg-white border border-gray-200 shadow-lg py-2'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-10'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job<span className='text-blue-500'>Hub</span>
                    </h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/jobs">Jobs</Link></li>
                        <li><Link to="/browse">Browse</Link></li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex gap-2'>
                                <Link to='/login'>
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to='/signup'>
                                    <Button className='bg-emerald-300 hover:bg-emerald-500 text-black hover:text-white'>Signup</Button>
                                </Link>
                            </div>
                        ) : (<Popover >
                            <PopoverTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage
                                        src={user?.profile?.profilePhoto || 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
                                        alt="@shadcn"
                                    />

                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent >
                                <div className='flex gap-4 items-center mb-2'>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage
                                            src={user?.profile?.profilePhoto || 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
                                            alt="@shadcn"
                                        />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium' >{user?.fullname}</h4>
                                        <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600 items-start' >
                                    <div className='flex w-fit items-center gap-2 '>
                                        <User2 />
                                        <Button variant='link' ><Link to='/profile'>View Profile</Link></Button>
                                    </div>
                                    <div className='flex w-fit items-center gap-2 '>
                                        <LogOut />
                                        <Button variant='link' onClick={logoutHandler} >Log Out</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar
