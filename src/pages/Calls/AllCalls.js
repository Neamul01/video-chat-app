import React from 'react';
import AllCallCard from './AllCallCard';

const AllCalls = () => {
    const allCalls = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div>
            {
                allCalls.map((call) => <AllCallCard key={call}></AllCallCard>)
            }
        </div>
    );
};

export default AllCalls;