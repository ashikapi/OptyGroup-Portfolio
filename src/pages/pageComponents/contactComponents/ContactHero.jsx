import React from 'react'; // Importing React to use JSX

const ContactHero = () => {
  return (
    <div>
      {/* Main hero section with a background image */}
      <div>
        <div
          className="w-full h-auto pt-28 pb-28 bg-[url('https://itsulu.bslthemes.com/wp-content/uploads/2023/05/map.png')] 
            bg-[rgb(62,64,67)] bg-blend-overlay bg-cover bg-center bg-no-repeat flex justify-center items-center"
        >
          {/* Flex container to align content */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 px-6">
            
            <div className="space-y-6 text-center lg:text-left">
              {/* Breadcrumb section for navigation */}
              <div className="flex justify-center lg:justify-start gap-10">
                <h1 className="text-lg lg:text-xl font-semibold text-white">Contact Us</h1>
              </div>

              {/* Main title for the hero section */}
              <h1 className="text-4xl lg:text-5xl font-bold text-white font-mono uppercase tracking-wide leading-tight">
                Let's Discuss Your Opportunity
              </h1>
            </div>

            {/* Decorative image on the right side */}
            <div className="mt-6 lg:mt-0">
              <img
                src="https://itsulu.bslthemes.com/wp-content/uploads/2023/07/deco-2.svg"
                alt="decorative image"
                className="w-40 transform rotate-90 mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero; // Exporting the CommonHero component
