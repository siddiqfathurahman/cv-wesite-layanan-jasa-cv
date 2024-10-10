import React from 'react';

const Get = ({ title, price, onOpenModal }) => (
    <div className='flex flex-col md:flex-row items-center justify-between mx-4 md:mx-14 p-4 rounded-lg'>
        <h1 className='text-lg md:text-2xl font-medium text-green-900'>{title}</h1>
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
            <h2 className='text-lg md:text-xl text-green-900 md:mr-56'>{price}</h2>
            <button 
                className="mt-2 md:mt-0 py-2 md:py-3 items-center justify-center border-2 md:border-4 hover:bg-green-600 hover:text-white px-8 md:px-16 text-green-900 border border-green-600"
                onClick={onOpenModal}
            >
                Order CV
            </button>
        </div>
    </div>
);

export default Get;
