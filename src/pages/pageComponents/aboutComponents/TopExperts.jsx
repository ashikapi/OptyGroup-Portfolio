import React from 'react'; // Importing React to use JSX
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper and SwiperSlide components for the carousel
import 'swiper/swiper-bundle.css'; // Importing Swiper styles

const TopExperts = () => {
  // Expert data including name, image, and designation
  const expertInfo = [
    { id: 1, name: 'Md. Ashikur Rahaman Api', Image: 'https://ashikapi.netlify.app/assets/Ashik%20Api-DC2-S8J_.jpg', designation: 'Frontend Developer' },
    { id: 2, name: 'Fazley Rabbi Riyad', Image: 'https://img.freepik.com/free-photo/close-up-portrait-handsome-smiling-young-man-white-t-shirt-blurry-outdoor-nature_176420-6305.jpg?semt=ais_hybrid&w=740&q=80', designation: 'Backend Developer' },
    { id: 3, name: 'Shihab', Image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg', designation: 'UI/UX Designer' },
    { id: 4, name: 'Shagor', Image: 'https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg', designation: 'Frontend Developer' },
    { id: 5, name: 'Tarek', Image: 'https://i.pinimg.com/474x/4b/59/22/4b5922d22a239def14b8c8fb0e997eb3.jpg', designation: 'Backend Developer' },
    { id: 6, name: 'Jamil', Image: 'https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg', designation: 'UI/UX Designer' },
    { id: 7, name: 'Rohan', Image: 'https://st3.depositphotos.com/4071389/12636/i/450/depositphotos_126362018-stock-photo-handsome-man-in-suit-jacket.jpg', designation: 'UI/UX Designer' }
  ];

  return (
    <div className='pt-20 pb-40'>
      {/* Section title */}
      <div className='text-center'>
        <div className='space-y-5 pb-20'>
          <h5 className='text-xl font-bold text-white'>Our Expert Team Members</h5> {/* Subtitle */}
          <h1 className='text-[rgb(245,124,0)] text-4xl font-extrabold'>Top Skilled Experts</h1> {/* Main title */}
        </div>

        {/* Swiper component for the carousel */}
        <Swiper
          spaceBetween={15} // Set space between slides
          slidesPerView={3} // Number of slides visible at once
          loop={true} // Enable infinite loop of slides
          breakpoints={{
            // Responsive breakpoints
            1024: { slidesPerView: 3 }, // 3 slides for screens above 1024px
            768: { slidesPerView: 2 }, // 2 slides for screens between 768px and 1024px
            480: { slidesPerView: 1 }, // 1 slide for screens smaller than 480px
          }}
        >
          {/* Mapping through expertInfo to create a slide for each expert */}
          {expertInfo.map((info, index) => (
            <SwiperSlide key={index}>
              {/* Expert card layout */}
              <div className='flex justify-center items-center'>
                <div className='p-3 rounded-xl bg-gradient-to-tr from-cyan-400 via-yellow-200 to-orange-500'>
                  <div className="bg-[rgb(15,23,43)] p-6 rounded-lg space-y-4">
                    {/* Expert image */}
                    <img
                      src={info.Image}
                      alt={info.name}
                      className='w-full h-[300px] object-cover rounded-lg mb-4' // Make the image responsive
                    />
                    {/* Expert name and designation */}
                    <h1 className="text-xl font-semibold text-[rgb(245,124,0)]">{info.name}</h1>
                    <p className="text-sm text-gray-300">{info.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopExperts;
