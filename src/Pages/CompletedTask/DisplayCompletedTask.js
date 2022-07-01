import React from 'react'

function DisplayCompletedTask({ tasks }) {

    const { date, title, content } = tasks

    return (
        <div>
            <div className='border-2 lg:border-4 md:border-4  rounded-xl lg:w-[900px] md:w-[700px] p-6'>

                <p className='font-bold tracking-wider text-lg pb-5'>{date }</p>

                <div className='pl-7 mb-3'>
                    <h1 className='text-xl md:text-2xl font-semibold'>{title }</h1>
                    <p className=''>{ content}</p>
                </div>

                <div className='pl-7 py-2 mt-8 flex items-center gap-x-5'>
                    <div class="flex gap-x-5">

                        {/* <button onClick={() => handleDeleteToDo(_id)}><RiDeleteBinLine className='text-2xl' /></button> */}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DisplayCompletedTask
