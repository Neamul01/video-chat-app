import React from 'react';

const LeftSection = ({ children, name }) => {
    return <div className="interaction-stats border-2 max-h-[85vh] max-w-[22rem] overflow-y-scroll">
        <div className="py-2 w-full bg-[#606060]">
            <h2 className='text-white text-xl font-bold'>{name}</h2>
        </div>
        <div className="py-2 m-2 p-2 text-left border-4 rounded-full">
            <small className='font-bold'>1 tip for Employee.</small>
        </div>
        {children}
    </div>
};

export default LeftSection;