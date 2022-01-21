import React from 'react'

import '../sass/position.sass'
import {FaDesktop} from "@react-icons/all-files/fa/FaDesktop"
import { useStaticQuery, graphql } from "gatsby"

import DashedCircle from '../svg/dashed-circle-2.inline.svg'

function Position() {

    const dataQuery = useStaticQuery(graphql`
    {
      allStrapiPosition {
        nodes {
          data {
            id
            attributes {
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
    console.log(positions[0].data)

    let cardsList = []

    positions[0].data.forEach(element => {
            
        cardsList.push(
                <div className='pos-card-container'>
                <div className='pos-icon-card'>
                    <DashedCircle className='icon-border'/>
                    <FaDesktop className='web-icon'/>
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
