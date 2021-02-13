import React, { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import HeroSection from "../components/HeroSection"
import InfoSection from "../components/InfoSection"
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data"
import Services from "../components/Services"
import AccessSection from "../components/AccessSection"
import { accessObj } from "../components/AccessSection/Data"
import Footer from "../components/Footer"

import "../index.css"

export default function Index() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      {/* drink */}
      <div id="drink">
        <InfoSection {...homeObjOne} />
        <Services />
      </div>
      {/* menu */}
      <div id="menu">
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjThree} />
        <Services />
      </div>
      <AccessSection {...accessObj} />
      <Footer />
    </>
  )
}
