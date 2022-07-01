import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function DisplayToDo({ todo, handleDeleteToDo }) {

    const { _id, email, date, title, content } = todo

    const [done, setDone] = useState(false)

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`${_id}`)
    }

    // const formatedDate = format(date, 'PPPP')

    const handlePostToDo = data => {

        const toDoInputForCompleted = {
            id: _id,
            email: email,
            date: date,
            title: title,
            content: content
        }

        // axios.post('https://limitless-dawn-15387.herokuapp.com/completed-todo', toDoInputForCompleted)
        //     .then(res => {
        //         const { data } = res
        //         if (data?.insertedId) {
        //             toast.success('Your To-Do added in completed task page successfully.')

        //         }
        //         else {
        //             toast.error('Faild to added your To-Do in completed taks. Please try again.')
        //         }
        //     })


        fetch(`https://limitless-dawn-15387.herokuapp.com/completed-todo`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toDoInputForCompleted)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Your service successfully addeded.')
            })
    }




    return (
        <div className=''>

            <div className='border-2 lg:border-4 md:border-4  rounded-xl lg:w-[900px] md:w-[700px] p-6'>

                <div className='flex justify-between'>
                    <p className='font-bold tracking-wider text-lg pb-5'>{date}</p>
                    <p onClick={() => navigateToUpdate(_id)} className='flex gap-x-2 text-md hover:scale-110'><FaRegEdit className='text-2xl' /></p>
                </div>
                <div className='pl-7 mb-3'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
                    <p className=''>{content}</p>
                </div>

                <div className='pl-7 py-2 mt-8 flex items-center gap-x-5'>
                    <div class="flex gap-x-5">

                        <input onClick={() => handlePostToDo(setDone(!done))} type="checkbox" name="done" className='w-5 h-5 rounded-full' />

                        <button onClick={() => handleDeleteToDo(_id)}><RiDeleteBinLine className='text-2xl' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayToDo
