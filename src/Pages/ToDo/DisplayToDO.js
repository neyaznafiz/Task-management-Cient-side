import React from 'react'

function DisplayToDo({ todo }) {

    const { date, title, content } = todo

    return (
        <div className=''>
            {/* <div className=''>
                <p>{date}</p>
                <p>{title}</p>
                <p>{content}</p>
            </div> */}

            <div className='border-2 lg:border-4 md:border-4  rounded-xl lg:w-[900px] md:w-[700px] p-6'>
                <p className='font-bold tracking-wider text-lg pb-5'>{date}</p>
                <div className='pl-7 mb-3'>
                    <h1  className='text-xl md:text-2xl font-semibold hover:text-[#05a962]'>{title}</h1>
                    <p className=''>{content}</p>
                </div>
                </div>
            </div>
            )
}

            export default DisplayToDo
