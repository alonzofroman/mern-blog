import React from 'react';

function Navbar () {
    return (
        <div className='navHead'>
            <h1>BlogBook</h1>
            <a href="/user/:id">My Account</a>
            <a href='/login'>Log In</a>
            <a href='/signup'>Sign Up</a>
        </div>
    )
};

export default Navbar;