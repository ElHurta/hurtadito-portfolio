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
                
                <div className='cards-section'>
                    {/* Carta Completa */}
                    <div className='pos-card-container'>
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

                    {/* Carta Completa */}
                    <div className='pos-card-container'>
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

                    {/* Carta Completa */}
                    <div className='pos-card-container'>
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
                    

                    {/* Carta Completa */}
                    <div className='pos-card-container'>
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
                
            </div>

        </section>
    )
}

export {Position}
