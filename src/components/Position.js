import React from 'react'

import '../sass/position.sass'

import { useStaticQuery, graphql } from "gatsby"

import { PositionIcon } from './PositionIcon'
import DashedCircle from '../svg/dashed-circle-2.inline.svg'

function Position() {

    const dataQuery = useStaticQuery(graphql`
    {
      allStrapiPosition {
        nodes {
          data {
            id
            attributes {
              icon_flag
              position_skill_1
              position_skill_2
              position_skill_3
              position_title
            }
          }
        }
      }
    }
  `)

    const {allStrapiPosition : {nodes: positions}} = dataQuery

    let cardsList = []

    positions[0].data.forEach(element => {
        console.log(element)    
        cardsList.push(
                <div className='pos-card-container'>
                <div className='pos-icon-card'>

                    <DashedCircle className='icon-border'/>
                    <PositionIcon icon_flag={element.attributes.icon_flag} />
                </div>

                {/* Card Interna */}
                <div className='int-card'>
                    {/* Posición */}
                    <h1>{element.attributes.position_title}</h1>

                    {/* Lista De Habilidades */}
                    <ul>
                        <li>{element.attributes.position_skill_1}</li>
                        <li>{element.attributes.position_skill_2}</li>
                        <li>{element.attributes.position_skill_3}</li>
                    </ul>
                </div>
            </div>
        )
            
    });

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
                    {cardsList}
                </div>
                
            </div>

        </section>
    )
}

export {Position}
