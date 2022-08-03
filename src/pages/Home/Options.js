import React, { useContext, useState } from 'react';
import { SocketContext } from '../../SocketContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, answerCall, call } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <div>
            <div className='flex'>
                <div className="input-group relative mt-2">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                    <CopyToClipboard text={me}>
                        <button className="btn btn-square btn-[#606060] absolute right-0 capitalize">
                            <small>Copy Your Id</small>
                        </button>
                    </CopyToClipboard>
                </div>
                <div className="input-group relative mt-2">
                    <input type="text" placeholder="Id to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                    {
                        callAccepted && !callEnded ? (
                            <button onClick={leaveCall} className="btn btn-circle rounded-r-3xl btn-danger capitalize absolute right-0 border-0 w-20" >
                                <small>hang up</small>
                            </button>
                        )
                            :
                            (
                                <button onClick={() => callUser(idToCall)} className="btn btn-circle rounded-r-3xl btn-[#606060] capitalize absolute right-0 border-0 w-20" >
                                    <small>call</small>
                                </button>
                            )
                    }
                </div>
            </div>

            {/* notification to answer call */}
            <div className='w-full border-2 mt-2'>
                {
                    call.isReceivedCall && !callAccepted && (
                        <div className='flex justify-center'>
                            <h1>{call.name} is calling</h1>
                            <button onClick={answerCall} className="btn btn-primary">
                                Answer
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Options;