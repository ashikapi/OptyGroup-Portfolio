import React, { useState } from 'react'; 
import { IoMdArrowRoundDown } from "react-icons/io"; 
import { IoMdArrowRoundForward } from "react-icons/io"; 
import { IoIosArrowBack } from "react-icons/io"; 
import { IoIosArrowForward } from "react-icons/io"; 

const BlogContent = () => {

  // Blog details array
  const blogDetails = [
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/07/b2.jpg',
      title: 'Learning',
      date: 'October 6, 2023',
      subtitle: 'Build Your Money Machine, Take Control',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/07/b1.jpg',
      title: 'Learning',
      date: 'October 6, 2023',
      subtitle: 'Positioning Your Self As a Pro Consultant',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/09/p19.jpg',
      title: 'Learning',
      date: 'October 6, 2023',
      subtitle: 'The Latest Technology Have Suffered Alteration',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/09/p18.jpg',
      title: 'Management',
      date: 'October 6, 2023',
      subtitle: 'Android Application Products Delivery',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/07/b6.jpg',
      title: 'Management',
      date: 'July 21, 2023',
      subtitle: 'Easy & Most Powerful Server Platform',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/07/b3.jpg',
      title: 'Software',
      date: 'July 21, 2023',
      subtitle: 'Android App For Shaving Products Drive',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
    {
      blogLogo: 'https://itsulu.bslthemes.com/wp-content/uploads/2023/07/b4.jpg',
      title: 'Management',
      date: 'July 21, 2023',
      subtitle: 'The World’s Fastest 2 Qubit Qate',
      text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised…'
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogs = blogDetails.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < blogDetails.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='pt-10 pb-10 pl-2 pr-2'>
      <div className='container mx-auto'>
        {/* Section title */}
        <div className='text-center mb-10'>
          <h5 className='text-xl font-bold text-gray-900'>Our Blog Posts</h5>
          <h1 className='text-[rgb(245,124,0)] text-4xl font-extrabold'>Explore Our Latest Content</h1>
        </div>

        {/* Blog grid layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {currentBlogs.map((details, index) => (
            <div key={index} className='space-y-4'>
              {/* Blog image */}
              <div className="w-full h-60 bg-cover bg-center rounded-xl"
                style={{ backgroundImage: `url(${details.blogLogo})` }}></div>

              {/* Blog title and date */}
              <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>{details.title}</h1>
                <p className='text-sm text-gray-500'>{details.date}</p>
              </div>

              {/* Separator */}
              <div className='flex items-center space-x-2'>
                <hr className='w-6 border-b-2 border-[rgb(245,124,0)]' />
                <hr className='w-full border-b-2 border-gray-300' />
              </div>

              {/* Blog subtitle and description */}
              <div className='space-y-2'>
                <h2 className='text-xl font-bold'>{details.subtitle}</h2>
                <p className='text-gray-600'>{details.text}</p>
              </div>

              {/* Read more button */}
              <button className='flex items-center text-[rgb(245,124,0)] hover:underline'>
                <p>Read more</p>
                <IoMdArrowRoundForward className='ml-2' />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className='flex justify-center gap-8 items-center mt-8'>
          <button onClick={handlePrev} className='px-4 py-2 bg-gray-800 text-white rounded-md' disabled={currentPage === 0}>
            <IoIosArrowBack /> Previous
          </button>
          <button onClick={handleNext} className='px-4 py-2 bg-gray-800 text-white rounded-md' disabled={endIndex >= blogDetails.length}>
            Next <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
