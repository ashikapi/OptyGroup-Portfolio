import React from 'react'
import CommonHero from '../components/CommonHero'
import OurBusiness from './pageComponents/servicesComponents/OurBusiness'
import HeroServices from './pageComponents/servicesComponents/HeroServices'
import OurServices from './pageComponents/servicesComponents/OurServices'

const Services = () => {
  return (
    <div className='w-full h-full bg-[url("https://itsulu.bslthemes.com/wp-content/uploads/2023/09/15.jpg")]  bg-[rgb(44,49,56)] bg-blend-overlay bg-cover bg-center bg-fixed'>
    <HeroServices/>
    <OurServices />
    <OurBusiness />
    </div>
  )
}

export default Services