import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import DisplayCompletedTask from './DisplayCompletedTask';

function CompletedTasks() {

    const [completedTask, setCompletedTask] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const completedTask = async () => {
            const email = user.email;

            try {
                const { data } = await axios.get(`https://limitless-dawn-15387.herokuapp.com/completedtask?email=${email}`, {
                    headers: {
                        authorization: ` Bearer ${localStorage.getItem("accessToken")}`,
                    },
                });
                setCompletedTask(data);
            } catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    Navigate("/login");
                }
            }
        };
        completedTask();
    }, [user]);

    return (
        <div>
            {
                completedTask.map(tasks => <DisplayCompletedTask
                    key={tasks._id}
                    tasks={tasks}
                />)
            }
        </div>
    )
}

export default CompletedTasks
