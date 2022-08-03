import React from 'react';
import meetIcon from '../../assets/google_meet.png'
import { AiFillStepForward } from 'react-icons/ai';
import { AiFillStepBackward } from 'react-icons/ai';
import { BsFillPauseCircleFill } from 'react-icons/bs';

const Player = () => {
    return (
        <div className="p-2 w-full bg-[#606060] rounded-3xl absolute bottom-2 max-w-[51rem] left-4">
            <div className="grid grid-cols-12 items-center py-4 ">
                <div className=' text-white col-span-3 flex justify-center items-center border-white'>
                    <img src={meetIcon} alt="Zoom Icon" className='w-10' /><small>Client Video Call Recording</small>
                </div>
                <div className='col-span-8 border-r-2 border-l-2 ml-2 px-2'>
                    <div className='flex justify-between'>
                        <button className="btn btn-base-100 btn-sm capitalize"><small>Video</small></button>
                        <p className="video-controls flex text-white">
                            <AiFillStepBackward className='w-8 text-2xl' /> <BsFillPauseCircleFill className='w-8 text-2xl' /> <AiFillStepForward className='w-8 text-2xl' />
                        </p>
                        <button className="btn btn-base-100 btn-sm capitalize"><small>Transcript</small></button>
                    </div>
                    <div>
                        <input type="range" min="0" max="100" value="40" className="range h-2" />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-20 float-right'>
                    <small className='text-white'>Speed</small>
                    <select className="select w-full max-w-[3rem] min-h-[1rem] h-[1.5rem] p-0 leading-3">
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
    );
};

export default Player;