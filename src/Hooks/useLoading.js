import React, { useEffect, useState } from 'react';

const useLoading = () => {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3200);
    }, [])

    return [loading, setLoading]
};

export default useLoading;