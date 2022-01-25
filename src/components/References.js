import React from 'react';

import {BsPeopleFill} from '@react-icons/all-files/bs/BsPeopleFill'

import "../sass/references.sass"

function References() {

    return (

        <section id='references'>
            <div className="section_title_container">
                <h1>
                My References <BsPeopleFill/>
                </h1>
                <p>(The People I Met)</p>
            </div>
            <div className='references_container'>
                <h2>Nothing to see here... yet, keep scrolling! 👀</h2>
            </div>
        </section>
    )

}

export {References};
