import React from 'react';
import dollarImg from '../../assets/dollar_1.png'
import logoImg from '../../assets/logo.png'
const Navbar = ({coin}) => {
    return (
        <div>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
   <img src={logoImg} alt="" />
  </div>
  <div class="flex items-center gap-2 font-bold text-xl">
    {coin} Coins
    <img src={dollarImg} alt="" />
  </div>
</div>
        </div>
    );
};

export default Navbar;