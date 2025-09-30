import React from 'react'; // Importing React to use JSX

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const expertInfo = [
    { id: 1, name: 'Ashik Api', Image: 'https://ashikapi.netlify.app/assets/Ashik%20Api-DC2-S8J_.jpg', designation: 'Frontend Developer' },
    { id: 2, name: 'Fazley Rabbi', Image: 'https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?semt=ais_hybrid&w=740&q=80', designation: 'Backend Developer' },
    { id: 3, name: 'Shihab', Image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg', designation: 'UI/UX Designer' },
    { id: 4, name: 'Shagor', Image: 'https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg', designation: 'Frontend Developer' },
    { id: 5, name: 'Tarek', Image: 'https://i.pinimg.com/474x/4b/59/22/4b5922d22a239def14b8c8fb0e997eb3.jpg', designation: 'Backend Developer' },
    { id: 6, name: 'Jamil', Image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg', designation: 'UI/UX Designer' },
    //   { id: 7, name: 'Rohan', Image: 'https://st3.depositphotos.com/4071389/12636/i/450/depositphotos_126362018-stock-photo-handsome-man-in-suit-jacket.jpg', designation: 'UI/UX Designer' }
];

const TeamTrial = () => {
    const halfLength = Math.floor(expertInfo.length / 2);  // Split the array into two halves

    // First half (even layout)
    const firstHalf = expertInfo.slice(0, halfLength);

    // Second half (odd layout)
    const secondHalf = expertInfo.slice(halfLength);

    return (
        <div className='flex justify-center items-center pt-20 pb-20 md:ml-0 md:mr-0 ml-10 mr-10'>
            <div>
                {/* Title Section */}
                <div className='mb-10 space-y-4'>
                    <h1 className='p-2 text-4xl font-cursive text-[rgb(245,124,0)] font-bold'>Our Stylish Team Members</h1>
                    <p className='p-4'>This is the sample dummy text insert your desired text here because this is dummy text</p>
                </div>

                {/* First section: "even" layout (Image on the left, text on the right) */}
                <div className="md:flex justify-normal">
                    {firstHalf.map((member) => (
                        <div key={member.id} className="flex justify-center items-center hover:border-[rgb(245,124,0)] hover:border-transparent hover:shadow-inner transition-all duration-300">
                            {/* "even" layout: Image on the left, text on the right */}
                            <div className="md:w-60 md:h-60 w-48 h-48 object-cover bg-[rgb(63,63,63)] md:border-none border border-[rgb(245,124,0)]">
                                <div className="text-center text-white p-2 space-y-4 mt-1">
                                    <h1 className='text-2xl font-extrabold text-green-300 font-cursive'>{member.name}</h1>
                                    <h2 className='font-semibold text-white text-opacity-50'>{member.designation}</h2>
                                    <div className="flex justify-center items-center gap-4">
                                        <FaTwitter /><FaFacebookSquare /><FaLinkedinIn /> <FaInstagramSquare />
                                    </div>
                                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, obcaecati.</p>
                                </div>
                            </div>
                            <div className='md:w-60 md:h-60 w-48 h-48 object-cover'>
                                <img className="w-full h-full" src={member.Image} alt={member.name} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second section: "odd" layout (Text on the left, image on the right) */}
                <div className="md:flex justify-normal">
                    {secondHalf.map((member) => (
                        <div key={member.id} className="flex justify-center items-center">
                            {/* "odd" layout: Text on the left, image on the right */}
                            <div className='md:w-60 md:h-60 w-48 h-48 object-cover'>
                                <img className="w-full h-full" src={member.Image} alt={member.name} />
                            </div>
                            <div className="md:w-60 md:h-60 w-48 h-48 object-cover bg-[rgb(38,38,38)]">
                                <div className="text-center text-white p-2 space-y-4 mt-1">
                                    <h1 className='text-2xl font-extrabold text-green-300 font-cursive'>{member.name}</h1>
                                    <h2 className='font-semibold text-white text-opacity-70'>{member.designation}</h2>
                                    <div className="flex justify-center items-center gap-4">
                                        <FaTwitter /><FaFacebookSquare /><FaLinkedinIn /> <FaInstagramSquare />
                                    </div>
                                    <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center mt-10'>
                    <NavLink to={'/team'}>
                        <button className='flex justify-center items-center text-[rgb(245,124,0)] px-6 py-2 bg-gray-200 rounded-md
                                            text-xl font-bold'>
                            <p>Explore more</p>
                            <IoMdArrowRoundForward className='ml-2' />
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default TeamTrial; // Exporting the TeamShow component
