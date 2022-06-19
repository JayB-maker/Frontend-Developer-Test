import React from 'react'
import CelebratedTechies from '../component/homepage/celebratedTechies/CelebratedTechies'
import ConnectedAward from '../component/homepage/connectedAwards/ConnectedAward'
import HeroSection from '../component/homepage/heroSection/HeroSection'
import Target from '../component/homepage/target/Target'
import Footer from '../layout/Footer'
import Header from '../layout/header/Header'

const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <Target />
    <ConnectedAward />
    <CelebratedTechies />
    <Footer />
    </>
  )
}

export default HomePage