import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import DisplayCompletedTask from './DisplayCompletedTask';

function CompletedTasks() {
 
    const [completedTask, setCompletedTask] = useState([])
    console.log(completedTask);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    
    useEffect(() => {
        const getTasks = async () => {
            const email = user.email;
            const url = `https://limitless-dawn-15387.herokuapp.com/my-added-to-do?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setCompletedTask(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate("/login");
                }
            }
        };
        getTasks();
    }, [user]);


    const handleDeleteCompletedTasks = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `https://limitless-dawn-15387.herokuapp.com/delete-to-do/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = completedTask.filter(toDo => toDo._id !== id)
                    setCompletedTask(remaining)
                });
        }
    };
    
    return (
        <div>
            <div className='grid justify-center gap-y-4 py-16 px-6'>

               <p className='text-xl lg:text-3xl md:text-3xl font-semibold py-3'> Your completed tasks</p>
           {
               completedTask.map(tasks => <DisplayCompletedTask
               key={tasks._id}
               tasks={tasks}
               handleDeleteCompletedTasks={handleDeleteCompletedTasks}
               />)
           }
        </div>
        </div>
    )
}

export default CompletedTasks
