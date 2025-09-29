import React from 'react'; // Importing React to use JSX

const OurBusiness = () => {
    // Business information array, including the main title, description, and business details (title, text, and image)
    const businessInfo = [
        {
            maintitle: "Visit Our Business",
            description: "We specialize in delivering cutting-edge technology solutions that drive business growth and operational efficiency. Our expertise spans across various industries, enabling us to provide tailored services that meet the unique needs of each client.",
            businessDetails: [
                {
                    title: "Tech Solutions",
                    text: "A technology company that builds innovative software and digital platforms to streamline business operations and enhance user experience.",
                    image: "https://images.businessnewsdaily.com/app/uploads/2022/04/04082844/1554241953.jpeg"
                },
                {
                    title: "The Marketing Hub",
                    text: "A full-service marketing agency dedicated to helping brands grow their online presence. We create strategic campaigns, engaging content.",
                    image: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a016e9dbb727fdbb6e0de37b6789d9d9/hubspot-marketing-hub.jpg"
                },
                {
                    title: "Apex Financial Advisors",
                    text: "A financial services firm providing expert guidance on investment, wealth management, and financial planning.",
                    image: "https://static.mywebsites360.com/c957032a929c48ab8793587a48194d7c/i/b8893bf3ac304574857650cf1cde1c15/1/5feFb8zhrk/apex%20logo.jpg"
                },
                {
                    title: "Health & Wellness Co.",
                    text: "A healthcare company focused on providing accessible and compassionate care. We offer a range of health services.",
                    image: "https://images.squarespace-cdn.com/content/v1/59d7095a8a02c7509766605b/1703627433845-9UMB8INDKMX6SZO0LAZX/Wesbite+Photo+%281%29.png?format=1500w"
                },
                {
                    title: "Swift Logistics",
                    text: "A logistics and supply chain company that ensures the efficient and reliable movement of goods. We handle everything from transportation.",
                    image: "https://www.swiftlogisticsgroup.co.uk/uploads/about-us/swift-logistics-newbury-fleet-2019-12-06.jpg?20191206"
                },
                {
                    title: "The Growth Consultants",
                    text: "A management consulting firm that partners with businesses to solve complex challenges. We provide strategic advice and actionable plans.",
                    image: "https://bridgepointconsulting.com/wp-content/uploads/2023/06/emerging-growth-consultant-skills-job-duties-hiring-benefits.jpg"
                },
            ],
        },
    ];

    return (
        <div className='flex justify-center items-center'>
            <div className='w-screen'>
                {/* Header Section */}
                <div className='flex justify-center items-center md:mt-20 md:mb-10'>
                    {businessInfo.map((info, index) => (
                        <div className='w-[900px] p-10 text-center space-y-5' key={index}>
                            {/* Business Title */}
                            <h1 className='md:text-5xl text-3xl font-extrabold text-[rgb(245,124,0)] font-montserrat'>{info.maintitle}</h1>
                            {/* Business Description */}
                            <p className='md:text-xl text-sm font-semibold text-white'>{info.description}</p>
                        </div>
                    ))}
                </div>

                {/* Business Details Section - Each business card with an image */}
                <div className='flex justify-center items-center mb-20'>
                    <div className='lg:grid grid-cols-2 gap-20 lg:space-y-0 space-y-10'>
                        {businessInfo[0].businessDetails.map((detail, idx) => (
                            <div key={idx}>
                                {/* Each business card with image and text */}
                                <div className="lg:w-[600px] lg:h-[350px] w-96 h-96 rounded-3xl bg-cover bg-center bg-no-repeat flex justify-center items-center relative group transition-transform duration-300 hover:scale-105"
                                    style={{ backgroundImage: `url(${detail.image})` }}>
                                    {/* Overlay text that appears on hover */}
                                    <div className='absolute inset-0 group-hover:hidden transition-all duration-300
                                 p-2 bg-gradient-to-r from-cyan-950 to-blue-500 bg-opacity-80 text-white space-y-1
                                  lg:mt-[250px] mt-[250px] rounded-b-3xl'>
                                        <h1 className='px-6 lg:text-xl text-lg font-extrabold bg-gradient-to-l from-cyan-600 to-green-600 bg-clip-text text-transparent'>{detail.title}</h1>
                                        <p className='px-6 text-sm'>{detail.text}</p>
                                    </div>

                                    {/* Hidden overlay that appears when hovering */}
                                    <div className='flex justify-center items-center'>
                                        <div className='hidden group-hover:block absolute inset-0 bg-black bg-opacity-80 lg:pt-20 pt-16 transition-all duration-300 p-10 text-center space-y-5 rounded-3xl select-none'>
                                            <h1 className='text-4xl font-extrabold text-purple-600'>{detail.title}</h1>
                                            <p className='bg-gradient-to-r from-yellow-400 to-orange-700 bg-clip-text text-transparent font-semibold'>{detail.text}</p>
                                            {/* Button to visit the business */}
                                            <button className='px-4 py-2 bg-cyan-800 rounded-full text-white font-extrabold'>Visit Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBusiness; // Exporting the OurBusiness component
