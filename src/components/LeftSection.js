import React from 'react';

const LeftSection = ({ children, name, tipsBox }) => {
    return <div className="interaction-stats border-2 h-[85vh] max-w-[22rem] overflow-y-scroll">
        <div className="py-2 w-full bg-[#606060]">
            <h2 className='text-white text-xl font-bold'>{name}</h2>
        </div>
        {
            tipsBox && tipsBox
        }
        {children}
    </div>
};

export default LeftSection;