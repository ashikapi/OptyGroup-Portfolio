import React from 'react'; // Importing React to use JSX

const HeroServices = () => {
  return (
    <div>
      {/* Hero section with background image, overlay, and flex layout */}
      <div className="w-full h-auto pt-40 pb-40 bg-[url('https://itsulu.bslthemes.com/wp-content/uploads/2023/09/15.jpg')] 
        bg-black bg-opacity-70 bg-blend-overlay bg-cover bg-center bg-no-repeat flex justify-center items-center">
        
        {/* Background image with overlay color and flex layout */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 px-6">
          
          <div className="space-y-6 md:space-y-10 text-center md:text-left">
            {/* Main title for the Services section */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white font-serif uppercase tracking-wide">
              Services
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-[rgb(245,124,0)] mt-4">
              Powerful Solutions to Elevate Your Business to the Next Level
            </h2>
          </div>
          
          {/* Decorative image rotated 90 degrees */}
          <div className="w-40 flex justify-center mt-10 md:mt-0">
            <img
              src="https://itsulu.bslthemes.com/wp-content/uploads/2023/07/deco-2.svg"
              alt="decorative image"
              className="transform rotate-90 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroServices; // Exporting the HeroServices component
