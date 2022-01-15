import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = () => {
  const data = useStaticQuery(graphql`
    query GET_IMAGE {
      image: file(relativePath: {eq: "hurta-crop.png"}){

      childImageSharp {
          gatsbyImageData(width: 180, layout: CONSTRAINED, quality: 90)
        }
      }
    }
  `)


  const myImg = getImage(data.image)
  return <GatsbyImage className='profile-photo' image={myImg} alt='hurtado-photo'/>
}

export {Image}