import React from 'react';
import ContactCard from './ContactCard';

const Contacts = () => {
    const contacts = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className="group-chat border-2 h-[85vh] w-[20rem] overflow-y-scroll ">
            <div className="py-2 w-full border-4">
                <h2 className=' text-xl font-bold'>Contacts</h2>
            </div>
            {
                contacts.map((contact) => <ContactCard key={contact}></ContactCard>)
            }
        </div>
    );
};

export default Contacts;