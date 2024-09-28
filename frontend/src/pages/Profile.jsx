import AppliedJobTable from '@/components/AppliedJobTable';
import Navbar from '@/components/shared/Navbar';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import UpdateProfileDialog from '@/components/UpdateProfileDialog';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import { Contact, Mail, PenIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// const skills = ["HTML", "CSS", "Javascript", "Reactjs"]
const Profile = () => {
    useGetAppliedJobs();
    const isResume = true;
    const [open, setOpen] = useState(false);
    const { user } = useSelector(store => store.auth);
    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border shadow-lg border-gray-200 rounded-2xl my-5 p-8'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Avatar className='h-24 w-24'>
                            <AvatarImage
                                src={user?.profile?.profilePhoto || 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='}
                                alt="@shadcn"
                            />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile.bio}</p>
                        </div>
                    </div>
                    <Button className='text-right' onClick={() => setOpen(true)} variant='outline'><PenIcon /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex item-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex item-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='text-md font-bold'>Skills</h1>
                    <div className="flex items-center gap-1 mt-2" >
                        {
                            user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index} className='px-4 py-1  border-emerald-400' variant='outline'>{item}</Badge>) : 'NA'
                        }
                    </div>
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className="max-w-4xl mx-auto bg-white -2xl">
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
}

export default Profile;
