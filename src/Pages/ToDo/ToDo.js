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


    useEffect(() => {
        const myToDo = async () => {
            const email = user.email;
            const url = `https://limitless-dawn-15387.herokuapp.com/my-added-to-do?email=${email}`;

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


    const handleDeleteToDo = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://limitless-dawn-15387.herokuapp.com/delete-to-do/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = myToDo.filter(toDo => toDo._id !== id)
                    setMyToDo(remaining)
                });
        }
    };

    return (
        <div className=''>
                <div className='grid justify-center gap-y-4 py-16 px-6'>
                    {
                        [...myToDo].reverse().map(todo => <DisplayToDo
                            key={todo._id}
                            todo={todo}
                            handleDeleteToDo={handleDeleteToDo}
                        />)
                    }
                </div>

        </div>
    )
}

export default ToDo
