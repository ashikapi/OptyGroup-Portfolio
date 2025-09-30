import React from 'react'
import HomeHeros from './pageComponents/homeComponents/HomeHeros'
import CeoMessage from './pageComponents/homeComponents/CeoMessage'
import BlogTrial from './pageComponents/homeComponents/BlogTrial'
import OurServices from './pageComponents/servicesComponents/OurServices'
import OurBusiness from './pageComponents/servicesComponents/OurBusiness'
import BusinessTrial from './pageComponents/homeComponents/BusinessTrial'
import AboutUs from './pageComponents/aboutComponents/AboutUs'
import TeamTrial from './pageComponents/homeComponents/TeamTrial'
import ContactTrial from './pageComponents/homeComponents/ContactTrial'
import PortfolioTrial from './pageComponents/homeComponents/PortfolioTrial'

const Home = () => {
  return (
    <>
    <HomeHeros/>
    <CeoMessage />
    <OurServices />
    <BlogTrial />
    <BusinessTrial />
    <TeamTrial />
    <AboutUs />
    <PortfolioTrial />
    <ContactTrial />
    </>
  )
}

export default Home