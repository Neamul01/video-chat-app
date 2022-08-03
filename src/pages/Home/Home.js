import React from 'react';
import ChatSection from './ChatSection';
import InteractionSection from './InteractionSection';
import VideoImg from '../../assets/video-conferance.png'
import Player from './Player';

const Home = () => {

    return (
        <div className='max-w-full bg-base-200 flex justify-center items-center'>
            <div className="max-w-full">
                <div className="hero-content grid grid-flow-col w-full relative">
                    {/* left side, interaction area  */}
                    <InteractionSection></InteractionSection>

                    {/* middle side video conferance area  */}
                    <div className='video-call h-[85vh] flex items-center'>
                        <div className=''>
                            <div className='w-[483px] h-[396px]'>
                                <img src={VideoImg} className='max-w-full' alt="video chat alternative" />
                            </div>
                            <div className='flex'>
                                <div className="input-group relative mt-2">
                                    <input type="text" placeholder="Search…" className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                                    <button className="btn btn-square btn-[#606060] absolute right-0">
                                        add
                                    </button>
                                </div>
                                <div className="input-group relative mt-2">
                                    <input type="text" placeholder="Search…" className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                                    <button className="btn btn-circle rounded-r-3xl btn-[#606060] capitalize absolute right-0 border-0 w-20" >
                                        <small>Copy Link to clipboard</small>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <Player /> */}
                    </div>

                    {/* right side, chat area  */}
                    <ChatSection></ChatSection>
                </div>
            </div>
        </div>
    );
};

export default Home;