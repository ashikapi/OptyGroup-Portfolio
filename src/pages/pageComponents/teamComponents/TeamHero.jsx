import React from 'react'; // Importing React to use JSX

const TeamHero = () => {
  return (
    <div>
      <div>
        {/* Hero section with background image, overlay, and flex layout */}
        <div className="w-full h-auto pt-40 pb-40 bg-[url('https://itsulu.bslthemes.com/wp-content/uploads/2023/09/20.jpg')] 
            bg-[rgb(44,49,56)] bg-blend-overlay bg-cover bg-center bg-no-repeat flex justify-center items-center top-10 pt-20 pb-20">
          {/* Background image with overlay color and flex layout */}
          <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-20 px-6">
            <div className="space-y-6 md:space-y-10 text-center md:text-left">
              {/* Breadcrumb navigation */}
              <div className="flex justify-center md:justify-start gap-4">
                <h1 className="text-xl font-semibold text-white">Teams</h1> {/* Home link */}
              </div>
              {/* Main title for the page */}
              <h1 className="text-3xl sm:text-4xl font-semibold text-white font-mono uppercase">
                Meet Our Experts: A Team Driven by Passion and Innovation
              </h1>
            </div>
            
            {/* Decorative image rotated 90 degrees */}
            <div className="flex justify-center md:justify-end w-full md:w-auto">
              <img
                src="https://itsulu.bslthemes.com/wp-content/uploads/2023/07/deco-2.svg"
                alt="Decorative image"
                className="w-40 transform rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHero; // Exporting the TeamHero component
