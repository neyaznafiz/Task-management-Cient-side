import React from 'react'
import { FaRegEdit, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function DisplayToDo({ todo }) {

    const {_id, date, title, content } = todo

    const navigate = useNavigate()
    const navigateToUpdate = id => {
        navigate(`${_id}`)
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

                <div className='pl-7 py-2 mt-8 flex gap-x-5'>
                    <div class="form-control">
                        <label class="label cursor-pointer">
                            <input type="checkbox" checked="checked" class="checkbox" />
                        </label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayToDo
