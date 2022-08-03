import React from 'react';
import InteractionCard from './InteractionCard';

const InteractionSection = () => {
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
    return (
        <div className="interaction-stats border-2 max-h-[85vh] max-w-[22rem] overflow-y-scroll">
            <div className="py-2 w-full bg-[#606060]">
                <h2 className='text-white text-xl font-bold'>Interaction Stats</h2>
            </div>
            <div className="py-2 m-2 p-2 text-left border-4 rounded-full">
                <small className='font-bold'>1 tip for Employee.</small>
            </div>
            {
                cards.map(card => <InteractionCard key={card.id} card={card}></InteractionCard>)
            }
        </div>
    );
};

export default InteractionSection;