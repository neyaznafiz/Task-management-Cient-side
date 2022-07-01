import React from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react'
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const css = `
        .my-selected:not([disabled]) { 
            font-weight: bold;
            color: #05a962; 
            border: 2px solid #05a962;
          }
          .my-selected:hover:not([disabled]) { 
            border-color: #05a962;
            color: #05a962;
          }
          .my-today {
              padding: 20px;
            font-size: 130%; 
            color: #05a962;
          }
    `

function Calender() {

    const [date, setDate] = useState(new Date())
    console.log(date)

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const [user] = useAuthState(auth)
    console.log(user);

    const formatedDate = format(date, 'PPPP')

    const handlePostToDo = data => {

        const toDoInput = {
            email: user.email,
            date: formatedDate,
            title: data.title,
            content: data.content
        }

        axios.post('https://limitless-dawn-15387.herokuapp.com/post-todo', toDoInput)
            .then(res => {
                const { data } = res
                if (data?.insertedId) {
                    toast.success('Your To-Do added successfully.')
                    reset()
                }
                else {
                    toast.error('Faild to added your To-Do. Please try again.')
                }
            })
    }


    return (
        <div>
            <div className="">
                <div className="grid lg:grid-cols-3 md:grid-cols-3">
                    <div className='m-6 md:m-16 p-5 w-80 h-96 shadow-2xl rounded-xl'>
                        <style>{css}</style>
                        <DayPicker
                            className=' flex justify-center items-center pt-5'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                        />

                    </div>

                    <div className=''>

                        <div>
                            <div className='md:flex lg:flex'>

                                <form onSubmit={handleSubmit(handlePostToDo)} className=' shadow-2xl rounded-3xl rounded-lg md:m-20 lg:m-20 m-4 p-7 md:p-16'>

                                    <p className=' text-lg lg:text-2xl md:text-2xl font-semibold uppercase border-b mb-5'>{format(date, 'PPPP')}</p>

                                    <div className='w-full grid justify-center mb-4'>
                                        <label className="flex items-end bg-inherit text-xl mb-2">Add a title here <span className='text-3xl pl-1'>⬎</span></label>
                                        <div className='flex justify-center'>
                                            <textarea type="text"
                                                className="bg-transparent w-[300px] md:w-[750px] h-16 border-r-[2.5px] border-l-[2.5px] border-b-[2.5px]  rounded-none outline-none p-3 text-2xl"
                                                {...register("title", {
                                                    required: {
                                                        value: true,
                                                        message: 'Please add a title.'
                                                    }
                                                })} />
                                        </div>
                                    </div>

                                    <div className='w-full grid justify-center my-5 md:my-16'>
                                        <label className="flex items-end bg-inherit text-xl mb-2 " >Write you content here <span className='text-3xl pl-1'>⬎</span></label>
                                        <div className='flex justify-center'>
                                            <textarea type="text"
                                                className="bg-transparent w-[300px] md:w-[750px] h-44 border-r-[2.5px] border-l-[2.5px]  border-b-[2.5px] rounded-none outline-none p-6 text-xl"
                                                {...register("content", {
                                                    required: {
                                                        value: true,
                                                        message: 'Please add you content.'
                                                    }
                                                })} />
                                        </div>
                                    </div>

                                    <div className="flex justify-center mb-5 md:my-2 mb-lg-2">
                                        <input type='submit' value='Add ToDo' className='text-2xl bg-base-100 rounded-lg hover:bg-gray-500 p-2 hover:text-white' />
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender
