import React from 'react'

function Footer() {
    return (
        <div className='bg-base-100'>
            <div>
                <p className='text-center p-10 text-xl'>Copyright © {(new Date().getFullYear())} - All right reserved by Daily To-Do.</p>
            </div>
        </div>
    )
}

export default Footer
