import React from 'react';
import LeftSection from '../../components/LeftSection';
import CallAdvanceItemCard from './CallAdvanceItemCard';
import CallItemCard from './CallItemCard';

const CallItem = () => {
    const callItems = [
        {
            "id": '1',
            'name': 'Call Participants',
            'Placeholder': 'Search for team members',
        },
        {
            "id": '2',
            'name': 'Company Name',
            'Placeholder': 'Type for search',
        },
        {
            "id": '3',
            'name': 'Words',
            'Placeholder': 'Search for words',
        },
        {
            "id": '4',
            'name': 'Trackers',
            'Placeholder': 'Select',
        },
        {
            "id": '5',
            'name': 'Smart Trackers',
            'Placeholder': 'Select',
        }
    ];
    const AdvanceItems = [
        {
            "id": '1',
            'name': 'Basic Details',
        },
        {
            "id": '2',
            'name': 'CRM',
        },
        {
            "id": '3',
            'name': 'Questions',
        },
        {
            "id": '4',
            'name': 'Interaction',
        },
        {
            "id": '5',
            'name': 'Video',
        }
    ];

    return <>
        <LeftSection name='Filter'>
            <>
                {
                    callItems.map(card => <CallItemCard key={card.id} card={card}></CallItemCard>)
                }
                <p className='text-left text-sm font-bold my-2'> &gt;Advanced</p>
                {
                    AdvanceItems.map(advance => <CallAdvanceItemCard key={advance.key} item={advance}></CallAdvanceItemCard>)
                }
            </>
        </LeftSection>
    </>
};

export default CallItem;