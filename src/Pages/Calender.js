import React from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react'
import { format } from 'date-fns';

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

    return (
        <div>
            <div className=" ">
                <div className="flex">
                    <div className='m-6 md:m-16 p-5 w-80 shadow-2xl rounded-xl'>
                        <style>{css}</style>
                        <DayPicker
                            className='flex justify-center items-center pt-5'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            modifiersClassNames={{
                                selected: 'my-selected',
                                today: 'my-today'
                            }}
                        />
                        <p className='m-7 text-md font-semibold uppercase text-center'>{format(date, 'PPPP')}</p>
                    </div>

                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calender
