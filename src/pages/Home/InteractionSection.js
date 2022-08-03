import React from 'react';
import LeftSection from '../../components/LeftSection';
import InteractionCard from './InteractionCard';

const InteractionSection = ({ children }) => {
    const cards = [
        {
            "id": '1',
            'name': 'Talk Ration',
            'interaction': '11%',
            'range': 'Within recommended range'
        },
        {
            "id": '2',
            'name': 'Longest Monogolue',
            'interaction': '2:09min',
            'range': 'Within recommended range'
        },
        {
            "id": '3',
            'name': 'Longest Customer Story',
            'interaction': '4:04min',
            'range': 'Within recommended range'
        },
        {
            "id": '4',
            'name': 'Interactivity',
            'interaction': '2.7',
            'range': 'Bellow recommended range'
        },
        {
            "id": '5',
            'name': 'Patience',
            'interaction': '1.29 sec',
            'range': 'Within recommended range'
        }
    ];
    return <LeftSection name='Interaction Stats'>
        {
            cards.map(card => <InteractionCard key={card.id} card={card}></InteractionCard>)
        }
    </LeftSection>
};

export default InteractionSection;