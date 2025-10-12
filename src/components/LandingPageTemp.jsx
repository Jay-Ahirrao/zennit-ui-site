import React from 'react';
import Lightning from './Lightning'; // Assuming the Lightning component is in a file named Lightning.jsx
import ShinyText from './ShinyText';


const LandingPage = () => {
    return (
        <div className=" min-h-screen bg-black text-white overflow-hidden">
            {/* Background Lightning Effect */}
            <div className="absolute inset-0" max-h-screen>
                <Lightning
                    hue={360}
                    xOffset={0}
                    speed={1}
                    intensity={2}
                    size={2}
                />
            </div>

            {/* Main Content Container with Translucent Navigation and Hero Section */}
            <div className="relative z-10 p-4">
                {/* Translucent Navigation Bar */}
                <nav className="flex items-center justify-between mx-auto max-w-4xl mt-2 rounded-full bg-white/10 backdrop-blur-lg px-3 py-1 border border-white/20 shadow-lg hover:max-w-[54rem] transition-all duration-300">
                    <div className="flex items-center space-x-2 ">
                        <span className="text-xl font-bold bg-gradient-to-r from-red-400 via-orange-300 to-blue-600 bg-clip-text text-transparent">
                            <img className='h-12' src="https://i.ibb.co/Y7jLNpmp/l1-removebg-preview.png" alt="secureflash" />
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm animate-fadein animate-duration-1000 animate-delay-500">
                        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-semibold hover:text-gray-300 transition-colors active:scale-95">About</button>
                        <button onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition-colors active:scale-95">FAQs</button>
                        <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition-colors active:scale-95">Testimonials</button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 pr-10 transition-colors active:scale-95">Contact</button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="mt-40 text-center mx-auto max-w-4xl px-4 animate-fadein animate-duration-2000 animate-forwards">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold shadow-black-lg" style={{ fontFamily: "'PP Pangaia', sans-serif" }}>
                        FORTIFY YOUR DIGITAL FRONTIER.
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-gray-300">
                        Unbreakable security for a connected world.
                    </p>
                    <div className="mt-12 flex justify-center space-x-4">
                        <button className="px-6 py-3 text-white font-small rounded-full hover:shadow transition-all duration-300 border border-white relative overflow-hidden group flex items-center">
                            <svg className="w-5 h-5 mr-2 group-hover:shake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <ShinyText
                                text="Request a Security Audit"
                                disabled={false}
                                speed={3}
                                className='custom-class'
                            />
                        </button>
                        <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-small rounded-full border border-white/80 hover:bg-white/30 transition-colors duration-200">
                            Explore Our Solutions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

