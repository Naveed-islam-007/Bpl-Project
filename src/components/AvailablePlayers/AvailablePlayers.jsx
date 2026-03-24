import React from 'react';
import Card from './Card';

const AvailablePlayers = ({ playerData }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerData.map((player) => (
                    <Card playerData={player} />
                ))
            }
        </div>
    );
};

export default AvailablePlayers;