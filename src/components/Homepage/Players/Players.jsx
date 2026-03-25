import React, { use, useState } from 'react';
import AvailablePlayers from '../../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../../SelectedPlayers/SelectedPlayers';

const Players = ({playerPromise, setCoin, coin}) => {
    const playerData = use(playerPromise)
    const [selectedType, setselectedType] = useState("Available")
    const [selectedPlayers, setselectedPlayers] = useState([])  // ✅ fixed
   
    return (
        <div className='container mx-auto'>
          <div className='flex justify-between my-5'>
           {selectedType === "Available" ? 
             <h2 className='text-bold text-5xl'>Available: {playerData.length}</h2> : 
             <h2 className='text-bold text-5xl'>Selected Players({selectedPlayers.length}/{playerData.length})</h2>}
            <div>
                <button onClick={() => setselectedType("Available")} 
                  className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" : "btn-outline"}`}>  {/* ✅ fixed */}
                  Available
                </button>
                <button onClick={() => setselectedType("Selected")} 
                  className={`btn ${selectedType === "Selected" ? "bg-[#E7FE29]" : "btn-outline"}`}>  {/* ✅ fixed */}
                  Selected({selectedPlayers.length})
                </button>
            </div>
          </div>
          {selectedType === "Available" ? 
            <AvailablePlayers playerData={playerData} setCoin={setCoin}
              coin={coin} selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers}/> :
            <SelectedPlayers selectedPlayers={selectedPlayers} setselectedPlayers={setselectedPlayers} coin={coin} setCoin={setCoin} />}
        </div>
    );
};

export default Players;