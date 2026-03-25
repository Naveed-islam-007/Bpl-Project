import React from 'react';
import Card from './Card';

const AvailablePlayers = ({ playerData,setCoin,coin,selectedPlayers,setselectedPlayers }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerData.map((player,ind) => (
                    <Card key={ind} playerData={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers}/>
                ))
            }
        </div>
    );
};

export default AvailablePlayers;