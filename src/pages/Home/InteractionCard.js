import React from 'react';

const InteractionCard = ({ card }) => {
    const { name, interaction, range } = card;
    return (
        <div className=''>
            <div className="card w-72 border-b-4 rounded-none">
                <div className="card-body p-2 gap-0 mb-2 text-left">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-bold'>{interaction}</p>
                    <div className="card-actions justify-end">
                        <p>{range}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractionCard;