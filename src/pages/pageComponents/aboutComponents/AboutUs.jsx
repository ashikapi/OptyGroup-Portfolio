import React from 'react'; 
import AboutLogo from '../../../images/AboutLogo.png'; 
import { MdManageHistory } from "react-icons/md"; 

const AboutUs = () => {
  const aboutInfo = {
    title: "Our Story", 
    text: "At OPTY Group, we are a team of visionaries and innovators dedicated to shaping the future of technology and business. Our journey began with a simple idea: to build solutions that not only meet today's needs but also anticipate tomorrow's challenges. We believe in creating lasting partnerships with our clients, helping them navigate the digital landscape and achieve their goals with confidence.", 
    logo: AboutLogo, 
    mission: [
      { title: "Our Mission", text: "To empower businesses with innovative and sustainable digital solutions, fostering growth and creating value for our clients, employees, and the community." },
    ],
    vision: [
      { title: "Our Vision", text: "To be a global leader in technology and business solutions, recognized for our commitment to excellence, innovation, and social responsibility." },
    ],
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Image and Story Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
            <img src={aboutInfo.logo} alt="About Logo" className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out w-full h-auto object-cover" />
          </div>

          <div className="w-full md:w-1/2 lg:w-3/5 p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-[rgb(245,124,0)] gap-4 mb-6 flex items-center hover:text-orange-600 transition-colors duration-300">
              {aboutInfo.title}
              <span><MdManageHistory /></span>
            </h2>
            <p className="text-lg text-cyan-900 mb-6 leading-relaxed">{aboutInfo.text}</p>

            {/* Mission and Vision */}
            <div className="p-8 grid md:grid-cols-2 gap-8">
              {aboutInfo.mission.map((mission, index) => (
                <div key={index} className="space-y-4 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-extrabold text-[rgb(245,124,0)]">{mission.title}</h3>
                  <p className="text-lg text-gray-600">{mission.text}</p>
                </div>
              ))}
              {aboutInfo.vision.map((vision, index) => (
                <div key={index} className="space-y-4 bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out">
                  <h3 className="text-2xl font-extrabold text-[rgb(245,124,0)]">{vision.title}</h3>
                  <p className="text-lg text-gray-600">{vision.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
