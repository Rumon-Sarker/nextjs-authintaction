import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div >
      <h1 className="text-red-500 mx-80 underline mt-20 text-3xl">Home Page</h1>
      <button className='text-red-400 mx-80 text-3xl font-bold mt-56  bg-green-400 rounded-lg w-72'><Link href='/login' >Login</Link></button>
    </div >
  );
};

export default page;