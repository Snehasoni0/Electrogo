"use client";
import React, { forwardRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

// We use forwardRef so the parent form can "reach in" and get the captcha value
const GoogleCaptcha = forwardRef((props, ref) => {
  // Replace the string below with your actual Site Key
  const SITE_KEY = "6LdNvYUsAAAAAI_8xjhNMf0b43yAk_p5W6Wmm5gC";

  return (
    <div className="flex justify-center md:justify-start">
      <ReCAPTCHA
        ref={ref}
        sitekey={SITE_KEY}
        theme="dark" 
      />
    </div>
  );
});

GoogleCaptcha.displayName = "GoogleCaptcha";

export default GoogleCaptcha;