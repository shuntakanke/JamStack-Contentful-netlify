import React from "react"
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroH1,
} from "./HeroElements"
import heroImg from "../../images/cake.png"

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={heroImg} />
      </HeroBg>
      <HeroContent>
        <HeroH1>しあわせなひとときを</HeroH1>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
