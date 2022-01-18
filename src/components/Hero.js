import React from 'react'
import Star from '../svg/star.inline.svg'
import StarBase from '../svg/star-base.inline.svg'
import { Image } from './Image'

import DashedCircle from '../svg/dashed-circle-photo.inline.svg'
import Rune1 from '../svg/rune-1.inline.svg'

import CallToAct from '../svg/call-to-cplt.inline.svg'

import '../sass/hero.sass'

function Hero() {
    return (
        <section id='home'>
            <Rune1 />
            <StarBase />
            <Star />
            <DashedCircle/>
            
            <div className='photo-container'>
                <Image/>
            </div>
            
            
            <div className='welcome-hero'>
                <h1>Hi! Welcome To <br />
                    <span> My Portfolio!</span> 
                </h1>
                <p>The Name is Juan Hurtado, btw</p>
            </div>

            <a href='#icando'><CallToAct className='call-to-action-container'/></a>

        </section>
    )
}

export { Hero }
