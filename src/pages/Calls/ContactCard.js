import React from 'react';

const ContactCard = () => {
    return (
        <div className='flex items-center  border-2 rounded-md m-2'>
            <div class="avatar">
                <div class="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
            <div className="py-0 m-2 p-2 text-left">
                <p className='text-xl font-bold'>ABC</p>
                <small className='font-bold'>a minute ago</small>
            </div>
        </div>
    );
};

export default ContactCard;