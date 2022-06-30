import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Firebase/firebase.init'
import DisplayToDo from './DisplayToDO'

function ToDo() {

    // const [myToDo, setMyToDo] = useState([])
    const [user] = useAuthState(auth)

    // useEffect(() => {
    //    if(user){
    //     axios.get(`http://localhost:5000/tasks?email=${user.email}`)
    //     .then(res => {
    //         const { data } = res
    //         setMyToDo(data)
    //     })
    //    }
    // }, [user])

    const [allTodo, setAllTodo] = useState([])
    console.log(allTodo);

    // const {date, title, content} = allTodo

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/alltodo`)
                .then(res => {
                    const { data } = res
                    setAllTodo(data)
                })
        }
    }, [])

    return (
        <div className=''>
            <div className='grid justify-center gap-y-4 py-16 px-6'>
                {
                    allTodo.map(todo => <DisplayToDo 
                    key={todo._id}
                    todo={todo}
                    />)
                }
            </div>

        </div>
    )
}

export default ToDo
