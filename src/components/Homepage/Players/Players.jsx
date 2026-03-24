import React, { use } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';

const Players = ({playerPromise}) => {
    const playerData=use(playerPromise)
   
    return (
        <div className='container mx-auto '> 
           <h2 className='text-6xl my-5'>Players:{playerData.length}</h2> 
           <AvailablePlayers playerData={playerData}></AvailablePlayers>
        </div>
    );
};

export default Players;