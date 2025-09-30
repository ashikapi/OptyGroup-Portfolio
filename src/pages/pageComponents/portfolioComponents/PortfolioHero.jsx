import React from 'react'; // Importing React to use JSX

const PortfolioHero = () => {
  return (
    <div>
      {/* Main hero section with a background */}
      <div>
        <div
          className="w-full h-auto pt-28 pb-28 bg-gray-950 flex justify-center items-center"
        >
          {/* Flex container to align content */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 px-6">
            
            <div className="space-y-6 text-center lg:text-left">
              {/* Breadcrumb section for navigation */}
              <div className="flex justify-center lg:justify-start gap-10">
                <h1 className="text-lg lg:text-xl font-semibold text-white">Our Portfolio</h1>
              </div>

              {/* Main title for the hero section */}
              <h1 className="text-4xl lg:text-4xl font-bold text-[rgb(245,124,0)] font-mono uppercase tracking-wide leading-tight">
                Our Portfolio - Showcasing Excellence and Innovation
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

export default PortfolioHero; // Exporting the PortfolioHero component
