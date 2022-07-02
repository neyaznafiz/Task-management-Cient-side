import axios from 'axios';
import { format } from 'date-fns';
import { reload } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function DisplayToDo({ todo, handleDeleteToDo }) {

    const { _id, email, date, title, content, } = todo
    console.log(todo?.role);


    // navigation for edit the ToDo
    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`${_id}`)
    }


    // function for add completed role
    const addCompleted = () => {

        fetch(`https://limitless-dawn-15387.herokuapp.com/tasks/completed/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to add completed.')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    
                    toast.success('Successfully add completed')
                }
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

                        {!todo?.role ?
                            <input type="radio" name="radio-5" onClick={addCompleted} class="radio" />
                            :
                            <p className='font-semibold text-lg text-green-600'> ✔ Completed</p>
                        }

                        <button onClick={() => handleDeleteToDo(_id)}><RiDeleteBinLine className='text-2xl' /></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayToDo
