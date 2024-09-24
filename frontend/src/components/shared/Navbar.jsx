import {
    Popover, PopoverContent,
    PopoverTrigger,
} from '../ui/popover'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'

function Navbar() {
    const user = false;
    return (
        <div className='bg-white'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-10'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        Job<span className='text-blue-500'>Portal</span>
                    </h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/">Job</Link></li>
                <li><Link to="/">Browse</Link></li> */}
                        <li>Home</li>
                        <li>Job</li>
                        <li>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex gap-2'>
                                <Link to='/login'>
                                    <Button variant="outline">Login</Button>
                                </Link>
                                <Link to='/signup'>
                                    <Button className='bg-emerald-300 hover:bg-emerald-500 text-black'>Signup</Button>
                                </Link>
                            </div>
                        ) : (<Popover >
                            <PopoverTrigger asChild>
                                <Avatar className='cursor-pointer'>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent >
                                <div className='flex gap-4 items-center mb-2'>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium' >Ranjan Mishra</h4>
                                        <p className='text-sm text-muted-foreground'> Lorem ipsum dolor </p>
                                    </div>
                                </div>
                                <div className='flex flex-col text-gray-600 items-start' >
                                    <div className='flex w-fit items-center gap-2 '>
                                        <User2 />
                                        <Button variant='link' >View Profile</Button>
                                    </div>
                                    <div className='flex w-fit items-center gap-2 '>
                                        <LogOut />
                                        <Button variant='link' >Log Out</Button>
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
