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
            {/* <a className='item_name' href='/'> Juan Hurtado  </a> */}
            <span onClick={onClickHamburger} className='hamburger-menu' key={'hamburgerSpan'}>
                <Hamburger opened={opened}/>
            </span>
            <ul className={`${opened ? "open" : ""}`}>
                <li> <a href='/'> Home </a> </li>
                <li> <a href='/'> Contact </a> </li>
            </ul>
            
        </nav>
    )
}

export { Navbar }
