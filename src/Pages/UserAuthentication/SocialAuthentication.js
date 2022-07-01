import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { DotLoader, HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import auth from '../../Firebase/firebase.init';
import { FcGoogle } from 'react-icons/fc';
import useToken from '../../Hooks/useToken';

function SocialAuthentication() {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [token]=useToken(googleUser)

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"


    if (googleError) {
        toast.error(<>{googleError?.message}</>)
    }

    if (googleLoading) {
        return <div className='flex justify-center items-center'>
            <DotLoader color='#05a962' size={50} />
        </div>
    }

    if (token) {
        navigate(from, { replace: true })
        toast.success('Congratulation ! You are successfuly SignIn')
    }

    return (
        <div className='flex items-center justify-center'>
            <button onClick={() => signInWithGoogle()} className=' flex items-center p-2 rounded-lg bg-base-100 hover:bg-black hover:text-white'>
            <span>CONTINUE WITH GOOGLE</span>  <FcGoogle className='text-2xl ml-2' />
            </button>
        </div>
    )
}

export default SocialAuthentication
