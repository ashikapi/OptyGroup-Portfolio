import React, { useState } from 'react'; // import useState

const PortfolioContant = () => {
  // Portfolio data array
  const portfolioItems = [
    {
      title: "Smiling Tailor - Revolutionizing Tailoring Business Management",
      description: "Simple & easy way to manage your business",
      developedBy: "Applamining",
      category: "ERP/CRM",
      image: "https://i.ibb.co.com/sJf7YX6/image.png",
      icons: ["/path-to-icon1.svg", "/path-to-icon2.svg", "/path-to-icon3.svg"]
    },
    {
      title: "Project Alpha - Advanced Project Management Tool",
      description: "Streamline your workflows and collaborate better",
      developedBy: "Techify",
      category: "Management",
      image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5e637e2188e272d1dcdcf45d8c3f0c0f95c9df86/16053986604eff6c873909ac646858c3b4e82a27",
      icons: ["/path-to-icon1.svg", "/path-to-icon2.svg"]
    },
    {
      title: "DataX - Big Data Analytics",
      description: "Transform your data into actionable insights",
      developedBy: "DataWiz",
      category: "Analysis",
      image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5e637e2188e272d1dcdcf45d8c3f0c0f95c9df86/6f272a01716bb5432e1198c432e30063659a46e4",
      icons: ["/path-to-icon1.svg", "/path-to-icon3.svg"]
    },
    {
      title: "MarketingHub - Marketing Automation Tool",
      description: "Boost your marketing efforts with automation",
      developedBy: "MarketTech",
      category: "Marketing",
      image: "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5e637e2188e272d1dcdcf45d8c3f0c0f95c9df86/083c124736a47abded6af02348f124e750746c31",
      icons: ["/path-to-icon2.svg", "/path-to-icon3.svg"]
    },
  ];

  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter the portfolio items based on the active category
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gray-700 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-[rgb(245,124,0)]  mb-8">Our Portfolio</h1>
        
        {/* Category buttons */}
        <div className="flex justify-center mb-6">
          {['All', 'ERP/CRM', 'Management', 'Analysis', 'Marketing'].map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`md:py-2 md:px-4 px-2 py-1 md:-ml-0 md:-mr-0 -ml-0.5 -mr-0.5 border ${
                index === 0 ? 'rounded-l-lg' : index === 4 ? 'rounded-r-lg' : ''
              } ${
                activeCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-2 mr-2">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-72 transform transition hover:scale-105 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-cyan-900">{item.title}</h2>
                <p className="text-gray-500 mt-2">{item.description}</p>
                <div className="flex items-center mt-4">
                  <span className="text-sm text-gray-400">Developed by {item.developedBy}</span>
                </div>
                <div className="flex space-x-3 mt-4">
                  {item.icons.map((icon, idx) => (
                    <div key={idx} className="bg-blue-200 p-2 rounded-full">
                      <img src={icon} alt={`icon-${idx}`} className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContant;
