import React from 'react';
import '../Components/Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function header() {
    return (
        <div className='header'>
            <div className="header__left">
                <Avatar className='header__avatar' alt='avatar' />
                <AccessTimeIcon />
                {/* Time icon */}
            </div>

            <div className="header__search">
                <SearchIcon />
                <input type="text" className='header__search' placeholder="Search anything"/>
            </div>

            <div className="header__right">
              <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default header
