import React from 'react'; // Importing React to use JSX
import { IoMdArrowRoundForward } from "react-icons/io"; // Importing arrow icon from react-icons
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper components for the carousel functionality
import 'swiper/swiper-bundle.css'; // Importing Swiper styles

const OurServices = () => {

    // Array containing the details of services with their descriptions, points, and images
    const serviceDetails = [
        {
            serviceTitle: 'Data Security',
            text: 'Protecting digital information from unauthorized access or corruption.',
            points: [
                { point: 'Implement measures encryption.' },
                { point: 'Firewalls to safeguard sensitive.' },
                { point: 'Implementing security measures.' },
                { point: 'Developing response plans.' },
            ],
        },
        {
            serviceTitle: 'SEO and Optimazation',
            text: 'Improving the quality of traffic to a website from search engines.',
            points: [
                { point: "Optimizing the website's content." },
                { point: 'Optimizing keyword research.' },
                { point: 'Meta tag optimization and links.' },
                { point: 'User-friendly, mobile-responsive.' },
            ],
        },
        {
            serviceTitle: 'Analytics and Research',
            text: 'Analytics and research are critical components of any business strategy.',
            points: [
                { point: 'Helps understand performance.' },
                { point: 'Research to anticipate trends.' },
                { point: 'Insights into consumer behavior.' },
                { point: 'Investing in analytics & research.' },
            ],
        },
        {
            serviceTitle: 'IT Solutions Services',
            text: 'Accelerate innovation with world class tech teams our all service.',
            points: [
                { point: 'Network and security management.' },
                { point: 'Infrastructure management.' },
                { point: 'Software & database management.' },
                { point: 'Technical & troubleshoot problems.' },
            ],
        },
        {
            serviceTitle: 'Web Development',
            text: 'Development is the process of creating and maintaining websites.',
            points: [
                { point: 'HTML, CSS, JavaScript.' },
                { point: 'Management systems.' },
                { point: 'Creating layouts and designs.' },
                { point: 'Simply drag, drop and customize.' },
            ],
        },
        {
            serviceTitle: 'Mobile Applications',
            text: 'Creating user-friendly interfaces for digital products.',
            points: [
                { point: 'Websites and mobile applications.' },
                { point: 'The UI, or user interface.' },
                { point: 'A solid UI/UX design.' },
                { point: 'Overall product success.' },
            ],
        },
    ];

    return (
        <div className='flex justify-center items-center md:pl-10 md:pr-5 pl-2 pr-2 bg-white'>
            <div className="w-full md:px-4">
                {/* Header Section */}
                <div className='md:pt-20 md:pb-20 pt-5 pb-10 md:flex justify-between items-center'>
                    <div className='md:flex md:justify-start md:items-center flex justify-center items-center gap-4'>
                        <div className='w-20 h-20 flex justify-start items-center p-4 bg-gray-100 rounded-full md:ml-0 ml-5'>
                            {/* Service icon */}
                            <img 
                                src="https://itsulu.bslthemes.com/wp-content/uploads/2023/07/serv1.svg"
                                alt="service icon"
                                className='w-10' />
                            <h1 className='p-3 -ml-5 mt-10 bg-[rgb(245,124,0)] rounded-full'></h1>
                        </div>
                        {/* Heading text */}
                        <h1 className='md:text-2xl p-4 font-bold font-roboto'>Emerging technologies such as <span className='text-[rgb(245,124,0)]'>artificial intelligence</span> ,<br /> blockchain and the OPTY are transforming the business.</h1>
                    </div>
                    {/* Button to get in touch */}
                    <div>
                        <button className='md:px-8 md:py-3 md:border-2 p-4 border border-[rgb(245,124,0)] 
                        rounded-full md:text-lg text-sm font-semibold md:ml-0 ml-36 md:mt-0 mt-10'>Get in Touch</button>
                    </div>
                </div>

                {/* Horizontal separator with decorative lines */}
                <div className='flex justify-start items-center space-x-2 pt-5 pb-32'>
                    <span><hr className='w-6 border-b-2 border-[rgb(245,124,0)]' /></span>
                    <span><hr className='md:w-[1350px] w-80 border-b-2 border-gray-300 border-opacity-30' /></span>
                    <span><hr className='w-6 border-b-2 border-[rgb(245,124,0)]' /></span>
                </div>

                {/* Swiper component for horizontal scroll with loop functionality */}
                <Swiper
                    spaceBetween={20} // Space between slides
                    slidesPerView={1} // Number of slides visible at a time
                    loop={false} // Disable infinite loop (set to true if you want looping)
                    navigation // Enable navigation arrows
                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Show 1 slide on small screens (mobile)
                        },
                        768: {
                            slidesPerView: 3, // Show 3 slides on md screens and larger
                        },
                    }}
                    className="mySwiper"
                    style={{ height: '600px' }} // Ensuring the height is responsive
                >
                    {/* Loop through each service and display it */}
                    {serviceDetails.map((details, index) => (
                        <SwiperSlide key={index}>
                            <div className='p-6 w-96 h-[450px] object-cover border-2 hover:border-[rgb(245,124,0)] rounded-xl border-gray-300 space-y-10'>
                                {/* Service Title */}
                                <h1 className="font-bold text-lg">{details.serviceTitle}</h1>
                                {/* Service Description */}
                                <p className="text-gray-700">{details.text}</p>

                                {/* Decorative separator */}
                                <div className='flex justify-start items-center space-x-2'>
                                    <span><hr className='w-6 border-b-2 border-[rgb(245,124,0)]' /></span>
                                    <span><hr className='w-[305px] border-b-2 border-gray-300' /></span>
                                </div>

                                {/* List of points for each service */}
                                <ul>
                                    {details.points.map((point, ind) => (
                                        <li key={ind} className="text-gray-600 relative pl-4 before:absolute before:left-0 before:top-2 
                                 before:w-2 before:h-2 before:rounded-full before:bg-[rgb(245,124,0)]">{point.point}</li>
                                    ))}
                                </ul>

                                {/* Read more button */}
                                <div>
                                    <button
                                        className='flex justify-center items-center rounded-md text-black
                                      text-xl font-serif font-extrabold space-x-2'>
                                        <p>Read More</p>
                                        <span
                                            className='flex flex-row items-center p-2 bg-[rgb(245,124,0)] rounded-full'>
                                            <IoMdArrowRoundForward />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default OurServices; // Exporting the OurServices component
