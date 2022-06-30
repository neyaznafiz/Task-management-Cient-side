import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading';
import auth from '../Firebase/firebase.init';

function PrivateRoute() {

    const [user, loading] = useAuthState(auth);

    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/signin' state={{ from: location }}
            replace ></Navigate>
    }

    return <Outlet />

}

export default PrivateRoute