import React from 'react';
import LeftSection from '../../components/LeftSection';
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
    return <LeftSection name='Filter'>
        {
            callItems.map(card => <CallItemCard key={card.id} card={card}></CallItemCard>)
        }
    </LeftSection>
};

export default CallItem;