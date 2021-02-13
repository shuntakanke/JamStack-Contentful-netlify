import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulDrink {
        nodes {
          id
          image {
            fluid {
              src
            }
          }
          name
          price
        }
        totalCount
      }
    }
  `)

  const {
    allContentfulDrink: { nodes: drinks },
  } = data

  return (
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
  )
}

export default ComponentName
