import React from 'react'

import '../sass/position.sass'
import {GoDeviceDesktop} from "@react-icons/all-files/go/GoDeviceDesktop"

function Position() {
    return (
        <section style={{display: 'flex', alignItems: 'center'}}>
            <div className='pos-section'>
                <div className='ican-class'>
                    <h1>
                        I Can
                        <br/>
                        Be Your...
                    </h1>
                </div>

                <div className='positions-container'>
                    <div style={{textAlign: 'center'}}>
                        <GoDeviceDesktop className='web-icon'/>
                        <h1>Web Developer</h1>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <GoDeviceDesktop className='web-icon'/>
                        <h1>Web Developer</h1>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        <GoDeviceDesktop className='web-icon'/>
                        <h1>Web Developer</h1>
                    </div>
                    
                    
                </div> 
            </div>
            
        </section>
    )
}

export {Position}
