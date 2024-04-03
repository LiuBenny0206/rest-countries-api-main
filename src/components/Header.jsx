import React, {useState} from 'react';
import {ReactComponent as MoonIcon} from '../images/moon_icon.svg';

function Header(){
    return(
        <div className='header'>
            <p id='header-title'>Where is the world?</p>
            <div className='header-theme'>
                <MoonIcon id='header-theme-icon'/>
                <p id='header-theme-name'>Dark Mode</p>
            </div>
        </div>
    );
}

export default Header;