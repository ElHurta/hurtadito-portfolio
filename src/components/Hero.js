import React from 'react'
import Star from '../svg/star.svg'
import StarBase from '../svg/star-base.svg'
import { Image } from './Image'

import DashedCircle from '../svg/dashed-circle-photo.svg'
import Rune1 from '../svg/rune-1.svg'

import '../sass/hero.sass'

function Hero() {
    return (
        <section>
            <Rune1 />
            <DashedCircle/>
            <StarBase />
            <Star />
            
            <div className='photo-container'>
                <Image/>
            </div>
            
            
            <div className='welcome-hero'>
                <h1>Hi! Welcome To <br />
                    <span> My Portfolio!</span> 
                </h1>
                <p>The Name is Juan Hurtado, btw</p>
            </div>

            {/* Call to action */}

        </section>
    )
}

export { Hero }
