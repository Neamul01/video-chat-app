import React from 'react';
import ContactCard from './ContactCard';

const Contacts = () => {
    const contacts = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="group-chat border-2 h-[85vh] w-[20rem] overflow-y-scroll ">
            <div className="py-2 w-full border-4">
                <h2 className=' text-xl font-bold'>Contacts</h2>
            </div>
            <div className="grid grid-cols-8 gap-2 justify-center items-center w-full my-2">
                <div className="input-group col-span-5 relative">
                    <input type="text" placeholder="Search…" className="input input-bordered border-2 h-10 w-full" style={{ borderRadius: '2rem' }} />
                    <button className="absolute right-0 text-white bg-[#606060]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                <div className=' col-span-3'>
                    <div className='flex justify-center items-center float-right bg-white rounded-xl w-full'>
                        <small className=' border-r-2'>Sort By</small>
                        <select className="select w-full max-w-[3rem] min-h-[1rem] h-[2rem] p-0 leading-3">
                            <option>1x</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                </div>
            </div>
            {
                contacts.map((contact) => <ContactCard key={contact}></ContactCard>)
            }
        </div>
    );
};

export default Contacts;