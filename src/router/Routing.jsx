import React from 'react'; // Importing React to use JSX
import { Route, Routes } from 'react-router-dom'; // Importing Route and Routes from react-router-dom for routing
import Contact from '../pages/Contact'; // Importing Contact page
import Home from '../pages/Home'; // Importing Home page
import Layout from '../layout/Layout'; // Importing Layout component to wrap the routes
import About from '../pages/About'; // Importing About page
import Services from '../pages/Services'; // Importing Services page
import ScrollToTop from '../components/ScrollToTop'; // Importing ScrollToTop component for auto scrolling
import Blog from '../pages/Blog'; // Importing Blog page
import Teams from '../pages/Teams'; // Importing Teams page

const Routing = () => {
  return (
    <div>
      {/* Scroll to top functionality for navigating between pages */}
      <ScrollToTop /> 

      <Routes>
        {/* Wrapping all routes under the Layout component */}
        <Route path='/' element={<Layout />}>
          {/* Home route */}
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />

          {/* Services route */}
          <Route path='services' element={<Services />} />

          {/* About route */}
          <Route path='about' element={<About />} />

          {/* Contact route */}
          <Route path='contact' element={<Contact />} />

          {/* Blog route */}
          <Route path='blog' element={<Blog />} />

          {/* Teams route */}
          <Route path='team' element={<Teams />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing; // Exporting the Routing component
