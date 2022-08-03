import React from 'react';
import ChatSection from './ChatSection';
import InteractionSection from './InteractionSection';
import Options from './Options';
import VideoPlayer from './VideoPlayer';
import Player from './Player'

const Home = () => {

    return (
        <div className='max-w-full bg-base-200 flex justify-center items-center'>
            <div className="max-w-full">
                <div className="hero-content grid grid-flow-col w-full relative">
                    {/* left side, interaction area  */}
                    <InteractionSection></InteractionSection>

                    {/* middle side video conferance area  */}
                    <div className='video-call h-[85vh] flex'>
                        <div className=''>
                            {/* video player for video call  */}
                            <VideoPlayer />

                            {/* options for video call */}
                            <Options />
                        </div>

                        {/* video/audio player controls  */}
                        <Player />
                    </div>

                    {/* right side, chat area  */}
                    <ChatSection></ChatSection>
                </div>
            </div>
        </div>
    );
};

export default Home;