import React from 'react';

function Navbar () {
    return (
        <div className='navHead'>
            <h1>BlogBook</h1>
            <a href="/user/:id">My Account</a>
        </div>
    )
};

export default Navbar;