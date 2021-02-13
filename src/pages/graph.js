import React from "react"
import { graphql } from "gatsby"

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "../components/Services/ServicesElements"

import "../index.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulDrink: { nodes: drinks },
  } = data

  console.log(data)

  return (
    <>
      <ServicesContainer>
        <ServicesWrapper>
          {drinks.map(drink => {
            return (
              <ServicesCard key={drink.id} data-aos="fade-up">
                <ServicesIcon fluid={drink.image.fluid} alt={drink.title} />
                <ServicesH2>{drink.name}</ServicesH2>
                <ServicesP>{drink.price}</ServicesP>
              </ServicesCard>
            )
          })}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export const query = graphql`
  {
    allContentfulDrink {
      nodes {
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        name
        price
      }
      totalCount
    }
  }
`

export default ComponentName
