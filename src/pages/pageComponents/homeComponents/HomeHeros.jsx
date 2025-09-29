import React, { useState, useEffect } from 'react'; // Importing React and hooks for state and effects
// Importing icons for display in the information section
import { LiaUserCheckSolid } from "react-icons/lia";
import { FaAward } from "react-icons/fa6";
import { FaStarOfDavid } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";

// Information array holding the main content and statistics
const information = [
  {
    title: "Innovating Tomorrow's Solutions", // Title of the main section
    description: "Leading the way in digital transformation and business excellence", // Description of the section
    icons: [ // Array of statistics for display as counters
      { icon: <LiaUserCheckSolid />, text: 'Successful Projects.', number: 1000 },
      { icon: <FaAward />, text: 'Industry Awards.', number: 5000 },
      { icon: <FaStarOfDavid />, text: 'Satisfied Clients.', number: 500 },
      { icon: <GiArcheryTarget />, text: 'Years of Excellence.', number: 2000 }
    ]
  },
];

const HomeHeros = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      {information.map((info, index) => (
        <div key={index} className="w-full h-auto bg-[url('https://itsulu.bslthemes.com/wp-content/uploads/2023/07/1.jpg')]
         bg-[rgb(44,49,56)] bg-blend-overlay bg-cover bg-center bg-no-repeat flex justify-center items-center md:pt-80 
         md:pb-40 md:top-10 md:pl-0 md:pr-0 pl-2 pr-2 pt-20 pb-40 top-5">
          {/* Hero Section with background image and overlay */}
          <div className=" md:p-6 p-2 md:rounded-3xl text-white md:space-y-10 space-y-5 
          md:w-[800px] md:text-left md:-mt-28 md:mr-80">
            {/* Section Title */}
            <h1 className='text-white font-semibold md:text-xl font-serif'>The Next
              <span className='text-[rgb(245,124,0)] font-semibold'>Gen</span></h1>
            {/* Main Title */}
            <h1 className='md:text-5xl text-2xl font-extrabold font-serif'>
              <span className='uppercase'>We Provide Services <br /> and Solutions</span>
              <span className='font-cursive text-[rgb(245,124,0)]'> To Enterprise</span>
            </h1>
            {/* for Desktop */}
            <div className='md:flex justify-start items-center md:gap-5 hidden'>
              {/* Button for contact */}
              <button className='w-48 p-4 border-2 border-[rgb(245,124,0)] text-xl
               rounded-full hover:border-4 hover:shadow-inner transition-all duration-300
                font-serif hover:bg-black hover:bg-opacity-50'>
                Let’s Talk
              </button>
              {/* Brief company description */}
              <p className='md:w-96 md:p-4 text-[rgb(152,154,158)]'>
                Our company specializes in offering comprehensive services and solutions to enterprises of various sizes.</p>
            </div>
            {/* for mobile */}
            <div className='md:hidden space-y-4'>
              {/* Brief company description */}
              <p className='p-1 text-[rgb(152,154,158)]'>
                Our company specializes in offering comprehensive services and solutions to enterprises of various sizes.</p>
              {/* Button for contact */}
              <button className='px-5 py-2 border border-[rgb(245,124,0)] 
               rounded-full hover:border-2 hover:shadow-inner transition-all duration-300
                font-serif hover:bg-black hover:bg-opacity-50'>Let’s Talk</button>
            </div>
          </div>
        </div>
      ))}

      {/* Information section with counters */}
      <div className='flex justify-center items-center'>
        <div className="lg:w-[1000px] lg:h-[200px] lg:p-10 p-4 grid grid-cols-2 gap-10 md:grid-cols-4
         lg:gap-4 mb-10 bg-gray-700 text-white lg:-mt-24 -mt-36 rounded-3xl shadow-lg">
          {information[0].icons.map((item, ind) => (
            <CounterCard key={ind} icon={item.icon} text={item.text} number={item.number} />
          ))}
        </div>
      </div>
    </div>
  );
};

// CounterCard Component to handle dynamic counting of statistics
const CounterCard = ({ icon, text, number }) => {
  const [displayCount, setDisplayCount] = useState(0);  // State to display animated count

  // Effect hook to animate the counter
  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prevCount) => {
        if (prevCount < number) return prevCount + 20;  // Increase count by 20 until it reaches the target
        clearInterval(interval);  // Stop the interval when target is reached
        return number;
      });
    }, 50); // Speed of counting (in milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [number]);  // Effect runs when the number prop changes

  return (
    <div className='group flex justify-center items-center'>
      <div className='flex flex-col justify-evenly lg:mt-5 mt-2 items-center space-y-2'>
        <h1 className="md:text-2xl text-lg">{icon}</h1> {/* Display the icon */}
        <h2 className="md:text-3xl text-lg font-bold font-sans">{displayCount}+ </h2> {/* Display the animated count */}
        <p className="md:text-lg font-medium font-sans">{text}</p> {/* Display the text */}
      </div>
    </div>
  );
};

export default HomeHeros; // Export the HomeHeros component
