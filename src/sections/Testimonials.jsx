import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp Solutions",
      content: "SecureFlash transformed our security infrastructure completely. Their proactive threat detection and expert team helped us prevent multiple potential breaches. The peace of mind we now have is invaluable.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "Security Director, Global Finance Inc.",
      content: "Working with SecureFlash has been exceptional. Their compliance audits were thorough and their recommendations were practical and implementable. Our security posture has never been stronger.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "IT Manager, Healthcare Plus",
      content: "The team at SecureFlash understands the unique challenges of healthcare security. They helped us navigate complex regulations while maintaining our patient data protection standards. Highly recommended.",
      avatar: "ER"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by industry leaders for comprehensive security solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:shadow-blue-500/10 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>

              <blockquote className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              <div className="mt-6 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;