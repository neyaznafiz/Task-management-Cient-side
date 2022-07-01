import axios from 'axios';
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function DisplayToDo({ todo, handleDeleteToDo  }) {

    const {_id, date, title, content } = todo

    const [done, setDone] = useState(false)

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`${_id}`)
    }

    const handlePostToDo = data => {

        // const toDoInput = {
        //     email: user.email,
        //     date: formatedDate,
        //     title: data.title,
        //     content: data.content
        // }

        axios.post('http://localhost:5000/post-todo', )
            .then(res => {
                const { data } = res
                if (data?.insertedId) {
                    toast.success('Your To-Do added successfully.')
                    
                }
                else {
                    toast.error('Faild to added your To-Do. Please try again.')
                }
            })
    }


    return (
        <div className=''>
          
            <div className='border-2 lg:border-4 md:border-4  rounded-xl lg:w-[900px] md:w-[700px] p-6'>

                <div className='flex justify-between'>
                    <p className='font-bold tracking-wider text-lg pb-5'>{date}</p>
                    <p onClick={()=> navigateToUpdate(_id)} className='flex gap-x-2 text-md hover:scale-110'><FaRegEdit className='text-2xl' /></p>
                </div>
                <div className='pl-7 mb-3'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{title}</h1>
                    <p className=''>{content}</p>
                </div>

                <div className='pl-7 py-2 mt-8 flex items-center gap-x-5'>
                    <div class="flex gap-x-5">
                           <form className='mt-2'>
                           <input onClick={() => setDone(!done)} type="checkbox" name="done" className='w-5 h-5 rounded-full' />
                           </form>
                            <button onClick={()=>handleDeleteToDo(_id)}><RiDeleteBinLine className='text-2xl'/></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayToDo
