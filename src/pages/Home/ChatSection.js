import React, { useContext, useEffect, useState } from 'react';
import { socket, SocketContext } from '../../SocketContext';


const ChatSection = () => {
    const { name } = useContext(SocketContext);
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (!currentMessage) {
            const messageData = {
                author: name,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).Minutes(),
            };

            await socket.emit('send_message', messageData)
            setMessageList((list) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [])

    return (
        <div className="group-chat border-2 max-h-[90vh] max-w-[22rem] overflow-y-scroll ">
            <div className="py-2 w-full bg-[#606060]">
                <h2 className='text-white text-xl font-bold'>Group Chats</h2>
            </div>

            {/* search bar  */}
            <div className="input-group relative mt-2">
                <input type="text" placeholder="Search…" className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                <button className="btn btn-square btn-ghost absolute right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>

            {/* message area  */}
            <div className="h-[45vh] text-left p-4  overflow-y-scroll">
                {
                    messageList.map((messageContent) => {
                        return <div className={name === messageContent.author ? "flex flex-row-reverse items-start m-2" : "flex items-start m-2"}>
                            <div className="avatar ml-2 mt-4">
                                <div className="w-8  rounded-full">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className='bg-base-100 p-4 rounded-t-3xl rounded-l-3xl'>
                                <p className='text-sm'>{messageContent.message}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            {/* send button  */}
            <div className='flex flex-col'>
                <textarea type="text" onChange={(e) => setCurrentMessage(e.target.value)} className='h-24  p-2 m-2 rounded-lg' placeholder='Message...' />
                <div className=' flex justify-end'>
                    <button onClick={sendMessage} className="btn btn-sm float-right">send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatSection;