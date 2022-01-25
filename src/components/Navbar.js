import React from 'react'

import { useState } from 'react';
import { Hamburger } from './Hamburger'


function Navbar() {
    const [opened, setOpened] = useState(false)


    const onClickHamburger = () => {
        setOpened(!opened)
    }

    return (
        <nav key={'navbar'}>
            <a className='item_name' href='#home'> Juan Hurtado  </a>
            <span tabIndex={0} role={"button"} onClick={onClickHamburger} className='hamburger-menu' key={'hamburgerSpan'} onKeyDown={onClickHamburger}>
                <Hamburger opened={opened}/>
            </span>
            <ul className={`${opened ? "open" : ""}`}>
                <li> <a href='#home'> Home </a> </li>
                <li> <a href='#icando'> Positions </a> </li>
                <li> <a href='#projects'> Projects </a> </li>
                <li> <a href='#references'> References </a> </li>
                <li> <a href='#contact'> Contact </a> </li>
            </ul>
            
        </nav>
    )
}

export { Navbar }
