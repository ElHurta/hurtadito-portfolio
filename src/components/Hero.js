import React from 'react'
import Star from '../svg/star.svg'
import StarBase from '../svg/star-base.svg'
import { Image } from './Image'

import '../sass/hero.sass'

function Hero() {
    return (
        <section>
            <div className='gradial-div' />
            <StarBase />
            <Star >
                <Image />
            </Star>
            
            <div className='welcome-hero'>
                <h1>Hi! Welcome To <br />
                    <span> My Portfolio </span> 
                </h1>
                <p>The Name is Juan Hurtado, btw</p>
            </div>

            {/* Call to action */}

        </section>
    )
}

export { Hero }
