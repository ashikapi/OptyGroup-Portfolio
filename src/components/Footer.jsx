import React from 'react'; // Importing React
import footerBg from '../images/footerLogo.jpg'; // Importing background image for the footer

const Footer = () => {

    // Footer details for social links, company info, and industries
    const footerDetails = [
        {
            social: [
                { title: 'Social' },
                { item: 'Facebook' },
                { item: 'Instagram' },
                { item: 'LinkedIn' },
                { item: 'Twitter' },
                { item: 'YouTube' },
            ],
            company: [
                { title: 'Company' },
                { item: ' Services' },
                { item: 'Contact Us' },
                { item: 'Pricing' },
                { item: 'FAQs' },
                { item: 'Our Blog' },
            ],
            industries: [
                { title: 'Industries' },
                { item: 'Ecommerce' },
                { item: 'Education' },
                { item: 'POS Solutions' },
                { item: 'Social Media' },
                { item: 'Logistics' },
            ],
        }
    ];

    return (
        <div className='bg-[rgb(14,19,26)]'> {/* Footer background color */}
            <div className='w-full h-auto flex md:justify-evenly items-center md:pt-28 pb-10 pt-16
             bg-cover bg-center  bg-black bg-opacity-90 bg-blend-overlay text-white '
                style={{ backgroundImage: `url(${footerBg})` }}> {/* Set the background image */}
                <div>
                    {/* Section for joining the experience */}
                    <div className='md:flex justify-between items-center text-center md:gap-40 gap-20'>
                        <div className='md:space-y-4 space-y-2'>
                            <h1 className='md:text-2xl text-lg font-serif font-bold'>Join The
                                <span className='text-[rgb(245,124,0)]'> OPTY Group </span>
                                Experience
                            </h1>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate.</p>
                        </div>
                        <div className='text-black md:space-x-0 space-x-4 md:pt-0 pt-10'>
                            {/* Email input and subscribe button */}
                            <input type="email" placeholder='Your Email Address'
                                className='text-left md:w-[500px] md:p-8 p-4 rounded-full focus:ring-2 focus:ring-gray-600 focus:outline-none' />
                            <button
                                className='md:p-5 px-5 py-4 rounded-full font-semibold bg-[rgb(245,124,0)]'>
                                Subscribe Now
                            </button>
                        </div>
                    </div>

                    {/* Separator line */}
                    <div className='flex md:justify-start justify-center items-center space-x-2 md:pt-20 md:pb-32 pt-10 pb-10'>
                        <span><hr className='w-6 border-b-2 border-[rgb(245,124,0)]' /></span>
                        <span><hr className='md:w-[1200px] w-80 border-b-2 border-gray-300 border-opacity-30' /></span>
                        <span><hr className='w-6 border-b-2 border-[rgb(245,124,0)]' /></span>
                    </div>

                    {/* Footer details mapping */}
                    {footerDetails.map((details, index) => (
                        <div key={index} className='md:flex md:justify-around md:items-center md:ml-0 ml-10 '>
                            {/* Column 1: Company info */}
                            <div className='md:space-y-10 space-y-5 md:pb-0 pb-10'>
                                <h1 className='font-serif text-[rgb(245,124,0)] text-2xl'>OPTY Group</h1>
                                <p>2307 Beverley Rd Brooklyn, <br />New York 11226 USA.</p>
                                <ul className='list-none'>
                                    <li className='relative pl-4 before:absolute before:left-0 before:top-2 
                                 before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)]'>
                                        +880 1xxxxxxxxx
                                    </li>
                                    <li className='relative pl-4 before:absolute before:left-0 before:top-2 
                                 before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)]'>
                                        info@optygroup.com
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2: Social media links */}
                            <div className='md:space-y-5 space-y-2 md:pb-0 pb-10'>
                                <li className='list-none relative pl-6 pb-6 before:absolute before:left-0 before:top-3
                        before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)] text-xl font-semibold'>
                                    {details.social[0].title}</li>
                                {details.social.map((social, ind) => (
                                    <div className='space-y-5' key={ind}>
                                        <ul>
                                            <li className='relative pl-6 hover:text-[rgb(245,124,0)] hover:before:block before:absolute
                                     before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                                      before:bg-[rgb(245,124,0)] before:hidden'>
                                                {social.item}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Column 3: Company menu links */}
                            <div className='md:space-y-5 space-y-2 md:pb-0 pb-10'>
                                <li className='list-none relative pl-6 pb-6 before:absolute before:left-0 before:top-3
                        before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)] text-xl font-semibold'>
                                    {details.company[0].title}</li>
                                {details.company.map((company, inde) => (
                                    <ul key={inde}>
                                        <li className='relative pl-6 hover:text-[rgb(245,124,0)] hover:before:block before:absolute
                                     before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full
                                      before:bg-[rgb(245,124,0)] before:hidden'>
                                            {company.item}</li>
                                    </ul>
                                ))}
                            </div>

                            {/* Column 4: Industry links */}
                            <div className='md:space-y-5 space-y-2 md:pb-0 pb-10'>
                                <li className='list-none relative pl-6 pb-6 before:absolute before:left-0 before:top-3
                        before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)] text-xl font-semibold'>
                                    {details.industries[0].title}</li>
                                {details.industries.map((industry, indexx) => (
                                    <ul key={indexx}>
                                        <li className='relative pl-6 hover:text-[rgb(245,124,0)]
                                     hover:before:block before:absolute before:left-0 before:top-2 
                                     before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)] before:hidden'>
                                            {industry.item}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer copyright and development credit */}
            <div className='md:flex justify-between md:ml-10 md:mr-10 pt-5 pb-5 md:text-current text-center md:space-y-0 space-y-2'>
                <h1 className='text-white text-opacity-60 md:text-lg text-sm'>
                    OPTY GROUP by- 
                    <span className='text-[rgb(245,124,0)]'>
                         Development Team.
                    </span>
                </h1>
                <h1 className='text-white text-opacity-60 md:text-lg text-sm'>© 2025 All rights reserved.</h1>
            </div>
        </div>
    );
}

export default Footer;
