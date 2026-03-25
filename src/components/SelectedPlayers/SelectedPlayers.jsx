import React from 'react';
import Players from '../Homepage/Players/Players';
import { Trash2 } from 'lucide-react';

const SelectedPlayers = ({selectedPlayers,setselectedPlayers, coin,setCoin}) => {

  const handledelete=(select)=>{
      const filttered=selectedPlayers.filter(selectedPlayer=>selectedPlayer.playerName!==select.playerName);
      setselectedPlayers(filttered)
      setCoin(coin+select.price);
  }


    return (
        <div>
            {
                selectedPlayers.map(select=>{
                    return(
                        <div className='flex items-center justify-between gap-6 p-10 rounded-2xl border my-3'>
                            <div className='flex gap-3'>
                                <img src={select.playerImage} alt="" className='h-[200px] w-auto' />
                            <div>
                                <h2 className='text-6xl font-bold mb-3'>{select.playerName}</h2>
                                <p className='text-3xl font-semibold'>
                                    {select.playerType}
                                </p>
                            </div>
                            </div>
                          <div onClick={()=>handledelete(select)}> 
                            <Trash2></Trash2>
                          </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default SelectedPlayers;