import React, { useContext } from 'react';
import { SocketContext } from '../../SocketContext';
// import VideoImg from '../../assets/video-conferance.png'

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, usersVideo, callEnded, stream, call } = useContext(SocketContext)
    return (
        <div className='w-[483px] h-[396px]'>
            {/* <img src={VideoImg} className='max-w-full' alt="video chat alternative" /> */}
            {/* our own video  */}
            <div className='w-full'>
                <input type="text" defaultValue={name || ''} placeholder='Your Name' />
                <video playsInline muted ref={myVideo} autoPlay className='w-[480px]' />
            </div>
            {/* users video  */}
            <div className='w-full'>
                <input type="text" placeholder='Your Name' />
                <video playsInline muted ref={usersVideo} autoPlay className='w-[480px]' />
            </div>
        </div>
    );
};

export default VideoPlayer;