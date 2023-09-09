'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
    const router = useRouter()

    const [formValues, SetFormValue] = useState({
        email: 'mdsrrumon1234@gmail.com',
        password: '9090'
    });

    const handleChange = (name, value) => {

        SetFormValue({ ...formValues, [name]: value })
    }



    const handaleSubmit = async (e) => {
        e.preventDefault();
        const config = { method: 'POST', body: JSON.stringify(formValues) }
        const response = await fetch("/api/login", config);
        const json = await response.json();

        if (json['status'] === true) {
            router.replace("/dashboard")
        }
        else {
            alert(json['message'])
        }


    }

    return (
        <div>
            <h1 className="text-green-500 font-bold mx-80 underline mt-20 text-3xl">Loging Page</h1>
            <form className='mt-40 w-96 mx-80' onSubmit={handaleSubmit}>
                <input className='text-green-800 w-72 rounded' value={formValues.email} onChange={(e) => { handleChange('email', e.target.value) }} placeholder='email' />
                <br />
                <br />
                <input className='text-green-800 w-72 rounded' value={formValues.password} onChange={(e) => { handleChange('password', e.target.value) }} placeholder='password' />
                <br />
                <button className='text-red-400 text-xl font-bold mt-5  bg-green-400 rounded-lg w-72' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default page;