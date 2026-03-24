import React from 'react';
import dollarImg from '../../assets/dollar_1.png'
const Navbar = () => {
    return (
        <div>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex items-center gap-2 font-bold text-xl">
    0 Coins
    <img src={dollarImg} alt="" />
  </div>
</div>
        </div>
    );
};

export default Navbar;