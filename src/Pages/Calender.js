import React from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react'
import { format } from 'date-fns';

function Calender() {

const [date, setDate]= useState(new Date())
    return (
        <div>
            <div className=" ">
                <div className="">
                    <div className=''>
                         <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            // footer={footer}
                        />
                        <p>You have selected: {format(date, 'PPPP')}.</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Calender
