import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function UpdateToDo() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm()

    const { ID } = useParams()
    const [singleToDo, setSingleToDo] = useState({})
    const { title, content } = singleToDo

    useEffect(() => {

        axios.get(`http://localhost:5000/todo-by-id/${ID}`)
            .then(res => {
                const { data } = res
                setSingleToDo(data)
            })
    }, [ID])


    const handleUpdateToDo = data => {

        const toDoInputForUpdate = {
            title: data.title,
            content: data.content
        }

        // axios.put('http://localhost:5000/update-todo', toDoInputForUpdate)
        //     .then(res => {
        //         const { data } = res
        //         if (data?.insertedId) {
        //             toast.success('Your To-Do updated successfully.')
        //             reset()
        //         }
        //         else {
        //             toast.error('Faild to update your To-Do. Please try again.')
        //         }
        //     })

        fetch('http://localhost:5000/update-todo', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toDoInputForUpdate)
        })
            .then(res => res.json())
            .then(data=>{
                toast.success('Your To-Do updated successfully.')
            })
    }

    return (
        <div>
            <div>
                <div className='md:flex lg:flex justify-center'>

                    <form onSubmit={handleSubmit(handleUpdateToDo)} className=' shadow-2xl rounded-3xl rounded-lg md:m-20 lg:m-20 m-4 p-7 md:p-16'>

                        <p className='text-2xl mb-9 font-semibold border-b'>Update Your To-Do Here.</p>


                        <div className='w-full grid justify-center mb-4'>
                            <label className="flex items-end bg-inherit text-xl mb-2">Update the title here <span className='text-3xl pl-1'>⬎</span></label>
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
                            <label className="flex items-end bg-inherit text-xl mb-2 " >Update you content here <span className='text-3xl pl-1'>⬎</span></label>
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
                            <button className='text-2xl bg-base-100 rounded-lg hover:bg-gray-500 p-2 hover:text-white'>Update ToDo</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateToDo
