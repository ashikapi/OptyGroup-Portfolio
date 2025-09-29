import React from 'react'; // Importing React to use JSX
import { FaLocationDot } from "react-icons/fa6"; // Importing location icon from react-icons
import { FaPhone } from "react-icons/fa6"; // Importing phone icon from react-icons
import { MdEmail } from "react-icons/md"; // Importing email icon from react-icons
import { SlCalender } from "react-icons/sl"; // Importing calendar icon from react-icons

const ContactUs = () => {

    // Contact information with icons, titles, and info
    const contactInfo = [
        {icon:<FaLocationDot />, name:'Location', info1:'H#12, R#02, Dag-1677, Merul', info2:'Badda, Anandanagar, Dhaka'},
        {icon:<FaPhone />, name:'Contact', info1:'(+880) 1400-6296-98', info2:'(+880) 1647-6296-98'},
        {icon:<MdEmail />, name:'Email', info1:'support@optygroup.com', info2:'optygroup@gmail.com'},
        {icon:<SlCalender />, name:'Visit Between', info1:'Sun - Thu: 8.00-5.00', info2:'Fri - Sat: Closed'},
    ];

  return (
    <>
    {/* Main container with a light blue background */}
    <div className='w-full h-auto pt-10 pb-10 bg-blue-50'>
        <div>
            {/* Grid layout for displaying contact information */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {/* Loop through contactInfo array and display each item */}
                {contactInfo.map((info,index) => (
                    <div className='flex justify-center items-center' key={index}>
                        {/* Card layout for each contact item */}
                        <div className='p-6 min-w-64 bg-white text-center rounded-xl space-y-4'>
                            {/* Icon section */}
                            <div className='flex justify-center items-center text-2xl text-[rgb(245,124,0)]'>
                                <h1 className='p-4 bg-gray-200 rounded-full'>{info.icon}</h1> {/* Icon inside a rounded background */}
                            </div>
                            
                            {/* Title */}
                            <h1 className='text-[rgb(26,68,109)] text-xl font-bold'>{info.name}</h1> {/* Name (Location, Contact, Email, etc.) */}
                            
                            {/* Information section */}
                            <div className='text-black text-opacity-70'>
                                <p>{info.info1}</p> {/* First line of information */}
                                <p>{info.info2}</p> {/* Second line of information */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  );
}

export default ContactUs; // Exporting the ContactUs component
