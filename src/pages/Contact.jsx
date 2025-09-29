import React from 'react'
import CommonHero from '../components/CommonHero'
import ContactUs from './pageComponents/contactComponents/ContactUs'
import SendMessage from './pageComponents/contactComponents/SendMessage'
import ContactHero from './pageComponents/contactComponents/ContactHero'

const Contact = () => {
  return (
    <>
        <ContactHero />
        <ContactUs/>
        <SendMessage/>
    </>
  )
}

export default Contact