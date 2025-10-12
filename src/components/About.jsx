import React from 'react'
import { motion } from 'framer-motion'
import DecryptedText from './DecryptedText'
import ElectricBorder from './ElectricBorder'

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <div>
            <section className="py-24 bg-black text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
                            Our Capabilities
                        </h2>
                        <div className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            <DecryptedText
                                text="We provide comprehensive solutions to secure your digital assets from every angle."
                                animateOn="view"
                                revealDirection="start"
                                className="text-white font-small"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Feature Card 1 */}
                        <ElectricBorder
                            color="#91e63d" className={"group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:shadow-green-500/20 hover:shadow-2xl transform hover:-translate-y-2"} 
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }
                            }
                        >
                            <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Threat Detection
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Proactive monitoring and advanced analytics to identify and neutralize threats before they escalate.
                            </p>
                        </ElectricBorder>

                        {/* Feature Card 2 */}
                        <ElectricBorder
                            color="#c13de6" className={"group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:shadow-green-500/20 hover:shadow-2xl transform hover:-translate-y-2"} 
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }
                            }
                        >
                            <div className="text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Secure Infrastructure
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Fortify your networks and cloud environments with robust, multi-layered security protocols.
                            </p>
                        </ElectricBorder>

                        {/* Feature Card 3 */}
                        <ElectricBorder
                            color="#e63d3d" className={"group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:border-green-500/50 transition-all duration-500 hover:shadow-green-500/20 hover:shadow-2xl transform hover:-translate-y-2"} 
                            speed={1}
                            chaos={0.5}
                            thickness={2}
                            style={{ borderRadius: 16 }
                            }
                        >
                            <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white">
                                Compliance & Audits
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Navigate complex regulations with ease through our expert-led compliance and security audits.
                            </p>
                        </ElectricBorder>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About