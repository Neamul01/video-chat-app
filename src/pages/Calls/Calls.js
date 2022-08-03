import React from 'react';
import ChatSection from '../Home/ChatSection';
import InteractionSection from '../Home/InteractionSection';
import CallItem from './CallItem';

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
                    <div className='video-call h-[85vh] flex items-center'>
                        <h2 className='text-2xl font-semibold'>All Calls</h2>

                    </div>

                    {/* right side, chat area  */}
                    <ChatSection></ChatSection>
                </div>
            </div>
        </div>
    );
};

export default Calls;