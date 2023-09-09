'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
    const router = useRouter()
    const Logout = async () => {
        const res = await fetch('/api/login');
        const json = await res.json();
        if (json['status'] === true) {
            router.replace('/');
        }

    }
    return (
        <div className='mt-40 w-96 mx-72'>
            <h1 className="text-red-500 text-3xl"> Deashboard Commoing Soon..</h1>
            <button className='text-red-400 text-xl font-bold  bg-green-400 rounded-lg w-72 mt-20' onClick={Logout}>Logout</button>
        </div>
    );
};

export default page;