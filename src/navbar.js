import React from 'react';

function Navbar() {
    return ( <nav className='navbar'>
   <h1>the Do jo blog</h1>
   <div className='links'>
    <a href='/'>Home</a>
    <a href='/create'>New blog</a>
   </div>
    
    </nav> );
}

export default Navbar;