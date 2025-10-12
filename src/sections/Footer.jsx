import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101b36] text-white px-6 py-12 md:px-20 rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          {/* Logo & CTA */}
          <div className="max-w-xl">
            <h1 className="text-5xl sm:text-6xl font-semibold brico text-[#e86294]">
              SaySocial
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              The next big thing starts here— <br />
              drop us a line and let’s get creating!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div className="space-y-3">
              <p className="hover:text-[#e86294] cursor-pointer">Home</p>
              <p className="hover:text-[#e86294] cursor-pointer">Benefits</p>
              <p className="hover:text-[#e86294] cursor-pointer">Portfolio</p>
              <p className="hover:text-[#e86294] cursor-pointer">Reviews</p>
              <p className="hover:text-[#e86294] cursor-pointer">About</p>
            </div>
            <div className="space-y-3">
              <p className="hover:text-[#e86294] cursor-pointer">LinkedIn</p>
              <p className="hover:text-[#e86294] cursor-pointer">Facebook</p>
              <p className="hover:text-[#e86294] cursor-pointer">Twitter</p>
              <p className="hover:text-[#e86294] cursor-pointer">Instagram</p>
              <p className="hover:text-[#e86294] cursor-pointer">YouTube</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.093 15.093 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.59a1 1 0 01-.24 1.01l-2.21 2.19z"/>
              </svg>
              <span>PHONE</span>
            </div>
            <p>(+91) 8237006990</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 
                2v12c0 1.1.9 2 2 2h16c1.1 0 
                2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>EMAIL</span>
            </div>
            <p>saysocial@email.com</p>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.14 2 5 5.14 5 
                9c0 5.25 7 13 7 
                13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 
                9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 
                6.5 12 6.5s2.5 1.12 2.5 
                2.5S13.38 11.5 12 11.5z"/>
              </svg>
              <span>ADDRESS</span>
            </div>
            <p>
              123 Main Street, Suite 200, <br />
              Austin, TX 78701
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8V12l3 3 .7-.7L13 
                11.5V8zm0-6C6.48 2 2 6.48 2 
                12s4.48 10 10 10 10-4.48 
                10-10S17.52 2 12 2z"/>
              </svg>
              <span>OPENING HOURS</span>
            </div>
            <p>Mon to Sat: 9.00am - 8.30pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <hr className="border-gray-700 mt-10 mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <p>© Say Social - All rights reserved 2025</p>
          <p>Made with ❤️ by Nexacrft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
