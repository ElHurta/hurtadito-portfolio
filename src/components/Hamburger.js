import React from 'react';
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu"
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose"


function Hamburger({opened}) {
    if (opened){
        return (
            <AiOutlineClose/>
        )
    }

    return (
        <GiHamburgerMenu/>
    )
    
}

export {Hamburger}
