import React from 'react'

import '../sass/position.sass'
import {FaDesktop} from "@react-icons/all-files/fa/FaDesktop"

import DashedCircle from '../svg/dashed-circle-2.inline.svg'

function Position() {
    return (
        <section id='icando'>

            <div className='pos-section-container'>
                <div className='ican-class'>
                    <h1>
                        I Can
                        <br/>
                        Be Your...
                    </h1>
                </div>


                <div className='pos-card-container hidden above'>
                    <div className='pos-icon-card'>
                        <DashedCircle className='icon-border'/>
                        <FaDesktop className='web-icon'/>
                    </div>

                    {/* Card Interna */}
                    <div className='int-card'>
                        {/* Posición */}
                        <h1>Video Editor</h1>

                        {/* Lista De Habilidades */}
                        <ul>
                            <li>After Effects</li>
                            <li>Premiere Pro</li>
                            <li>CMS</li>
                        </ul>
                    </div>
                </div>

                <div className='pos-card-container hidden below'>
                    <div className='pos-icon-card'>
                        <DashedCircle className='icon-border'/>
                        <FaDesktop className='web-icon'/>
                    </div>

                    {/* Card Interna */}
                    <div className='int-card'>
                        {/* Posición */}
                        <h1>Backend Developer</h1>

                        {/* Lista De Habilidades */}
                        <ul>
                            <li>SQL/MySQL</li>
                            <li>Python/Django/Flask</li>
                            <li>API Rest</li>
                        </ul>
                    </div>
                </div>

                {/* Carta Completa */}
                <div className='pos-card-container active'>
                    <div className='pos-icon-card'>
                        <DashedCircle className='icon-border'/>
                        <FaDesktop className='web-icon'/>
                    </div>

                    {/* Card Interna */}
                    <div className='int-card'>
                        {/* Posición */}
                        <h1>Web Developer</h1>

                        {/* Lista De Habilidades */}
                        <ul>
                            <li>UX/UI Design</li>
                            <li>React</li>
                            <li>CMS</li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </section>
    )
}

export {Position}
