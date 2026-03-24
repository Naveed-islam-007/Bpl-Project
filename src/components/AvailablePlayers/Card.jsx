import React from 'react';

const Card = ({ playerData }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={playerData.playerImage}
                    alt={playerData.playerName}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{playerData.playerName}</h2>
                <div className='flex justify-between'>
                    <span>🌍 {playerData.playerCountry}</span>
                    <button className="btn btn-sm btn-outline">
                        {playerData.BattingStyle}
                    </button>
                </div>

                <div className="divider"></div>

                <div className='flex justify-between'>
                    <span className='font-bold'>Rating</span>
                    <span>{playerData.Rating}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='font-bold'>Player Type</span>
                    <span>{playerData.playerType}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='font-bold'>Bowling Style</span>
                    <span>{playerData.BowlingStyle}</span>
                </div>

                    
                <div className='flex justify-between'>
                    <span className='font-bold'>Batting Style</span>
                    <span>{playerData.BattingStyle}</span>
                </div>

                <div className="flex justify-between items-center mt-2">
                    <span className='font-bold text-lg'>${playerData.price.toLocaleString()}</span>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;