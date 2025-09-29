import React from 'react'
import AboutUs from './pageComponents/aboutComponents/AboutUs'
import TopExperts from './pageComponents/aboutComponents/TopExperts'
import AboutHero from './pageComponents/aboutComponents/AboutHero'

const About = () => {
  return (
    <div className='w-full h-full bg-[url("https://itsulu.bslthemes.com/wp-content/uploads/2023/09/15.jpg")]  bg-[rgb(44,49,56)] bg-blend-overlay bg-cover bg-center bg-fixed'>
    <AboutHero />
    <AboutUs />
    <TopExperts />
    </div>
  )
}

export default About