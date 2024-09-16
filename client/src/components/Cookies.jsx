import React, { useState } from "react";
import Cookies from "js-cookie";

const CookieComponent = () => {
  const [consentGiven, setConsentGiven] = useState(
    !!Cookies.get("cookieConsent") // Check if consent is already given
  );

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 }); // Store consent for a year
    setConsentGiven(true);
  };

  if (consentGiven) {
    return null; // Hide the component if consent is already given
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to enhance your experience. By using our site, you agree
        to our use of cookies.
      </p>
      <button onClick={handleAcceptCookies}>Accept Cookies</button>
    </div>
  );
};

export default CookieComponent;
