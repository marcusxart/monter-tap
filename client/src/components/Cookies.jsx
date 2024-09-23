import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieComponent = () => {
  // State to track if the cookies banner should be visible
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  // Check if the user has already accepted or declined cookies
  useEffect(() => {
    // const cookiesConsent = localStorage.getItem("cookies");
    // if (cookiesConsent) {
    //   setCookiesAccepted(true);
    // }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookies", true);
    setCookiesAccepted(true); // Hide banner after accepting
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookies", false);
    setCookiesAccepted(true); // Hide banner after declining
  };

  // If cookies are already accepted/declined, don't show the banner
  // if (cookiesAccepted) return null;

  return (
    <div className="cookie-banner fixed z-20 bottom-0 left-0 w-full bg-gray-900 text-white p-6 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm md:text-base text-center md:text-left">
          We use cookies to enhance your experience. By using our site, you
          agree to our use of cookies.
        </p>

        <div className="flex space-x-4">
          <button
            onClick={handleDeclineCookies}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Decline
          </button>
          <button
            onClick={handleAcceptCookies}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieComponent;
