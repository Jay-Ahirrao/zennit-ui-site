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
                <nav className="flex items-center justify-between mx-auto max-w-4xl mt-2 rounded-full bg-white/10 backdrop-blur-lg px-6 py-3 border border-white/20 shadow-lg">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">

                            <ShinyText
                                text="SECUREFLASH"
                                disabled={false}
                                speed={3}
                                className='custom-class'
                            />
                        </span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="font-semibold hover:text-gray-300 transition-colors">About</button>
                        <button onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition-colors">FAQs</button>
                        <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition-colors">Testimonials</button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-300 transition-colors">Contact</button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="mt-40 text-center mx-auto max-w-4xl px-4 animate-fadein animate-duration-2000 animate-forwards">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bbh-sans font-normal leading-tight">
                        FORTIFY YOUR DIGITAL FRONTIER.
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl text-gray-300">
                        Unbreakable security for a connected world.
                    </p>
                    <div className="mt-12 flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors duration-200">
                            Request a Security Audit
                        </button>
                        <button className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/30 transition-colors duration-200">
                            Explore Our Solutions
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

