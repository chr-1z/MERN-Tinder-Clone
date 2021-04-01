import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            <h2> I am the header </h2>
            <PersonIcon />
        </div>
    )
}

export default Header;