import React from 'react';

const InteractionCard = () => {
    return (
        <div className=''>
            <div class="card w-72 border-b-4 rounded-none">
                <div class="card-body p-2 gap-0 mb-2 text-left">
                    <h2 class="card-title">Talk Ratio</h2>
                    <p className='text-xl font-bold'>11%</p>
                    <div class="card-actions justify-end">
                        <p>within recommended range</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractionCard;