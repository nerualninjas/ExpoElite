import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='min-h-screen  text-center my-auto content-center items-center'>
            <div className='py-52 space-y-2'>
                <h2>Page Not Found</h2>
                <p>sorry , the page not found</p>
                <Link className='btn btn-primary' href="/">Go Home</Link>

            </div>
        </div>
    );
};

export default NotFound;