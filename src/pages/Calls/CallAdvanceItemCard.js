import React from 'react';

const CallAdvanceItemCard = ({ item }) => {
    return (
        <div className='px-2 pr-4'>
            <select class=" select-ghost rounded-md w-full  max-w-xs h-8 outline-none">
                <option disabled selected className='font-bold'>{item.name}</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
        </div>
    );
};

export default CallAdvanceItemCard;