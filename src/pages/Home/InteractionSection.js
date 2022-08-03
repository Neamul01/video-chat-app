import React from 'react';
import InteractionCard from './InteractionCard';

const InteractionSection = () => {
    const cards = [1, 2, 3, 4, 5];
    return (
        <div className="interaction-stats border-2 max-h-[85vh] max-w-[22rem] overflow-y-scroll">
            <div className="py-2 w-full bg-[#606060]">
                <h2 className='text-white text-xl font-bold'>Interaction Stats</h2>
            </div>
            <div className="py-2 m-2 p-2 text-left border-4 rounded-full">
                <small className='font-bold'>1 tip for Employee.</small>
            </div>
            {
                cards.map(card => <InteractionCard></InteractionCard>)
            }
        </div>
    );
};

export default InteractionSection;