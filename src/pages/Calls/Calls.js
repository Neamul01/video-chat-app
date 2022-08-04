import React from 'react';
import AllCalls from './AllCalls';
import CallItem from './CallItem';
import Contacts from './Contacts';

const Calls = () => {
    return (
        <div className='max-w-full bg-base-200 flex justify-center items-center'>
            <div className="max-w-full">
                <div className="hero-content grid grid-flow-col w-full relative">
                    {/* left side, interaction area  */}

                    <div className="flex flex-col">
                        <h2 className='text-3xl font-semibold text-left'>Calls</h2>
                        <CallItem></CallItem>
                    </div>

                    {/* middle side video conferance area  */}
                    <div className='video-call h-[85vh] w-[40vw] flex flex-col'>
                        <h2 className='text-3xl font-bold mb-4 text-left'>All Calls</h2>
                        <AllCalls></AllCalls>
                    </div>

                    {/* right side, chat area  */}
                    <Contacts></Contacts>
                </div>
            </div>
        </div>
    );
};

export default Calls;