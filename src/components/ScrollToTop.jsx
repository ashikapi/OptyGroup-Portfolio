import { useEffect } from "react"; // Importing the useEffect hook from React
import { useLocation } from "react-router-dom"; // Importing useLocation from react-router-dom to track the current URL

const ScrollToTop = () => {
  // Destructuring pathname from useLocation to get the current route path
  const { pathname } = useLocation();

  // useEffect hook that runs whenever the pathname changes (i.e., whenever the route changes)
  useEffect(() => {
    // Scroll the window to the top (0,0) when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array is set to [pathname], so this effect runs whenever the pathname changes

  // Since this component doesn't render anything, it returns null
  return null;
};

export default ScrollToTop; // Exporting the component to be used in the application
