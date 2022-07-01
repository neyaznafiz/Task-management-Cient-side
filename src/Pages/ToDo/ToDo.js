import axios from 'axios'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../Firebase/firebase.init'
import DisplayToDo from './DisplayToDO'

function ToDo() {

    const [myToDo, setMyToDo] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    // const [allTodo, setAllTodo] = useState([])
    // console.log(allTodo);

    // const {date, title, content} = allTodo

    // useEffect(() => {
    //     if (user) {
    //         axios.get(`http://localhost:5000/alltodo`)
    //             .then(res => {
    //                 const { data } = res
    //                 setAllTodo(data)
    //             })
    //     }
    // }, [])

    useEffect(() => {
        const myToDo = async () => {
          const email = user.email;
          const url = `http://localhost:5000/my-added-to-do?email=${email}`;
    
          try {
            const { data } = await axios.get(url, {
              headers: {
                authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            setMyToDo(data);
          } catch (error) {
            console.log(error.message);
            if (error.response.status === 401 || error.response.status === 403) {
              signOut(auth);
              navigate("/login");
            }
          }
        };
        myToDo();
      }, [user]);
  

    return (
        <div className=''>
            <div className='grid justify-center gap-y-4 py-16 px-6'>
                {
                    myToDo.map(todo => <DisplayToDo 
                    key={todo._id}
                    todo={todo}
                    />)
                }
            </div>

        </div>
    )
}

export default ToDo
