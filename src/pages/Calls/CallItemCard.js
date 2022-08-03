import React from 'react';

const CallItemCard = ({ card }) => {
    const { name, Placeholder } = card
    return (
        <div className=''>
            <div className="card w-72 border-b-4 rounded-none">
                <div className="card-body p-1 gap-0 mb-2 text-left">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-end">
                        {
                            Placeholder === 'Select'
                                ?
                                <select class="bg-white rounded-md w-full  max-w-xs h-8">
                                    <option disabled selected>Select</option>
                                    <option>Homer</option>
                                    <option>Marge</option>
                                    <option>Bart</option>
                                    <option>Lisa</option>
                                    <option>Maggie</option>
                                </select>
                                :
                                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs h-8" />
                        }
                        <button className='p-2 bg-slate-700 text-white rounded-md max-h-8 text-center'>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallItemCard;