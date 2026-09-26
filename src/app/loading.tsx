import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center my-20'> 
            <h2>Loading...</h2>
            <span className="loading loading-spinner text-warning"></span>
        </div>
    );
};

export default loading;