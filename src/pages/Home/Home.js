import React from 'react';
import ChatSection from './ChatSection';
import InteractionSection from './InteractionSection';
import VideoImg from '../../assets/video-conferance.png'

const Home = () => {

    return (
        <div className='max-w-full bg-base-200 flex justify-center items-center'>
            <div class="max-w-full">
                <div class="hero-content grid grid-flow-col w-full relative">
                    {/* left side interaction area  */}
                    <InteractionSection></InteractionSection>

                    {/* middle side video conferance area  */}
                    <div className='video-call h-[85vh] flex items-center'>
                        <div className=''>
                            <img src={VideoImg} alt="" />
                        </div>
                        <div className="p-2 w-full bg-[#606060] rounded-3xl absolute bottom-2 max-w-[51rem] left-4">
                            <div className="grid grid-cols-12 items-center py-4 ">
                                <div className=' text-white col-span-4'>
                                    <small>Client Video Call Recording</small>
                                </div>
                                <div className='col-span-7'>
                                    <div className='flex justify-between'>
                                        <button className="btn btn-base-100 btn-sm capitalize"><small>Video</small></button>
                                        <p className="video-controls"></p>
                                        <button className="btn btn-base-100 btn-sm capitalize"><small>Transcript</small></button>
                                    </div>
                                    <div>
                                        <span>&#5107B;</span>
                                        <input type="range" min="0" max="100" value="40" class="range h-2" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center w-20 float-right'>
                                    <small className='text-white'>Speed</small>
                                    <select class="select w-full max-w-[3rem] min-h-[1rem] h-[1.5rem] p-0 leading-3">
                                        <option selected>1x</option>
                                        <option>Homer</option>
                                        <option>Marge</option>
                                        <option>Bart</option>
                                        <option>Lisa</option>
                                        <option>Maggie</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side chat area  */}
                    <ChatSection></ChatSection>
                </div>
            </div>
        </div>
    );
};

export default Home;