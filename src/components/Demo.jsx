import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaUserCheckSolid } from "react-icons/lia";
import { FaAward } from "react-icons/fa6";
import { FaStarOfDavid } from "react-icons/fa6";
import { GiArcheryTarget } from "react-icons/gi";
import 'swiper/swiper-bundle.css';
import bg1 from '../images/HeroBG1.png';
import bg2 from '../images/HeroBG2.jpg';

const information = [
  {
    title: "Innovating Tomorrow's Solutions",
    description: "Leading the way in digital transformation and business excellence",
    icons: [
      { icon: <LiaUserCheckSolid />, text: 'Successful Projects.', number: 1000 },
      { icon: <FaAward />, text: 'Industry Awards.', number: 5000 },
      { icon: <FaStarOfDavid />, text: 'Satisfied Clients.', number: 500 },
      { icon: <GiArcheryTarget />, text: 'Years of Excellence.', number: 2000 }
    ]
  },
];

const Demo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Swiper for Background Images */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000, // Set auto slide time
          disableOnInteraction: false,
        }}
        className="w-full h-auto"
      >
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex justify-center items-center"
            style={{  backgroundImage: `url(${bg1})` }}
          >
            <div className="text-center w-[500px] p-6 bg-white bg-opacity-20 rounded-3xl text-white space-y-10">
              <h1 className="text-4xl font-extrabold">Innovating Tomorrow's Solutions</h1>
              <p className="text-xl font-semibold">Leading the way in digital transformation and business excellence</p>
              <button className="p-4 bg-cyan-900 rounded-md text-2xl font-semibold">Get Started</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides with different background images if needed */}
        <SwiperSlide>
          <div
            className="w-full h-screen bg-cover bg-center flex justify-center items-center"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="text-center w-[500px] p-6 bg-white bg-opacity-20 rounded-3xl text-white space-y-10">
              <h1 className="text-4xl font-extrabold">Next-gen Solutions</h1>
              <p className="text-xl font-semibold">Embracing the future with cutting-edge technology</p>
              <button className="p-4 bg-cyan-900 rounded-md text-2xl font-semibold">Explore More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Icons and Counter Cards */}
      <div className='flex justify-center items-center z-50'>
        <div className="lg:w-[1000px] lg:h-[200px] lg:p-10 p-4 grid grid-cols-1 md:grid-cols-4 lg:gap-4 mb-10 bg-gradient-to-tr from-blue-500 to-orange-300 text-white lg:-mt-24 -mt-36 rounded-3xl shadow-lg">
          {information[0].icons.map((item, ind) => (
            <CounterCard key={ind} icon={item.icon} text={item.text} number={item.number} />
          ))}
        </div>
      </div>
    </div>
  );
};

// CounterCard Component to handle dynamic counting
const CounterCard = ({ icon, text, number }) => {
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayCount((prevCount) => {
        if (prevCount < number) return prevCount + 20;  // Adjust the increment value
        clearInterval(interval);  // Stop the counter when the target is reached
        return number;
      });
    }, 50); // Speed of counting (milliseconds)

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [number]);

  return (
    <div className='group flex justify-center items-center'>
      <div className='flex flex-col justify-evenly lg:mt-5 mt-2 items-center space-y-2'>
        <h1 className="lg:text-2xl text-xl">{icon}</h1>
        <h2 className="lg:text-3xl text-2xl font-bold">{displayCount}+ </h2> {/* Display the animated count */}
        <p className="lg:text-lg font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Demo;
