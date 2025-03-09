import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData] = useContext(AuthContext);
    
    return (
        <div className='bg-gray-900 p-6 rounded-lg mt-5 shadow-md'>
            <div className='bg-red-500 text-white py-3 px-5 flex justify-between rounded-lg font-semibold shadow-lg animate-pulse'>
                <h2 className='w-1/5 text-center'>Employee</h2>
                <h3 className='w-1/5 text-center'>New</h3>
                <h5 className='w-1/5 text-center'>Active</h5>
                <h5 className='w-1/5 text-center'>Completed</h5>
                <h5 className='w-1/5 text-center'>Failed</h5>
            </div>
            <div className='mt-3 space-y-2'>
                {userData.map((elem, idx) => (
                    <div 
                        key={idx} 
                        className='bg-gray-800 text-white py-2 px-5 flex justify-between rounded-lg shadow-md hover:shadow-red-500/50 transition-shadow duration-300'>
                        <h2 className='w-1/5 text-center'>{elem.firstName}</h2>
                        <h3 className='w-1/5 text-center'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 text-center'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 text-center'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 text-center'>{elem.taskCounts.failed}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllTask;



