import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loading from '../../Components/Shared/Loading';
import SocialAuthentication from './SocialAuthentication';
import auth from '../../Firebase/firebase.init';

function SignUp() {

    const { register, formState: { errors }, handleSubmit } = useForm()
    console.log(register)

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/"


    if (loading) {
        return <div className='flex justify-center items-center h-screen'><Loading /></div>
    }

    const handleSignIn = data => {
        if (error) {
            toast.error(<p>Error: {error?.message}</p>)
        }
        else {
            console.log(data);
            signInWithEmailAndPassword(data.email, data.password)
            navigate(from, { replace: true });
            toast.success('Congratulation ! You are successfuly SignIn')
        }
    }


    return (
        <div className='montserrat-alternates font-semibold h-screen grid justify-center items-center md:text-xl bg-image'>

            <div className='w-[300px] md:w-[700px]'>

                <p className="text-3xl font-bold my-10 md:pl-10">Sign In Here</p>

                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control w-full bg-transparent border-0">
                        {/* email */}
                        <div className='w-full md:flex justify-center mb-4'>
                            <label className="grid items-end bg-inherit md:w-[150px]" >Your Email</label>
                            <div className='flex justify-center'>
                                <input type="email"
                                    className="bg-transparent md:w-[450px]  border-b-[2.5px] border-dashed border-gray-500 rounded-none outline-none px-2"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid email please'
                                        }
                                    })} />
                            </div>
                        </div>

                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>

                    </div>

                    {/* password */}
                    <div className="form-control w-full bg-transparent border-0">

                        <div className='w-full md:flex justify-center'>
                            <label className="grid items-end bg-inherit md:w-[150px] ">Password</label>

                            <div className='flex justify-center'>
                                <input type="password"
                                    className="bg-transparent md:w-[450px] border-b-[2.5px] border-dashed border-gray-500 rounded-none outline-none px-2"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })} />
                            </div>
                        </div>

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                    <div className='flex justify-end w-[300px] md:w-[650px]'>
                        <Link to='/sigin/forgetpassword' className='lg:pl-4 text-center cursor-pointer link-selection type-3'>Forget Password</Link>
                    </div>

                    <div className="flex justify-center mx-4 my-5 mb-lg-4">
                        <button className='type-4 btn-selection'> Sign In</button>
                    </div>
                </form>


                <div className='flex justify-center my-7 md:my-14'>
                    <p className='lg:pr-3 text-'> New here ? <Link to='/signup' className=''>Sign Up</Link> </p>
                </div>

                <SocialAuthentication />

            </div>


        </div>
    )
}

export default SignUp