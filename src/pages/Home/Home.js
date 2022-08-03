import React from 'react';
import InteractionCard from './InteractionCard';

const Home = () => {
    const cards = [1, 2, 3, 4, 5, 6];
    return (
        <div className='max-w-full bg-base-200 flex justify-center items-center'>
            <div class="max-w-full">
                <div class="hero-content grid grid-flow-col w-full">
                    {/* left side interaction area  */}
                    <div className="interaction-stats border-2 max-h-[85vh] max-w-[22rem] overflow-y-scroll">
                        <div className="py-2 w-full bg-[#606060]">
                            <h2 className='text-white text-xl font-bold'>Interaction Stats</h2>
                        </div>
                        <div className="py-2 m-2 p-2 text-left border-4 rounded-full">
                            <small className='font-bold'>1 tip for Employee.</small>
                        </div>
                        {
                            cards.map(card => <InteractionCard></InteractionCard>)
                        }
                    </div>
                    {/* middle side video conferance area  */}
                    <div className='video-call'>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    {/* right side chat area  */}
                    <div className="group-chat border-2 max-h-[90vh] max-w-[22rem] overflow-y-scroll ">
                        <div className="py-2 w-full bg-[#606060]">
                            <h2 className='text-white text-xl font-bold'>Group Chats</h2>
                        </div>
                        <div className="input-group relative mt-2">
                            <input type="text" placeholder="Search…" className="input input-bordered p-4 w-full border-4" style={{ borderRadius: '2rem' }} />
                            <button className="btn btn-square btn-ghost absolute right-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                        <div className="h-[45vh] text-left p-4  overflow-y-scroll">
                            <div className="flex items-start m-2">
                                <div class="avatar mr-2 mt-4">
                                    <div class="w-8  rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='bg-base-100 p-4 rounded-t-3xl rounded-r-3xl'>
                                    <p className=''>hello this is testing here are some new text. lets check this.Not onlu check this is double check</p>
                                </div>
                            </div>
                            <div className="flex flex-row-reverse items-start m-2">
                                <div class="avatar ml-2 mt-4">
                                    <div class="w-8  rounded-full">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className='bg-base-100 p-4 rounded-t-3xl rounded-l-3xl'>
                                    <p className=''>hello this is testing here are some new text. lets check this</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <textarea type="text" className='h-24  p-2 m-2 rounded-lg' placeholder='Message...' />
                            <div className=' flex justify-end'>
                                <button className="btn btn-sm float-right">send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;