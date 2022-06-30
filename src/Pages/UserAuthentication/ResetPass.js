import React from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import Loading from '../../Components/Shared/Loading'
import auth from '../../Firebase/firebase.init'

function ResetPass() {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth)

    if (sending) {
      return <div className='flex justify-center items-center h-screen'><Loading /></div>
    }

    const passReset = (event) => {
        event.preventDefault()
        if (error) {
            alert(<p>Error: {error?.message}</p>)
        }
        else {
            sendPasswordResetEmail(event.target.email.value)
            toast.success('Password reset email was send.')
        }

    }

    return (
        <div className='montserrat-alternates font-semibold h-screen flex justify-center items-center'>

            <div>

                <div className='my-14'>
                    <p className="text-2xl md:text-3xl font-bold my-7">Reset your pssword</p>
                    <p>Please input your valid email here. <br /> We will send an email to reset your password.</p>
                </div>

                <form onSubmit={passReset}>

                    <div className=''>

                        <div className='grid justify-center'>
                            <label className="grid items-end bg-inherit md:w-[150px] mb-2" >Your Email</label>
                            <input type="email" name='email' className='bg-transparent md:w-[450px]  border-b-[2.5px] border-dashed border-gray-500 rounded-none outline-none text-center' />
                        </div>

                        <div className='flex justify-center my-6'>
                            <button className='type-4 btn-selection'>Send</button>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    )
}


export default ResetPass;
